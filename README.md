# 🧪 Cypress E2E — The Internet

Projeto de **portfólio de QA** com automação de testes **fim-a-fim (E2E)** usando **Cypress**,
aplicado ao app público e estável **[The Internet](https://the-internet.herokuapp.com)**.

> Demonstra a **2ª ferramenta de automação** (além do Playwright) com as boas práticas de
> mercado: Page Objects, fixtures/config de credenciais por ambiente e CI no GitHub Actions.

## 🚀 Stack

- **Cypress** (`v13`) — automação E2E
- **Page Objects** — seletores reutilizáveis e organizados
- **Variáveis de ambiente** — credenciais via `env` na configuração (nada versionado)
- **GitHub Actions** — executa a suíte e publica vídeos e screenshots como artefatos

## ✅ O que é coberto

| Feature | Cenários |
|---|---|
| **Login** | Sucesso com credenciais válidas · mensagem de erro com credenciais inválidas |
| **Checkboxes** | Marcar a 1ª checkbox · desmarcar a 2ª checkbox |
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

# Terminal (headless, CI-like)
npm run test

# Interface gráfica do Cypress
npm run test:open
```

### Credenciais

O app demo The Internet usa as credenciais fixas `tomsmith` / `SuperSecretPassword!`,
definidas em `cypress.config.js` via `env`. Para outros ambientes, substitua por
variáveis de ambiente no seu CI (nunca valores reais versionados).

## 🤖 CI (GitHub Actions)

A pipeline roda `npx cypress run` (headless) e publica **vídeos** de todas as runnes e
**screenshots** das que falharem como artefatos — evidências para auditoria de QA.

---

**Autoria:** Jessica Sales · QA