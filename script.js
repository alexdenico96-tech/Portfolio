document.documentElement.classList.add("js");

const CONFIG = {
  email: "alexdenico96@gmail.com",
  // WhatsApp: só números, com código do país e DDD. Ex.: 5511987654321
  whatsapp: "5511984746808",
  whatsappMsg: "Olá, Gerardo! Vi seu portfólio e gostaria de conversar.",
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
    c: `// saldo consolidado por empresa
const saldo = transacoes
  .filter((t) => t.empresa === id)
  .reduce((s, t) => s + t.valor, 0);

const linhas = await importarCSV(arquivo);
categorizar(linhas, regras);
gerarInsights(gastos, { mes: "nov" });
exportarPDF(extrato, { periodo });`,
  },
  {
    t: "Portfólio Pessoal",
    d: "Este site, construído do zero com HTML, CSS e JavaScript puro, sem frameworks, como projeto de estudo de front-end.",
    s: ["HTML", "CSS", "JavaScript"],
    c: `// revelação ao rolar a página
const io = new IntersectionObserver(
  (es) => es.forEach((e) => {
    if (e.isIntersecting)
      e.target.classList.add("in");
  })
);
document
  .querySelectorAll(".reveal")
  .forEach((el) => io.observe(el));`,
  },
  {
    t: "Kira — Chat com IA",
    d: "Interface de chat com login e histórico de conversas isolado por usuário. Faz busca na web em tempo real via Groq e mostra o que a IA pesquisou antes de responder.",
    s: ["Full Stack", "Groq", "Gemini"],
    demo: "https://kira-agqc.onrender.com/",
    c: `// resposta com busca na web
const busca = await pesquisarWeb(pergunta);
const res = await groq.chat({
  model: "llama-3",
  messages: [...historico, busca],
});
await salvarConversa(user.id, res);
return { fontes: busca.links, res };`,
  },
  {
    t: "UGC Studio",
    d: "Ferramenta para criadores de conteúdo gerenciarem campanhas, acompanharem os ganhos mês a mês em um dashboard, organizarem tarefas estilo kanban e criarem roteiros.",
    s: ["React", "Vite", "PostgreSQL", "TypeScript"],
    demo: "https://ugc-studio-by71.vercel.app/#/login",
    c: `-- ganhos mês a mês
SELECT mes, SUM(valor) AS ganhos
FROM campanhas
WHERE user_id = $1
GROUP BY mes ORDER BY mes;

const [tarefas, setTarefas] =
  useState<Tarefa[]>([]);
<Kanban colunas={tarefas} />`,
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
    i: "chat",
    d: "Trabalho em espanhol e português com clientes de vários países da América Latina e faço a ponte entre equipes técnicas e financeiras.",
  },
  {
    t: "Atenção aos detalhes",
    i: "lupa",
    d: "Meu dia a dia é achar divergências em contas complexas. Levo esse olhar para revisar código e dados.",
  },
  {
    t: "Resolução de problemas",
    i: "ideia",
    d: "Investigo a causa antes de agir, seja numa dívida de difícil recebimento ou num bug.",
  },
  {
    t: "Orientação a resultados",
    i: "trofeu",
    d: "Reconhecido com o prêmio Extra Mile em 2024, 2025 e 2026 por superar metas.",
  },
  {
    t: "Organização e prazos",
    i: "agenda",
    d: "Gerencio SLAs críticos e carteiras grandes sem perder o controle das entregas.",
  },
  {
    t: "Aprendizado contínuo",
    i: "estudo",
    d: "Migrei da área financeira para o desenvolvimento estudando todos os dias, com cursos e projetos próprios.",
  },
];

const $ = (s) => document.querySelector(s);

// destaque de sintaxe simples para o código de fundo dos projetos
const KW =
  /\b(const|let|await|async|return|function|if|import|from|SELECT|FROM|WHERE|GROUP|BY|ORDER|AS|SUM)\b/g;
function hl(code) {
  return code
    .split("\n")
    .map((l) => {
      const t = esc(l);
      if (/^\s*(\/\/|--)/.test(l)) return `<span class="cm">${t}</span>`;
      return t
        .replace(/(&quot;.*?&quot;|`.*?`)/g, '<span class="st">$1</span>')
        .replace(KW, '<span class="kw">$1</span>')
        .replace(/\b([a-zA-Z_]+)(?=\()/g, '<span class="fn">$1</span>');
    })
    .join("\n");
}

// ícones de linha para o fundo das soft skills
const ICONS = {
  chat: '<path d="M4 4h11a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H9l-4 3v-3H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"/><path d="M17 8h3a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-1v3l-4-3h-4a2 2 0 0 1-2-2v-1"/><path d="M6 9h7M6 11.5h4"/>',
  lupa: '<circle cx="10" cy="10" r="6.5"/><path d="M15 15l6 6"/><path d="M7 10h6M10 7v6"/>',
  ideia: '<path d="M9 18h6M10 21h4"/><path d="M12 3a6 6 0 0 0-4 10.5c.8.8 1 1.6 1 2.5h6c0-.9.2-1.7 1-2.5A6 6 0 0 0 12 3z"/><path d="M12 7v3l2 1"/>',
  trofeu: '<path d="M8 3h8v6a4 4 0 0 1-8 0V3z"/><path d="M8 5H5a3 3 0 0 0 3 5M16 5h3a3 3 0 0 1-3 5"/><path d="M12 13v4M8 21h8M9.5 17h5v4h-5z"/>',
  agenda: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/><path d="M8.5 15.5l2.5 2.5 4.5-5"/>',
  estudo: '<path d="M2 9l10-5 10 5-10 5z"/><path d="M6 11v5c3 2.5 9 2.5 12 0v-5"/><path d="M22 9v6"/>',
};
const icon = (k, cls) =>
  `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[k] || ""}</svg>`;
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
var renderProjects;
renderProjects = function () {
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
      (p, i) => `
   <article class="card proj reveal" style="--d: ${i % 3}">${p.c ? `<div class="code-bg" aria-hidden="true"><pre style="--speed: ${22 + i * 4}s">${hl(p.c)}\n\n${hl(p.c)}\n\n</pre></div>` : ""}<h3>${esc(p.t)}</h3><p>${esc(p.d)}</p>
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
// os cartões novos do filtro também entram com animação
const _render = renderProjects;
renderProjects = function () {
  _render();
  observeReveal(document.querySelectorAll("#projects .reveal"));
};

const tl = (list) =>
  list
    .map(
      (x) =>
        `<div class="item reveal left${/atual/i.test(x.when) ? " now" : ""}"><div class="when">${esc(x.when)}</div><h3>${esc(x.role)}</h3><div class="org">${esc(x.org)}</div>${x.pts.length ? `<ul>${x.pts.map((p) => `<li>${esc(p)}</li>`).join("")}</ul>` : ""}</div>`,
    )
    .join("");
$("#exp").innerHTML = tl(EXP);
$("#edu").innerHTML = tl(EDU);
$("#stack").innerHTML = Object.entries(STACK)
  .map(
    ([k, v]) =>
      `<div class="reveal"><h3>${esc(k)}</h3><div class="chips">${v.map((t) => `<span class="chip">${esc(t)}</span>`).join("")}</div></div>`,
  )
  .join("");
$("#skills-list").innerHTML = Object.entries(SKILLS)
  .map(
    ([k, v]) =>
      `<div class="reveal"><h3>${esc(k)}</h3><div class="chips">${v.map((t) => `<span class="chip">${esc(t)}</span>`).join("")}</div></div>`,
  )
  .join("");
$("#soft-list").innerHTML = SOFT.map(
  (x) =>
    `<article class="card skill reveal">${icon(x.i, "sk-bg")}<span class="sk-badge">${icon(x.i, "sk-ico")}</span><h3>${esc(x.t)}</h3><p>${esc(x.d)}</p></article>`,
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

/* =========================================================
   MODERNIZAÇÃO
   ========================================================= */
const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;

// ---------- Revelação aos poucos ----------
const revealIO = new IntersectionObserver(
  (es) =>
    es.forEach((en) => {
      if (!en.isIntersecting) return;
      const el = en.target;
      el.classList.add("in");
      revealIO.unobserve(el);
      // libera hover rápido depois que a entrada termina
      const d = parseFloat(getComputedStyle(el).getPropertyValue("--d")) || 0;
      setTimeout(() => el.classList.add("done"), 900 + d * 110);
    }),
  { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
);
function observeReveal(list) {
  list.forEach((el) => revealIO.observe(el));
}
// escalona itens irmãos (timeline, listas, grades) que não têm atraso definido
document
  .querySelectorAll(".timeline, #stack, #skills-list, #soft-list")
  .forEach((box) =>
    [...box.children].forEach((c, i) => {
      if (!c.style.getPropertyValue("--d")) c.style.setProperty("--d", i % 4);
    }),
  );
observeReveal(document.querySelectorAll(".reveal"));

// linha da timeline "cresce" ao entrar na tela
const lineIO = new IntersectionObserver(
  (es) =>
    es.forEach((en) => {
      if (en.isIntersecting) {
        en.target.classList.add("in");
        lineIO.unobserve(en.target);
      }
    }),
  { threshold: 0.1 },
);
document.querySelectorAll(".timeline").forEach((t) => lineIO.observe(t));

// ---------- WhatsApp ----------
const waURL = (msg) =>
  `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(msg || CONFIG.whatsappMsg)}`;
["#wa-float", "#wa-hero", "#wa-contact"].forEach((id) => {
  const a = $(id);
  if (a) a.href = waURL();
});
// no cartão do contato, aproveita o que a pessoa já escreveu no formulário
$("#wa-contact").addEventListener("click", (e) => {
  const nome = form.nome.value.trim();
  const msg = form.msg.value.trim();
  if (nome || msg) {
    e.currentTarget.href = waURL(
      (nome ? `Olá, Gerardo! Aqui é ${nome}. ` : "Olá, Gerardo! ") +
        (msg || "Vi seu portfólio e gostaria de conversar."),
    );
  }
});
// botão flutuante aparece depois de um pequeno scroll (ou após 2,5s)
const waFloat = $("#wa-float");
const showFloat = () => waFloat.classList.add("show");
setTimeout(showFloat, 2500);

// ---------- Barra de progresso ----------
const bar = $("#progress");
addEventListener(
  "scroll",
  () => {
    const h = document.documentElement;
    const p = h.scrollTop / (h.scrollHeight - h.clientHeight || 1);
    bar.style.transform = `scaleX(${p})`;
    if (h.scrollTop > 200) showFloat();
  },
  { passive: true },
);

// ---------- Brilho e leve inclinação nos cartões ----------
if (!reduceMotion && matchMedia("(hover: hover)").matches) {
  document.addEventListener("pointermove", (e) => {
    const card = e.target.closest(".card");
    if (!card) return;
    const r = card.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width;
    const y = (e.clientY - r.top) / r.height;
    card.style.setProperty("--mx", x * 100 + "%");
    card.style.setProperty("--my", y * 100 + "%");
    if (card.classList.contains("done"))
      card.style.transform = `perspective(900px) rotateX(${(0.5 - y) * 5}deg) rotateY(${(x - 0.5) * 5}deg) translateY(-4px)`;
  });
  document.addEventListener(
    "pointerout",
    (e) => {
      const card = e.target.closest(".card");
      if (card && !card.contains(e.relatedTarget)) card.style.transform = "";
    },
    true,
  );
}

// ---------- Partículas conectadas no fundo ----------
(function () {
  const cv = $("#particles");
  if (!cv || reduceMotion) return;
  const ctx = cv.getContext("2d");
  let W, H, pts, dpr;
  const mouse = { x: -9999, y: -9999 };
  function size() {
    dpr = Math.min(devicePixelRatio || 1, 2);
    W = cv.width = innerWidth * dpr;
    H = cv.height = innerHeight * dpr;
    const n = Math.round(Math.min(70, (innerWidth * innerHeight) / 22000));
    pts = Array.from({ length: n }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.35 * dpr,
      vy: (Math.random() - 0.5) * 0.35 * dpr,
    }));
  }
  size();
  addEventListener("resize", size);
  addEventListener("pointermove", (e) => {
    mouse.x = e.clientX * dpr;
    mouse.y = e.clientY * dpr;
  });
  let running = true;
  document.addEventListener("visibilitychange", () => {
    running = !document.hidden;
    if (running) requestAnimationFrame(draw);
  });
  function draw() {
    if (!running) return;
    const color = getComputedStyle(root).getPropertyValue("--accent").trim();
    ctx.clearRect(0, 0, W, H);
    const max = 130 * dpr;
    for (const p of pts) {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0 || p.x > W) p.vx *= -1;
      if (p.y < 0 || p.y > H) p.vy *= -1;
      // leve afastamento do cursor
      const dx = p.x - mouse.x,
        dy = p.y - mouse.y,
        dm = Math.hypot(dx, dy);
      if (dm < 120 * dpr) {
        p.x += (dx / dm) * 0.8;
        p.y += (dy / dm) * 0.8;
      }
    }
    ctx.fillStyle = color;
    ctx.strokeStyle = color;
    for (let i = 0; i < pts.length; i++) {
      const a = pts[i];
      ctx.globalAlpha = 0.55;
      ctx.beginPath();
      ctx.arc(a.x, a.y, 1.6 * dpr, 0, Math.PI * 2);
      ctx.fill();
      for (let j = i + 1; j < pts.length; j++) {
        const b = pts[j];
        const d = Math.hypot(a.x - b.x, a.y - b.y);
        if (d < max) {
          ctx.globalAlpha = (1 - d / max) * 0.25;
          ctx.lineWidth = dpr * 0.8;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
    }
    ctx.globalAlpha = 1;
    requestAnimationFrame(draw);
  }
  requestAnimationFrame(draw);
})();
