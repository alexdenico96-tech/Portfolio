# Portfólio — Gerardo Silva

Site pessoal para apresentar meus projetos, experiência e formação como desenvolvedor Full Stack.

Feito do zero com HTML, CSS e JavaScript puro, sem frameworks e sem etapa de build.

## Seções

- **Início:** apresentação, foto e link para baixar o currículo
- **Projetos:** cartões com descrição, tecnologias e link para a demonstração, com filtro por tecnologia
- **Experiência:** trajetória profissional
- **Educação e tecnologias:** formação, cursos e ferramentas que uso
- **Competências e soft skills**
- **Contato:** formulário que envia a mensagem para o meu e-mail

O site também tem tema claro e escuro, funciona em celular e computador e usa favicon próprio.

## Tecnologias

HTML5, CSS3 e JavaScript (ES6). O formulário usa o [Formspree](https://formspree.io) para entregar as mensagens por e-mail, sem servidor próprio.

## Estrutura

```
portfolio/
├── index.html
├── style.css
├── script.js
├── README.md
└── assets/
    ├── gerardo.png
    ├── curriculo.pdf
    ├── favicon.ico
    ├── favicon.svg
    ├── favicon-32.png
    └── apple-touch-icon.png
```

## Rodar localmente

Não precisa instalar nada. Abra o `index.html` no navegador.

Para um resultado mais fiel ao site publicado, use a extensão **Live Server** do VS Code (botão direito no `index.html` → *Open with Live Server*).

## Atualizar o conteúdo

Os textos não ficam no HTML. Eles estão no início do `script.js`, no bloco `EDITE AQUI`:

| Variável | O que controla |
|---|---|
| `CONFIG` | e-mail, endereço do formulário e frases animadas do topo |
| `PROJECTS` | projetos (título, descrição, tecnologias, links) |
| `EXP` | experiência profissional |
| `EDU` | educação e cursos |
| `STACK` | tecnologias |
| `SKILLS` | competências e idiomas |
| `SOFT` | soft skills |

Para trocar a foto ou o currículo, substitua os arquivos em `assets/` mantendo o mesmo nome.

## Formulário de contato

O envio depende do campo `formEndpoint` dentro de `CONFIG`:

```js
formEndpoint: "https://formspree.io/f/seu-id",
```

Para criar o seu: faça uma conta no Formspree, crie um formulário apontando para o seu e-mail e cole a URL gerada. Se o campo ficar vazio, o formulário abre o aplicativo de e-mail do visitante como alternativa.

O plano gratuito do Formspree tem limite mensal de envios.

## Publicar

Como é um site estático, qualquer hospedagem simples serve.

**GitHub Pages**
1. Suba os arquivos para um repositório no GitHub.
2. Em *Settings → Pages*, escolha a branch `main` e a pasta raiz (`/`).
3. O site fica em `https://seu-usuario.github.io/nome-do-repositorio`.

**Vercel ou Netlify**
1. Importe o repositório (ou arraste a pasta, no Netlify).
2. Não precisa de comando de build nem de pasta de saída especial.

Depois de publicar, coloque o endereço do site no LinkedIn e no currículo, e adicione o link na entrada "Portfólio Pessoal" em `PROJECTS`.

## Contato

- LinkedIn: https://br.linkedin.com/in/gerardo-alexander-silva-de-nicolais-255763271
- E-mail: alexdenico96@gmail.com
