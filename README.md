# Portfólio — Gerardo Silva

Landing page pessoal para apresentar projetos, experiência e formação a recrutadores de vagas Full Stack.

## O que tem

- Hero com foto, nome e texto animado com suas especialidades
- Projetos com filtro por tecnologia
- Experiência profissional e educação em linha do tempo
- Seção de tecnologias
- Formulário de contato com validação
- Tema claro/escuro, responsivo e com favicon

É um site estático: HTML, CSS e JavaScript puro, sem build e sem dependências.

## Estrutura

```
portfolio/
├── index.html
├── README.md
├── css/style.css
├── js/main.js
└── assets/
    ├── favicon.svg
    ├── foto.png
    └── curriculo.pdf
```

## Como usar

1. Abra o `index.html` no navegador.
2. Para trocar a foto, substitua `assets/foto.png` (quadrada). Para o currículo, substitua `assets/curriculo.pdf`.
3. Edite seus dados no início do `js/main.js`, no bloco `EDITE AQUI`:
   - `CONFIG`: e-mail e textos animados do topo
   - `PROJECTS`: título, descrição, tecnologias, links de demo e código
   - `EXP` e `EDU`: experiência e educação
   - `STACK`: suas tecnologias
4. Os estilos ficam em `css/style.css`.

## Formulário de contato

Por padrão, ao enviar, o site abre o aplicativo de e-mail do visitante com a mensagem preenchida.

Para receber as mensagens direto na sua caixa de entrada, crie um formulário gratuito em [Formspree](https://formspree.io) e cole o endereço em `CONFIG.formEndpoint`:

```js
formEndpoint: "https://formspree.io/f/seu-id"
```

## Publicar

Qualquer hospedagem estática serve. A mais simples é o GitHub Pages:

1. Suba a pasta para um repositório no GitHub.
2. Em **Settings → Pages**, escolha a branch `main` e a pasta raiz.
3. Seu site ficará em `https://seu-usuario.github.io/nome-do-repo`.

Netlify e Vercel também funcionam arrastando a pasta.

## Licença

Uso livre para fins pessoais.
