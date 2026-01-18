import type { CourseOutline } from "./types";

export const courseOutline: CourseOutline = {
  title: "Domine o ChatGPT Plus",
  description:
    "Sumário completo com módulos, lições e trilhas para dominar o ChatGPT Plus.",
  modules: [
    {
      id: "mod-00",
      title: "Módulo 00 - Setup e visão geral",
      lessons: [
        { id: "0.1", title: "Como o curso está organizado (trilhas: uso geral, trabalho, desenvolvimento)" },
        { id: "0.2", title: "Onde cada recurso aparece na interface (Web, iOS/Android, Windows, macOS)" },
        { id: "0.3", title: "Limites e variações por plano (por que “limites aplicam”)" }
      ]
    },
    {
      id: "mod-01",
      title: "Módulo 01 - ChatGPT Plus: o que muda na prática",
      lessons: [
        { id: "1.1", title: "O que é o Plus e o que ele inclui (prioridade, limites maiores, recursos expandidos)" },
        { id: "1.2", title: "Modelos disponíveis no Plus: GPT-5 e modelos de raciocínio (quando usar cada um)" },
        { id: "1.3", title: "O que não está incluído: API é cobrada separadamente (fronteira produto vs. API)" }
      ]
    },
    {
      id: "mod-02",
      title: "Módulo 02 - Fundamentos que destravam resultado",
      lessons: [
        { id: "2.1", title: "Estrutura de prompt (objetivo, contexto, restrições, formato de saída)" },
        { id: "2.2", title: "Técnicas de iteração (refinar, criticar, verificar, padronizar)" },
        { id: "2.3", title: "Padrões de confiabilidade (o que pedir para reduzir alucinação)" }
      ]
    },
    {
      id: "mod-03",
      title: "Módulo 03 - Pesquisa na web com citações",
      lessons: [
        { id: "3.1", title: "Quando usar Search vs. Deep Research" },
        { id: "3.2", title: "Leitura de resultados e validação por fontes" },
        { id: "3.3", title: "Como exigir citações e como auditar respostas" }
      ]
    },
    {
      id: "mod-04",
      title: "Módulo 04 - Deep Research (pesquisa longa e estruturada)",
      lessons: [
        { id: "4.1", title: "Como formular uma pergunta “pesquisável”" },
        { id: "4.2", title: "Planejamento, escopo, critérios e entregáveis" },
        { id: "4.3", title: "Como transformar pesquisa em decisão (resumo executivo, riscos, próximos passos)" }
      ]
    },
    {
      id: "mod-05",
      title: "Módulo 05 - Uploads e análise de arquivos",
      lessons: [
        { id: "5.1", title: "Quais arquivos funcionam melhor (PDF, planilhas, docs, logs)" },
        { id: "5.2", title: "Perguntas boas para análise (extração, comparação, auditoria, síntese)" },
        { id: "5.3", title: "Boas práticas de privacidade ao enviar arquivos" }
      ]
    },
    {
      id: "mod-06",
      title: "Módulo 06 - Imagens (geração e edição)",
      lessons: [
        { id: "6.1", title: "Prompt de imagem (estilo, composição, negativo, consistência)" },
        { id: "6.2", title: "Edição de imagem com instruções precisas (o que pedir / o que evitar)" },
        { id: "6.3", title: "Limites, qualidade e guardrails por uso" }
      ]
    },
    {
      id: "mod-07",
      title: "Módulo 07 - Voz avançada (inclui vídeo e compartilhamento de tela)",
      lessons: [
        { id: "7.1", title: "Voz no Web vs apps (como iniciar e controlar)" },
        { id: "7.2", title: "Vídeo na conversa por voz (câmera)" },
        { id: "7.3", title: "Compartilhar tela e imagens durante a voz" },
        { id: "7.4", title: "Limites de voz/vídeo/screen share e fallback de modelo" },
        { id: "7.5", title: "Controles de dados (o que pode ser usado para treino e como desligar)" }
      ]
    },
    {
      id: "mod-08",
      title: "Módulo 08 - Canvas (editor de escrita e código)",
      lessons: [
        { id: "8.1", title: "Quando usar Canvas vs chat normal" },
        { id: "8.2", title: "Revisão guiada (selecionar trechos, feedback inline, atalhos)" },
        { id: "8.3", title: "Canvas para código (render/execução quando disponível)" },
        { id: "8.4", title: "Compartilhar Canvas e exportar (PDF/MD/DOCX ou arquivo de código)" },
        { id: "8.5", title: "Habilitar Canvas dentro de um GPT (capability no GPT Builder)" }
      ]
    },
    {
      id: "mod-09",
      title: "Módulo 09 - Projetos (organização de trabalho)",
      lessons: [
        { id: "9.1", title: "Estrutura de projeto (objetivo, arquivos, versões, histórico)" },
        { id: "9.2", title: "Padrões de pastas e assets (prompts, docs, specs, checklists)" },
        { id: "9.3", title: "Reuso: templates por tipo de entrega (dev, estudo, trabalho)" }
      ]
    },
    {
      id: "mod-10",
      title: "Módulo 10 - GPTs personalizados (Builder)",
      lessons: [
        { id: "10.1", title: "Quando vale criar um GPT vs usar instruções no chat" },
        { id: "10.2", title: "Instruções, conhecimento, limites e testes" },
        { id: "10.3", title: "Publicação/compartilhamento e manutenção" }
      ]
    },
    {
      id: "mod-11",
      title: "Módulo 11 - Tasks (tarefas agendadas)",
      lessons: [
        { id: "11.1", title: "O que Tasks faz (execução automática + notificação)" },
        { id: "11.2", title: "Tipos de agendamento (pontual e recorrente)" },
        { id: "11.3", title: "Onde Tasks funciona (Web, iOS, Android, macOS)" },
        { id: "11.4", title: "Padrões de tarefas úteis (briefing, lembrete, rotina de estudo)" }
      ]
    },
    {
      id: "mod-12",
      title: "Módulo 12 - ChatGPT Agent (modo agente)",
      lessons: [
        { id: "12.1", title: "O que é Agent e quando usar (tarefas multi-etapas com confirmações)" },
        { id: "12.2", title: "Como iniciar e como definir escopo e critérios" },
        { id: "12.3", title: "Limites no Plus e como reduzir desperdício de cota" },
        { id: "12.4", title: "Segurança: autenticação, confirmações, interrupção e auditoria" }
      ]
    },
    {
      id: "mod-13",
      title: "Módulo 13 - Codex (agente de programação)",
      lessons: [
        { id: "13.1", title: "Onde o Codex roda (web, CLI, IDE, cloud)" },
        { id: "13.2", title: "Fluxos: implementar feature, corrigir bug, rodar testes, code review" },
        { id: "13.3", title: "Limites de uso e boas práticas para evitar retrabalho" }
      ]
    },
    {
      id: "mod-14",
      title: "Módulo 14 - Sora (vídeo)",
      lessons: [
        { id: "14.1", title: "O que dá para gerar no Plus (vídeo e imagens) e limites práticos" },
        { id: "14.2", title: "Resolução/duração e concorrência de gerações" },
        { id: "14.3", title: "Política de uso e guardrails (regras anti-abuso)" }
      ]
    },
    {
      id: "mod-15",
      title: "Módulo 15 - Apps e Conectores (dados externos e sincronização)",
      lessons: [
        { id: "15.1", title: "Conceito: apps com sync (indexação, permissões, uso por @)" },
        { id: "15.2", title: "O que costuma ser suportado (ex.: GitHub/Drive e tipos de arquivo)" },
        { id: "15.3", title: "Elegibilidade por plano e restrições (ex.: EKM, data residency)" }
      ]
    },
    {
      id: "mod-16",
      title: "Módulo 16 - Record (gravação e resumo no macOS)",
      lessons: [
        { id: "16.1", title: "O que é o ChatGPT Record (transcrever + resumir)" },
        { id: "16.2", title: "Onde funciona (desktop macOS) e em quais workspaces/planos" },
        { id: "16.3", title: "Saída em Canvas (transformar em plano, e-mail, código)" }
      ]
    },
    {
      id: "mod-17",
      title: "Módulo 17 - Privacidade, segurança e governança pessoal",
      lessons: [
        { id: "17.1", title: "Data Controls (treino, histórico, compartilhamento)" },
        { id: "17.2", title: "Boas práticas com dados sensíveis e arquivos" },
        { id: "17.3", title: "Como reduzir risco de vazamento (princípios e checklists)" }
      ]
    },
    {
      id: "mod-18",
      title: "Módulo 18 - Qualidade, limites e troubleshooting",
      lessons: [
        { id: "18.1", title: "Message caps, reset, quedas de qualidade e como contornar" },
        { id: "18.2", title: "Estratégias de fallback (trocar modelo, reduzir contexto, dividir tarefa)" },
        { id: "18.3", title: "Diagnóstico: quando o erro é prompt vs limite vs ferramenta" }
      ]
    },
    {
      id: "mod-ap",
      title: "Apêndices",
      lessons: [
        { id: "A", title: "Glossário (Plus, Deep Research, Agent, Tasks, Canvas, Codex, Sora)" },
        { id: "B", title: "Templates de prompts (pesquisa, especificação técnica, revisão, QA, decisão)" },
        { id: "C", title: "Rubricas de avaliação (clareza, completude, verificabilidade, risco)" }
      ]
    }
  ]
};
