# 🧪 Cypress E2E — The Internet

A **QA portfolio project** with **end-to-end (E2E) test automation** using **Cypress**,
applied to the public, stable app **[The Internet](https://the-internet.herokuapp.com)**.

> Demonstrates the **2nd automation tool** (alongside Playwright) with market best
> practices: Page Objects, environment-based credentials and CI on GitHub Actions.

## 🚀 Stack

- **Cypress** (`v13`) — E2E automation
- **Page Objects** — reusable, organized selectors
- **Environment variables** — credentials via `env` in config (nothing versioned)
- **GitHub Actions** — runs the suite and publishes videos and screenshots as artifacts

## ✅ What is covered

| Feature | Scenarios |
|---|---|
| **Login** | Success with valid credentials · error message with invalid credentials |
| **Checkboxes** | Check the 1st checkbox · uncheck the 2nd checkbox |
| **Dropdown** | Select the 1st and the 2nd option |

## 📁 Structure

```
├── cypress/
│   ├── e2e/                 # specs (login, checkboxes, dropdown)
│   ├── support/
│   │   ├── e2e.js           # global support
│   │   └── pages/           # Page Objects
│   └── videos/ screenshots/ # generated evidence (git-ignored)
├── cypress.config.js        # baseUrl + env (credentials)
└── .github/workflows/       # CI
```

## ▶️ How to run

```bash
npm install

# Terminal (headless, CI-like)
npm run test

# Cypress open (graphical interface)
npm run test:open
```

### Credentials

The demo app The Internet uses the fixed credentials `tomsmith` / `SuperSecretPassword!`,
set in `cypress.config.js` via `env`. For other environments, replace them with environment
variables in your CI (never real values versioned).

## 🤖 CI (GitHub Actions)

The pipeline runs `npx cypress run` (headless) and publishes **videos** of all runs and
**screenshots** of failing ones as artifacts — QA audit evidence.

---

**Author:** Jessica Sales · QA