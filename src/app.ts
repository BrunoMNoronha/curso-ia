import { courseOutline } from "./courseData";
import type { Module } from "./types";

const moduleGrid = document.querySelector<HTMLDivElement>("#module-grid");
const searchInput = document.querySelector<HTMLInputElement>("#search-input");
const moduleCount = document.querySelector<HTMLElement>("#module-count");
const lessonCount = document.querySelector<HTMLElement>("#lesson-count");
const resultCount = document.querySelector<HTMLElement>("#result-count");
const moduleDetail = document.querySelector<HTMLElement>("#module-detail");

if (!moduleGrid || !searchInput || !moduleCount || !lessonCount || !resultCount || !moduleDetail) {
  throw new Error("Elementos essenciais não encontrados no DOM.");
}

const normalizeText = (value: string): string => value.toLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, "");

const countLessons = (modules: Module[]): number =>
  modules.reduce((total, moduleItem) => total + moduleItem.lessons.length, 0);

const createModuleCard = (moduleItem: Module, onSelect: (moduleId: string) => void): HTMLElement => {
  const card = document.createElement("article");
  card.className = "module";
  card.dataset.moduleId = moduleItem.id;
  card.tabIndex = 0;
  card.setAttribute("role", "button");

  const lessonsMarkup = moduleItem.lessons
    .map((lesson) => `<li><span>${lesson.id}</span>${lesson.title}</li>`)
    .join("");

  card.innerHTML = `
    <h3 class="module__title">${moduleItem.title}</h3>
    <ul class="module__lessons">${lessonsMarkup}</ul>
  `;

  card.addEventListener("click", (): void => {
    onSelect(moduleItem.id);
  });

  card.addEventListener("keydown", (event: KeyboardEvent): void => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onSelect(moduleItem.id);
    }
  });

  return card;
};

const renderModules = (modules: Module[], selectedModuleId: string | null, onSelect: (moduleId: string) => void): void => {
  if (modules.length === 0) {
    moduleGrid.innerHTML = `
      <div class="module module--empty">
        <h3 class="module__title">Nada encontrado</h3>
        <p>Tente buscar por outro módulo, recurso ou lição.</p>
      </div>
    `;
    return;
  }

  moduleGrid.innerHTML = "";
  const fragment = document.createDocumentFragment();

  modules.forEach((moduleItem) => {
    const card = createModuleCard(moduleItem, onSelect);
    if (selectedModuleId && moduleItem.id === selectedModuleId) {
      card.classList.add("module--active");
    }
    fragment.appendChild(card);
  });

  moduleGrid.appendChild(fragment);
};

const filterModules = (modules: Module[], query: string): Module[] => {
  const normalizedQuery = normalizeText(query.trim());

  if (!normalizedQuery) {
    return modules;
  }

  return modules.reduce<Module[]>((accumulator, moduleItem) => {
    const moduleMatches = normalizeText(moduleItem.title).includes(normalizedQuery);
    const matchingLessons = moduleItem.lessons.filter((lesson) =>
      normalizeText(lesson.title).includes(normalizedQuery)
    );

    if (moduleMatches) {
      accumulator.push(moduleItem);
      return accumulator;
    }

    if (matchingLessons.length > 0) {
      accumulator.push({ ...moduleItem, lessons: matchingLessons });
    }

    return accumulator;
  }, []);
};

const updateSummary = (modules: Module[], visibleLessons: number): void => {
  moduleCount.textContent = modules.length.toString();
  lessonCount.textContent = countLessons(courseOutline.modules).toString();
  resultCount.textContent = visibleLessons.toString();
};

const renderModuleDetail = (moduleItem: Module | null): void => {
  if (!moduleItem) {
    moduleDetail.innerHTML = `
      <h3 class="module-detail__title">Selecione um módulo</h3>
      <p class="module-detail__empty">
        Clique em um módulo para ver o conteúdo completo e acompanhar as lições.
      </p>
    `;
    return;
  }

  const lessonsMarkup = moduleItem.lessons
    .map((lesson) => `<li><span>${lesson.id}</span>${lesson.title}</li>`)
    .join("");

  moduleDetail.innerHTML = `
    <h3 class="module-detail__title">${moduleItem.title}</h3>
    <ul class="module-detail__lessons">${lessonsMarkup}</ul>
  `;
};

let selectedModuleId: string | null = null;
let visibleModules: Module[] = [];

const handleModuleSelect = (moduleId: string): void => {
  selectedModuleId = moduleId;
  renderModules(visibleModules, selectedModuleId, handleModuleSelect);
  const selectedModule = visibleModules.find((moduleItem) => moduleItem.id === selectedModuleId) ?? null;
  renderModuleDetail(selectedModule);
};

const updateView = (query: string): void => {
  visibleModules = filterModules(courseOutline.modules, query);
  const selectedModule =
    selectedModuleId ? visibleModules.find((moduleItem) => moduleItem.id === selectedModuleId) ?? null : null;

  if (!selectedModule) {
    selectedModuleId = null;
  }

  renderModules(visibleModules, selectedModuleId, handleModuleSelect);
  renderModuleDetail(selectedModule);
  updateSummary(courseOutline.modules, countLessons(visibleModules));
};

searchInput.addEventListener("input", (event: Event): void => {
  const target = event.target as HTMLInputElement;
  updateView(target.value);
});

updateView("");
