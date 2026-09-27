# 『𝕽𝕯』ᴰᵉᵛ — Rudson · Portfólio

Portfólio pessoal de **Rudson**, desenvolvedor em formação com foco em backend, APIs, sistemas e projetos práticos.

Site estático publicado via GitHub Pages em [rudson2225.github.io](https://rudson2225.github.io/).

## Sobre o projeto

Single page responsiva e acessível, construída com HTML5, CSS3 e JavaScript puro — sem frameworks, sem build e sem dependências externas.

### Identidade

Marca visual: **『𝕽𝕯』ᴰᵉᵛ** — aplicada na navbar, hero, footer e favicon. O nome **Rudson** permanece nos textos pessoais.

### Seções

- **Hero** — apresentação com terminal estilizado e badges técnicos
- **Sobre** — perfil com painel de foco atual
- **Tecnologias** — cards organizados por categoria com descrições
- **Projetos** — DevHub API em destaque com arquitetura, Minecraft Launcher e IA e Robótica
- **Processo** — abordagem de desenvolvimento em 5 etapas
- **Engenharia** — diagrama de Clean Architecture e áreas de interesse
- **Contato** — chamada para conhecer os projetos no GitHub
- **Footer** — créditos e link para o GitHub

## Tecnologias

- **HTML5** — semântico e acessível (ARIA, foco visível, navegação por teclado)
- **CSS3** — variáveis CSS, grid, flexbox, animações suaves, `prefers-reduced-motion`
- **JavaScript (ES6)** — menu mobile, navegação suave, animações de entrada via `IntersectionObserver` e indicador de seção ativa

## Estrutura

```
01.Portfolio/
├── index.html
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── main.js
│   └── img/
│       └── favicon.svg
├── README.md
└── .gitignore
```

## Como executar localmente

Não há dependências nem build. Basta abrir o `index.html` no navegador, ou servir a pasta com qualquer servidor estático:

```bash
# Python 3
python3 -m http.server 8000

# Node.js
npx serve .
```

Depois acesse `http://localhost:8000`.

## Como publicar no GitHub Pages

1. Envie este diretório para o repositório `Rudson2225/Rudson2225.github.io`.
2. No GitHub, vá em **Settings → Pages**.
3. Em **Source**, selecione a branch `main` e a pasta `/ (root)`.
4. Salve. O site estará disponível em `https://rudson2225.github.io/`.

## Acessibilidade e performance

- HTML semântico com hierarquia correta de headings
- Contraste adequado e foco visível para navegação por teclado
- `aria-label` em controles de ícones e navegação
- Sem bibliotecas pesadas, sem imagens grandes, sem requisições externas
- Respeita `prefers-reduced-motion`
