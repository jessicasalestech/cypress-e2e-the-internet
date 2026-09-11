# 🧪 Cypress E2E — The Internet

[![Português](https://img.shields.io/badge/Portugu%C3%AAs-green?style=plastic&logo=openbadges&logoColor=white)](README-pt-BR.md) [![English](https://img.shields.io/badge/English-blue?style=plastic&logo=openbadges&logoColor=white)](README.md)

Um **projeto de portfólio de QA** com **automação de testes end-to-end (E2E)** usando **Cypress**,
aplicado ao aplicativo público e estável **[The Internet](https://the-internet.herokuapp.com)**.

> Demonstra a **2ª ferramenta de automação** (junto com o Playwright) com as melhores
> práticas do mercado: Page Objects, credenciais baseadas em ambiente e CI no GitHub Actions.

## 🚀 Stack

- **Cypress** (`v13`) — automação E2E
- **Page Objects** — seletores reutilizáveis e organizados
- **Variáveis de ambiente** — credenciais via `env` na configuração (nada versionado)
- **GitHub Actions** — executa a suíte e publica vídeos e screenshots como artefatos

## ✅ O que é coberto

| Funcionalidade | Cenários |
|---|---|
| **Login** | Sucesso com credenciais válidas · mensagem de erro com credenciais inválidas |
| **Checkboxes** | Marcar o 1º checkbox · desmarcar o 2º checkbox |
| **Dropdown** | Selecionar a 1ª e a 2ª opção |

## 📁 Estrutura

```
├── cypress/
│   ├── e2e/                 # specs (login, checkboxes, dropdown)
│   ├── support/
│   │   ├── e2e.js           # suporte global
│   │   └── pages/           # Page Objects
│   └── videos/ screenshots/ # evidências geradas (ignoradas no git)
├── cypress.config.js        # baseUrl + env (credenciais)
└── .github/workflows/       # CI
```

## ▶️ Como rodar

```bash
npm install

# Terminal (headless, estilo CI)
npm run test

# Cypress open (interface gráfica)
npm run test:open
```

### Credenciais

O aplicativo demo The Internet usa as credenciais fixas `tomsmith` / `SuperSecretPassword!`,
definidas em `cypress.config.js` via `env`. Para outros ambientes, substitua-as por variáveis
de ambiente no seu CI (nunca versione valores reais).

## 🤖 CI (GitHub Actions)

O pipeline executa `npx cypress run` (headless) e publica **vídeos** de todas as execuções e
**screenshots** das que falham como artefatos — evidência para auditoria de QA.

---

**Autor:** Jessica Sales · QA