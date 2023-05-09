# Automation Template Web e2e
> Tests E2E and API using [Playwright](https://playwright.dev/) 🎭

### Pré-requirements

- [Git](https://git-scm.com)
- [NodeJS](https://nodejs.org/en/) [16.14.2]
- [Yarn](https://yarnpkg.com)
- [VSCode](https://code.visualstudio.com)

#### VSCode Extensions

- `VisualStudioExptTeam.vscodeintellicode`
- `EditorConfig.EditorConfig`
- `dbaeumer.vscode-eslint`
- `esbenp.prettier-vscode`
- `christian-kohler.path-intellisense`
- `aaron-bond.better-comments`
- `PKief.material-icon-theme`
- `oderwat.indent-rainbow`
- `Gruntfuggly.todo-tree`
- `natqe.reload`

---

### Installation

- Git\
  Standart install

- NodeJS\
  Standart install (LTS)

- Yarn

```bash
    npm -g install yarn
```

- Requirements

```bash
    yarn install
```

```bash
    yarn setup
```

---

### Execution

- Execution all tests:

```bash
yarn test
```

- Execution especific browser. Ex.: chromium:

```bash
yarn test --project=chromium
```

- Execution especific test:

```
yarn test -g @tag
```

- Execution debug mode:

```
yarn test:debug
```

- Execution headed mode:

```
yarn test:headed
```

---

### Requirements to script tests

- [playwright](https://playwright.dev)
- [expect-playwright](https://github.com/playwright-community/expect-playwright)
- [faker](https://fakerjs.dev)
- [eslint](https://eslint.org)
- [eslint-plugin-playwright](https://github.com/playwright-community/eslint-plugin-playwright)
- [prettier](https://prettier.io)

---

### Reports 📂

Ao finalizar a execução, as evidênias de testes serão geradas na pasta `reports`. O report HTML ficará no path `reports/html`
