const CONFIG = {
  email: "alexdenico96@gmail.com",
  formEndpoint: "https://formspree.io/f/maeqwdrw",
  roles: [
    "Desenvolvedor Full Stack",
    "APIs e back-end",
    "Interfaces com React",
    "Código limpo e testado",
  ],
};
const PROJECTS = [
  {
    t: "Ferramenta Financeira",
    d: "Gerencie finanças pessoais ou empresariais: importe extratos via CSV ou lance transações manualmente, organize por categorias personalizáveis, acompanhe gastos em gráficos interativos, receba insights automáticos e exporte extratos em PDF. Contas empresariais gerenciam várias empresas, com visão individual ou consolidada.",
    s: ["Full Stack"],
    demo: "https://dashboard-de-finan-as.vercel.app/",
  },
  {
    t: "Portfólio Pessoal",
    d: "Este site, construído do zero com HTML, CSS e JavaScript puro, sem frameworks, como projeto de estudo de front-end.",
    s: ["HTML", "CSS", "JavaScript"],
  },
  {
    t: "Kira — Chat com IA",
    d: "Interface de chat com login e histórico de conversas isolado por usuário. Faz busca na web em tempo real via Groq e mostra o que a IA pesquisou antes de responder.",
    s: ["Full Stack", "Groq"],
    demo: "https://kira-agqc.onrender.com/",
  },
  {
    t: "UGC Studio",
    d: "Ferramenta para criadores de conteúdo gerenciarem campanhas, acompanharem os ganhos mês a mês em um dashboard, organizarem tarefas estilo kanban e criarem roteiros.",
    s: ["React", "Vite", "PostgreSQL"],
    demo: "https://ugc-studio-by71.vercel.app/#/login",
  },
];
const EXP = [
  {
    when: "Nov 2023 – Atual",
    role: "Collections Analyst LATAM",
    org: "Accenture do Brasil",
    pts: [
      "Gestão de cobrança de grandes contas corporativas na América Latina e Central, gerindo portfólio multirregional para produtos Google (Ads, Display & Video, Cloud e Campaign Manager).",
      "Otimização e reconciliação de contas complexas, reduzindo discrepâncias financeiras e garantindo a integridade e precisão dos dados em relatórios de alto impacto.",
      "Monitoramento e controle rigoroso de SLAs de dívidas vencidas (faixas de 30+, 60+ e 180+ dias), aplicando metodologias analíticas para negociação de planos de pagamento e mitigação de riscos.",
      "Atuação como ponto focal bilíngue (espanhol/português) na comunicação estratégica entre clientes internacionais e equipes financeiras multidisciplinares.",
      "Reconhecido consecutivamente com o prêmio corporativo Extra Mile (2024, 2025 e 2026) pelo alto desempenho e entrega de resultados consistentes.",
    ],
  },
  {
    when: "2022 – 2023",
    role: "Especialista de Atendimento Bilíngue",
    org: "Teleperformance CRM",
    pts: [
      "Resolução de casos críticos e suporte técnico de nível avançado para as plataformas globais HBO e Kwai, atendendo mercados em espanhol e português.",
      "Análise de padrões de incidências para melhoria contínua na experiência do usuário e resolução rápida de gargalos operacionais.",
    ],
  },
  {
    when: "2022",
    role: "Analista de Limitações / Risco",
    org: "Foundever",
    pts: [
      "Execução de análises de restrições, conformidade e mitigação de riscos transacionais para contas da plataforma PayPal.",
    ],
  },
  {
    when: "2021 – 2022",
    role: "Suporte Bilíngue / Consultor de Anúncios",
    org: "Atento",
    pts: [
      "Consultoria estratégica de orçamentos e otimização de campanhas de anúncios para o ecossistema do Facebook (Meta), alinhando diretrizes de performance e segurança.",
    ],
  },
];
const EDU = [
  {
    when: "Atual",
    role: "Desenvolvimento full-stack",
    org: "TOTI Brasil",
    pts: [],
  },
  {
    when: "Mar 2023 - 80H",
    role: "Desenvolvimento Web I e II",
    org: "Google",
    pts: [],
  },
  {
    when: "Abr 2023 - 40H",
    role: "Desenvolvimento de Apps",
    org: "Google",
    pts: [],
  },
  {
    when: "Ago 2019 – Nov 2019",
    role: "Técnico em manutenção de celulares, tablets e PC",
    org: "Fundet-Funval, Colômbia",
    pts: [],
  },
  {
    when: "Jul 2009 – Jul 2014",
    role: "Ensino médio completo",
    org: "Instituto A.B.C Lagunillas, Venezuela",
    pts: [],
  },
];
const STACK = {
  "Front-end": ["HTML", "CSS", "JavaScript", "TypeScript", "React"],
  "Back-end": ["Node.js", "Express", "REST"],
  "Dados e infra": ["PostgreSQL", "SQLite", "Git", "JWT"],
};
const SKILLS = {
  "Finanças e negócios": [
    "Reconciliação financeira",
    "Análise de risco e crédito B2B",
    "KPIs financeiros (roll rate, taxa de recuperação)",
    "Gestão de fluxo de caixa",
    "Compliance e auditoria",
  ],
  "Ferramentas e suporte": [
    "Sistemas de CRM",
    "Pacote Office",
    "Manutenção de hardware e software",
  ],
  Idiomas: [
    "Espanhol · nativo",
    "Português · fluente",
    "Inglês · intermediário",
  ],
};
const SOFT = [
  {
    t: "Comunicação multicultural",
    d: "Trabalho em espanhol e português com clientes de vários países da América Latina e faço a ponte entre equipes técnicas e financeiras.",
  },
  {
    t: "Atenção aos detalhes",
    d: "Meu dia a dia é achar divergências em contas complexas. Levo esse olhar para revisar código e dados.",
  },
  {
    t: "Resolução de problemas",
    d: "Investigo a causa antes de agir, seja numa dívida de difícil recebimento ou num bug.",
  },
  {
    t: "Orientação a resultados",
    d: "Reconhecido com o prêmio Extra Mile em 2024, 2025 e 2026 por superar metas.",
  },
  {
    t: "Organização e prazos",
    d: "Gerencio SLAs críticos e carteiras grandes sem perder o controle das entregas.",
  },
  {
    t: "Aprendizado contínuo",
    d: "Migrei da área financeira para o desenvolvimento estudando todos os dias, com cursos e projetos próprios.",
  },
];

const $ = (s) => document.querySelector(s);
const esc = (s) =>
  s.replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ],
  );

const root = document.documentElement;
const saved = (() => {
  try {
    return localStorage.getItem("tema");
  } catch (e) {
    return null;
  }
})();
root.dataset.theme =
  saved ||
  (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
$("#theme").onclick = () => {
  root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";
  try {
    localStorage.setItem("tema", root.dataset.theme);
  } catch (e) {}
};

// Menu mobile
$("#burger").onclick = (e) => {
  const o = $("#menu").classList.toggle("open");
  e.currentTarget.setAttribute("aria-expanded", o);
};
$("#menu").onclick = (e) => {
  if (e.target.tagName === "A") $("#menu").classList.remove("open");
};

(function () {
  const el = $("#role");
  let i = 0,
    j = 0,
    del = false;
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
    el.textContent = CONFIG.roles[0];
    return;
  }
  (function tick() {
    const w = CONFIG.roles[i];
    el.textContent = w.slice(0, j);
    if (!del && j === w.length) {
      del = true;
      return setTimeout(tick, 1600);
    }
    if (del && j === 0) {
      del = false;
      i = (i + 1) % CONFIG.roles.length;
    }
    j += del ? -1 : 1;
    setTimeout(tick, del ? 35 : 70);
  })();
})();

const techs = [...new Set(PROJECTS.flatMap((p) => p.s))].sort();
let active = "Todos";
function renderProjects() {
  $("#filters").innerHTML = ["Todos", ...techs]
    .map(
      (t) =>
        `<button class="chip" aria-pressed="${t === active}" data-t="${esc(t)}">${esc(t)}</button>`,
    )
    .join("");
  $("#projects").innerHTML = PROJECTS.filter(
    (p) => active === "Todos" || p.s.includes(active),
  )
    .map(
      (p) => `
   <article class="card"><h3>${esc(p.t)}</h3><p>${esc(p.d)}</p>
   <div class="chips">${p.s.map((s) => `<span class="chip">${esc(s)}</span>`).join("")}</div>
   ${p.demo || p.code ? `<div class="links">${p.demo ? `<a href="${esc(p.demo)}" target="_blank" rel="noopener">Ver demo</a>` : ""}${p.code ? `<a href="${esc(p.code)}" target="_blank" rel="noopener">Código</a>` : ""}</div>` : ""}</article>`,
    )
    .join("");
}
$("#filters").onclick = (e) => {
  const b = e.target.closest("button");
  if (b) {
    active = b.dataset.t;
    renderProjects();
    $("#filters [aria-pressed=true]").focus();
  }
};
renderProjects();

const tl = (list) =>
  list
    .map(
      (x) =>
        `<div class="item"><div class="when">${esc(x.when)}</div><h3>${esc(x.role)}</h3><div class="org">${esc(x.org)}</div>${x.pts.length ? `<ul>${x.pts.map((p) => `<li>${esc(p)}</li>`).join("")}</ul>` : ""}</div>`,
    )
    .join("");
$("#exp").innerHTML = tl(EXP);
$("#edu").innerHTML = tl(EDU);
$("#stack").innerHTML = Object.entries(STACK)
  .map(
    ([k, v]) =>
      `<div><h3>${esc(k)}</h3><div class="chips">${v.map((t) => `<span class="chip">${esc(t)}</span>`).join("")}</div></div>`,
  )
  .join("");
$("#skills-list").innerHTML = Object.entries(SKILLS)
  .map(
    ([k, v]) =>
      `<div><h3>${esc(k)}</h3><div class="chips">${v.map((t) => `<span class="chip">${esc(t)}</span>`).join("")}</div></div>`,
  )
  .join("");
$("#soft-list").innerHTML = SOFT.map(
  (x) =>
    `<article class="card"><h3>${esc(x.t)}</h3><p>${esc(x.d)}</p></article>`,
).join("");
$("#year").textContent = new Date().getFullYear();

const form = $("#form"),
  status = $("#status");
function validate() {
  let ok = true;
  [...form.elements]
    .filter((f) => f.required)
    .forEach((f) => {
      const msg = f.validity.valueMissing
        ? "Campo obrigatório."
        : f.validity.typeMismatch
          ? "Digite um e-mail válido."
          : f.validity.tooShort
            ? "Escreva pelo menos 10 caracteres."
            : "";
      f.setAttribute("aria-invalid", !!msg);
      f.parentNode.querySelector(".err").textContent = msg;
      if (msg) ok = false;
    });
  return ok;
}
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  status.className = "";
  status.textContent = "";
  if (form.site.value) return; // anti-spam
  if (!validate()) {
    status.className = "bad";
    status.textContent = "Corrija os campos destacados.";
    return;
  }
  const data = {
    nome: form.nome.value.trim(),
    email: form.email.value.trim(),
    mensagem: form.msg.value.trim(),
  };
  if (!CONFIG.formEndpoint) {
    location.href = `mailto:${CONFIG.email}?subject=${encodeURIComponent("Contato pelo portfólio - " + data.nome)}&body=${encodeURIComponent(data.mensagem + "\n\n" + data.nome + " (" + data.email + ")")}`;
    status.className = "ok";
    status.textContent =
      "Abrindo seu aplicativo de e-mail para finalizar o envio.";
    return;
  }
  $("#send").disabled = true;
  status.textContent = "Enviando...";
  try {
    const r = await fetch(CONFIG.formEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!r.ok) throw 0;
    form.reset();
    status.className = "ok";
    status.textContent = "Mensagem enviada. Obrigado pelo contato!";
  } catch (_) {
    status.className = "bad";
    status.textContent =
      "Não foi possível enviar. Tente novamente ou escreva para " +
      CONFIG.email +
      ".";
  }
  $("#send").disabled = false;
});

const links = [...document.querySelectorAll("#menu a")];
const io = new IntersectionObserver(
  (es) =>
    es.forEach((en) => {
      if (en.isIntersecting)
        links.forEach((a) =>
          a.classList.toggle(
            "on",
            a.getAttribute("href") === "#" + en.target.id,
          ),
        );
    }),
  { rootMargin: "-45% 0px -50% 0px" },
);
["projetos", "experiencia", "educacao", "contato"].forEach((id) =>
  io.observe(document.getElementById(id)),
);
