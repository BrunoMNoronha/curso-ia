// src/courseData.ts
var courseOutline = {
  title: "Domine o ChatGPT Plus",
  description: "Sum\xE1rio completo com m\xF3dulos, li\xE7\xF5es e trilhas para dominar o ChatGPT Plus.",
  modules: [
    {
      id: "mod-00",
      title: "M\xF3dulo 00 - Setup e vis\xE3o geral",
      lessons: [
        { id: "0.1", title: "Como o curso est\xE1 organizado (trilhas: uso geral, trabalho, desenvolvimento)" },
        { id: "0.2", title: "Onde cada recurso aparece na interface (Web, iOS/Android, Windows, macOS)" },
        { id: "0.3", title: "Limites e varia\xE7\xF5es por plano (por que \u201Climites aplicam\u201D)" }
      ]
    },
    {
      id: "mod-01",
      title: "M\xF3dulo 01 - ChatGPT Plus: o que muda na pr\xE1tica",
      lessons: [
        { id: "1.1", title: "O que \xE9 o Plus e o que ele inclui (prioridade, limites maiores, recursos expandidos)" },
        { id: "1.2", title: "Modelos dispon\xEDveis no Plus: GPT-5 e modelos de racioc\xEDnio (quando usar cada um)" },
        { id: "1.3", title: "O que n\xE3o est\xE1 inclu\xEDdo: API \xE9 cobrada separadamente (fronteira produto vs. API)" }
      ]
    },
    {
      id: "mod-02",
      title: "M\xF3dulo 02 - Fundamentos que destravam resultado",
      lessons: [
        { id: "2.1", title: "Estrutura de prompt (objetivo, contexto, restri\xE7\xF5es, formato de sa\xEDda)" },
        { id: "2.2", title: "T\xE9cnicas de itera\xE7\xE3o (refinar, criticar, verificar, padronizar)" },
        { id: "2.3", title: "Padr\xF5es de confiabilidade (o que pedir para reduzir alucina\xE7\xE3o)" }
      ]
    },
    {
      id: "mod-03",
      title: "M\xF3dulo 03 - Pesquisa na web com cita\xE7\xF5es",
      lessons: [
        { id: "3.1", title: "Quando usar Search vs. Deep Research" },
        { id: "3.2", title: "Leitura de resultados e valida\xE7\xE3o por fontes" },
        { id: "3.3", title: "Como exigir cita\xE7\xF5es e como auditar respostas" }
      ]
    },
    {
      id: "mod-04",
      title: "M\xF3dulo 04 - Deep Research (pesquisa longa e estruturada)",
      lessons: [
        { id: "4.1", title: "Como formular uma pergunta \u201Cpesquis\xE1vel\u201D" },
        { id: "4.2", title: "Planejamento, escopo, crit\xE9rios e entreg\xE1veis" },
        { id: "4.3", title: "Como transformar pesquisa em decis\xE3o (resumo executivo, riscos, pr\xF3ximos passos)" }
      ]
    },
    {
      id: "mod-05",
      title: "M\xF3dulo 05 - Uploads e an\xE1lise de arquivos",
      lessons: [
        { id: "5.1", title: "Quais arquivos funcionam melhor (PDF, planilhas, docs, logs)" },
        { id: "5.2", title: "Perguntas boas para an\xE1lise (extra\xE7\xE3o, compara\xE7\xE3o, auditoria, s\xEDntese)" },
        { id: "5.3", title: "Boas pr\xE1ticas de privacidade ao enviar arquivos" }
      ]
    },
    {
      id: "mod-06",
      title: "M\xF3dulo 06 - Imagens (gera\xE7\xE3o e edi\xE7\xE3o)",
      lessons: [
        { id: "6.1", title: "Prompt de imagem (estilo, composi\xE7\xE3o, negativo, consist\xEAncia)" },
        { id: "6.2", title: "Edi\xE7\xE3o de imagem com instru\xE7\xF5es precisas (o que pedir / o que evitar)" },
        { id: "6.3", title: "Limites, qualidade e guardrails por uso" }
      ]
    },
    {
      id: "mod-07",
      title: "M\xF3dulo 07 - Voz avan\xE7ada (inclui v\xEDdeo e compartilhamento de tela)",
      lessons: [
        { id: "7.1", title: "Voz no Web vs apps (como iniciar e controlar)" },
        { id: "7.2", title: "V\xEDdeo na conversa por voz (c\xE2mera)" },
        { id: "7.3", title: "Compartilhar tela e imagens durante a voz" },
        { id: "7.4", title: "Limites de voz/v\xEDdeo/screen share e fallback de modelo" },
        { id: "7.5", title: "Controles de dados (o que pode ser usado para treino e como desligar)" }
      ]
    },
    {
      id: "mod-08",
      title: "M\xF3dulo 08 - Canvas (editor de escrita e c\xF3digo)",
      lessons: [
        { id: "8.1", title: "Quando usar Canvas vs chat normal" },
        { id: "8.2", title: "Revis\xE3o guiada (selecionar trechos, feedback inline, atalhos)" },
        { id: "8.3", title: "Canvas para c\xF3digo (render/execu\xE7\xE3o quando dispon\xEDvel)" },
        { id: "8.4", title: "Compartilhar Canvas e exportar (PDF/MD/DOCX ou arquivo de c\xF3digo)" },
        { id: "8.5", title: "Habilitar Canvas dentro de um GPT (capability no GPT Builder)" }
      ]
    },
    {
      id: "mod-09",
      title: "M\xF3dulo 09 - Projetos (organiza\xE7\xE3o de trabalho)",
      lessons: [
        { id: "9.1", title: "Estrutura de projeto (objetivo, arquivos, vers\xF5es, hist\xF3rico)" },
        { id: "9.2", title: "Padr\xF5es de pastas e assets (prompts, docs, specs, checklists)" },
        { id: "9.3", title: "Reuso: templates por tipo de entrega (dev, estudo, trabalho)" }
      ]
    },
    {
      id: "mod-10",
      title: "M\xF3dulo 10 - GPTs personalizados (Builder)",
      lessons: [
        { id: "10.1", title: "Quando vale criar um GPT vs usar instru\xE7\xF5es no chat" },
        { id: "10.2", title: "Instru\xE7\xF5es, conhecimento, limites e testes" },
        { id: "10.3", title: "Publica\xE7\xE3o/compartilhamento e manuten\xE7\xE3o" }
      ]
    },
    {
      id: "mod-11",
      title: "M\xF3dulo 11 - Tasks (tarefas agendadas)",
      lessons: [
        { id: "11.1", title: "O que Tasks faz (execu\xE7\xE3o autom\xE1tica + notifica\xE7\xE3o)" },
        { id: "11.2", title: "Tipos de agendamento (pontual e recorrente)" },
        { id: "11.3", title: "Onde Tasks funciona (Web, iOS, Android, macOS)" },
        { id: "11.4", title: "Padr\xF5es de tarefas \xFAteis (briefing, lembrete, rotina de estudo)" }
      ]
    },
    {
      id: "mod-12",
      title: "M\xF3dulo 12 - ChatGPT Agent (modo agente)",
      lessons: [
        { id: "12.1", title: "O que \xE9 Agent e quando usar (tarefas multi-etapas com confirma\xE7\xF5es)" },
        { id: "12.2", title: "Como iniciar e como definir escopo e crit\xE9rios" },
        { id: "12.3", title: "Limites no Plus e como reduzir desperd\xEDcio de cota" },
        { id: "12.4", title: "Seguran\xE7a: autentica\xE7\xE3o, confirma\xE7\xF5es, interrup\xE7\xE3o e auditoria" }
      ]
    },
    {
      id: "mod-13",
      title: "M\xF3dulo 13 - Codex (agente de programa\xE7\xE3o)",
      lessons: [
        { id: "13.1", title: "Onde o Codex roda (web, CLI, IDE, cloud)" },
        { id: "13.2", title: "Fluxos: implementar feature, corrigir bug, rodar testes, code review" },
        { id: "13.3", title: "Limites de uso e boas pr\xE1ticas para evitar retrabalho" }
      ]
    },
    {
      id: "mod-14",
      title: "M\xF3dulo 14 - Sora (v\xEDdeo)",
      lessons: [
        { id: "14.1", title: "O que d\xE1 para gerar no Plus (v\xEDdeo e imagens) e limites pr\xE1ticos" },
        { id: "14.2", title: "Resolu\xE7\xE3o/dura\xE7\xE3o e concorr\xEAncia de gera\xE7\xF5es" },
        { id: "14.3", title: "Pol\xEDtica de uso e guardrails (regras anti-abuso)" }
      ]
    },
    {
      id: "mod-15",
      title: "M\xF3dulo 15 - Apps e Conectores (dados externos e sincroniza\xE7\xE3o)",
      lessons: [
        { id: "15.1", title: "Conceito: apps com sync (indexa\xE7\xE3o, permiss\xF5es, uso por @)" },
        { id: "15.2", title: "O que costuma ser suportado (ex.: GitHub/Drive e tipos de arquivo)" },
        { id: "15.3", title: "Elegibilidade por plano e restri\xE7\xF5es (ex.: EKM, data residency)" }
      ]
    },
    {
      id: "mod-16",
      title: "M\xF3dulo 16 - Record (grava\xE7\xE3o e resumo no macOS)",
      lessons: [
        { id: "16.1", title: "O que \xE9 o ChatGPT Record (transcrever + resumir)" },
        { id: "16.2", title: "Onde funciona (desktop macOS) e em quais workspaces/planos" },
        { id: "16.3", title: "Sa\xEDda em Canvas (transformar em plano, e-mail, c\xF3digo)" }
      ]
    },
    {
      id: "mod-17",
      title: "M\xF3dulo 17 - Privacidade, seguran\xE7a e governan\xE7a pessoal",
      lessons: [
        { id: "17.1", title: "Data Controls (treino, hist\xF3rico, compartilhamento)" },
        { id: "17.2", title: "Boas pr\xE1ticas com dados sens\xEDveis e arquivos" },
        { id: "17.3", title: "Como reduzir risco de vazamento (princ\xEDpios e checklists)" }
      ]
    },
    {
      id: "mod-18",
      title: "M\xF3dulo 18 - Qualidade, limites e troubleshooting",
      lessons: [
        { id: "18.1", title: "Message caps, reset, quedas de qualidade e como contornar" },
        { id: "18.2", title: "Estrat\xE9gias de fallback (trocar modelo, reduzir contexto, dividir tarefa)" },
        { id: "18.3", title: "Diagn\xF3stico: quando o erro \xE9 prompt vs limite vs ferramenta" }
      ]
    },
    {
      id: "mod-ap",
      title: "Ap\xEAndices",
      lessons: [
        { id: "A", title: "Gloss\xE1rio (Plus, Deep Research, Agent, Tasks, Canvas, Codex, Sora)" },
        { id: "B", title: "Templates de prompts (pesquisa, especifica\xE7\xE3o t\xE9cnica, revis\xE3o, QA, decis\xE3o)" },
        { id: "C", title: "Rubricas de avalia\xE7\xE3o (clareza, completude, verificabilidade, risco)" }
      ]
    }
  ]
};

// src/app.ts
var moduleGrid = document.querySelector("#module-grid");
var searchInput = document.querySelector("#search-input");
var moduleCount = document.querySelector("#module-count");
var lessonCount = document.querySelector("#lesson-count");
var resultCount = document.querySelector("#result-count");
if (!moduleGrid || !searchInput || !moduleCount || !lessonCount || !resultCount) {
  throw new Error("Elementos essenciais n\xE3o encontrados no DOM.");
}
var normalizeText = (value) => value.toLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, "");
var countLessons = (modules) => modules.reduce((total, moduleItem) => total + moduleItem.lessons.length, 0);
var createModuleCard = (moduleItem) => {
  const lessonsMarkup = moduleItem.lessons.map((lesson) => `<li><span>${lesson.id}</span>${lesson.title}</li>`).join("");
  return `
    <article class="module">
      <h3 class="module__title">${moduleItem.title}</h3>
      <ul class="module__lessons">${lessonsMarkup}</ul>
    </article>
  `;
};
var renderModules = (modules) => {
  if (modules.length === 0) {
    moduleGrid.innerHTML = `
      <div class="module module--empty">
        <h3 class="module__title">Nada encontrado</h3>
        <p>Tente buscar por outro m\xF3dulo, recurso ou li\xE7\xE3o.</p>
      </div>
    `;
    return;
  }
  moduleGrid.innerHTML = modules.map(createModuleCard).join("");
};
var filterModules = (modules, query) => {
  const normalizedQuery = normalizeText(query.trim());
  if (!normalizedQuery) {
    return modules;
  }
  return modules.reduce((accumulator, moduleItem) => {
    const moduleMatches = normalizeText(moduleItem.title).includes(normalizedQuery);
    const matchingLessons = moduleItem.lessons.filter(
      (lesson) => normalizeText(lesson.title).includes(normalizedQuery)
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
var updateSummary = (modules, visibleLessons) => {
  moduleCount.textContent = modules.length.toString();
  lessonCount.textContent = countLessons(courseOutline.modules).toString();
  resultCount.textContent = visibleLessons.toString();
};
var updateView = (query) => {
  const filteredModules = filterModules(courseOutline.modules, query);
  renderModules(filteredModules);
  updateSummary(courseOutline.modules, countLessons(filteredModules));
};
searchInput.addEventListener("input", (event) => {
  const target = event.target;
  updateView(target.value);
});
updateView("");
