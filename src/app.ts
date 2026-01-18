import { courseOutline } from "./courseData";
import type { Module } from "./types";

const moduleGrid = document.querySelector<HTMLDivElement>("#module-grid");
const searchInput = document.querySelector<HTMLInputElement>("#search-input");
const moduleCount = document.querySelector<HTMLElement>("#module-count");
const lessonCount = document.querySelector<HTMLElement>("#lesson-count");
const resultCount = document.querySelector<HTMLElement>("#result-count");

if (!moduleGrid || !searchInput || !moduleCount || !lessonCount || !resultCount) {
  throw new Error("Elementos essenciais não encontrados no DOM.");
}

const normalizeText = (value: string): string => value.toLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, "");

const countLessons = (modules: Module[]): number =>
  modules.reduce((total, moduleItem) => total + moduleItem.lessons.length, 0);

const createModuleCard = (moduleItem: Module): string => {
  const lessonsMarkup = moduleItem.lessons
    .map((lesson) => `<li><span>${lesson.id}</span>${lesson.title}</li>`)
    .join("");

  return `
    <article class="module">
      <h3 class="module__title">${moduleItem.title}</h3>
      <ul class="module__lessons">${lessonsMarkup}</ul>
    </article>
  `;
};

const renderModules = (modules: Module[]): void => {
  if (modules.length === 0) {
    moduleGrid.innerHTML = `
      <div class="module module--empty">
        <h3 class="module__title">Nada encontrado</h3>
        <p>Tente buscar por outro módulo, recurso ou lição.</p>
      </div>
    `;
    return;
  }

  moduleGrid.innerHTML = modules.map(createModuleCard).join("");
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

const updateView = (query: string): void => {
  const filteredModules = filterModules(courseOutline.modules, query);
  renderModules(filteredModules);
  updateSummary(courseOutline.modules, countLessons(filteredModules));
};

searchInput.addEventListener("input", (event: Event): void => {
  const target = event.target as HTMLInputElement;
  updateView(target.value);
});

updateView("");
