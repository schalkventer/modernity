<img src="docs/logo.svg" style="max-width: 700px">

**Mødernity is a conventions-first, easy-to-understand web boilerplate built on [html-lit](https://lit-html.polymer-project.org/) and [11ty](https://www.11ty.io/).**

It is well suited for [JAMstack](https://jamstack.org/)-inspired projects that want to draw on the benefits of the modern front-end tooling, yet be simple enough that anyone with basic HTML, JavaScript and CSS experience can work on projects built on Mødernity.

**Table of Contents:**

- [Quickstart](#quickstart)
  - [Environment](#environment)
  - [Commands](#commands)
- [Goals](#goals)
- [Tech-stack](#tech-stack)
  - [Core](#core)
    - [11ty](#11ty)
    - [lit-html](#lit-html)
  - [Testing / Linting](#testing--linting)
    - [Storybook](#storybook)
    - [Prettier](#prettier)
    - [Stylelint](#stylelint)
    - [ESLint](#eslint)
    - [Husky](#husky)
- [Future Roadmap](#future-roadmap)

# Quickstart

## Environment

Make sure you have the latest versions of both [NodeJS](https://nodejs.org/en/) and [Git](https://git-scm.com/) installed. In addition, for real-time linting and syntax-higlighting make sure to add the following to your IDE:

   - [Adding ESLint](https://eslint.org/docs/user-guide/integrations)
   - [Adding Stylelint](https://stylelint.io/user-guide/complementary-tools#editor-plugins)
   - [Adding lit-html syntax higlighting](https://lit-html.polymer-project.org/guide/tools#ide-plugins)

## Commands

Open either the [Unix Shell](https://en.wikipedia.org/wiki/Unix_shell) (OSX or Linux), [Powershell](https://en.wikipedia.org/wiki/PowerShell) (Windows) or your custom terminal complete the following:

1. Navigate to the location where you want to place your project folder.

2. Clone the repository via `git clone https://github.com/schalkventer/modernity.git`

3. Install all dependencies via `npm install`.

4. Execute `npm run config` to replace the default documentation and conventions with project-specific values.

5. Run the following commands as needed:
   1. To build the website into the `dist` folder run: `npm run build`.
   2. To start a local development server at [http://localhost:8080/](http://localhost:8080/) run: `npm start`.
   3. To start the Storybook component-testing framework run: `npm test`.
   4. To check and auto-fix code against defined conventions run: `npm run lint`.

# Goals

**Mødernity is guided by three core principles:**

1. ***Standarization***: Developers should be able to enforce project-defined conventions with no extra complexity.
2. ***Accesibility***: Developers should require only limited HTML, CSS and JavaScript experience to use.
3. ***Community:*** Should use open-sourced and well-documented third-party tooling (see [tech-stack](#tech-stack)).

This means that Mødernity is a good fit for the following:

- **Decentralized community-driven and open-source web projects.**
- **Learning modern JAMstack development.**
- **Improving your native HTML, CSS and JavaScript skills.**

# Tech-stack

## Core

### 11ty

[11ty](https://www.11ty.dev/) conventions pending....

### lit-html

**[lit-html](https://lit-html.polymer-project.org/) is tiny library that allows developers to write both client-side and static-html by using regular JavaScript syntax.**

As an example you can create the following two components (called 'button' and 'layout').

```js
// src/components/button.js

import { html } from 'lit-html';

let amountClicked = 0;
const onClick = () => amountClicked++;

export default (context) => html`
  <button>
    Hi ${context.name}, you've clicked the button ${amountClicked} times!
  </button>
`;
```

```js
// src/components/layout.js

import { html } from 'lit-html';

export default (context, children) => html`
  <html>
    <head>
      <title>${context.pageTitle}</title>
      <link rel="stylesheet" href="styles.css" />
      <script defer src="scripts.js"></scritps>
    </head>
    <body>
      {children}
    </body>
  </html>
`;
```

You can then create an static HTML page at `https://www.example.com/example-page` by composing regular HTML alongside the above components as follows:

```js
// src/pages/example-page.11ty.js

import { html } from 'lit-html';
import { layout } from '../components/button';
import { button } from '../components/button';

const children = html`
  <h1>This is an example page</h1>
  <p>Click the button to increase the click counter!</p>
  ${button({ name: 'Schalk Venter' })}
`;

export default () => html`
  ${layout({ pageTitle: 'Example Page' }, children)}
`;
```

You can see the above in action in the following Codepen example:

[![](docs/codepen-example.png)](https://codepen.io/schalkventer/pen/BayoJPa)

The initial static HTML that is sent to the user is generated with [lit-html-server](https://www.npmjs.com/package/@popeindustries/lit-html-server). Once the client-side JavaScript is loads the static-html is hydrated by using the core [lit-html](https://www.npmjs.com/package/lit-html) library `


The core [lit-html](https://www.npmjs.com/package/lit-html) library is used to update all 

## Testing / Linting

### Storybook

### Prettier

[Prettier](https://prettier.io/) conventions pending....

### Stylelint

All Sass files are linted via [Stylelint](https://stylelint.io/) with the following plugins:

- [Stylelint SCSS](stylelint-scss)
- [Stylelint Selector BEM Pattern](https://github.com/simonsmith/stylelint-selector-bem-pattern)

[BEM CSS methodology](https://en.bem.info/) is enforced to keep styling consistent with the underlying [Material Design Components](https://material.io/develop/web/) styling. If you are not familiar with BEM please consult the [The BEM quickstart documentation](https://en.bem.info/methodology/quick-start/).

### ESLint

All Sass files are linted via [ESLint](https://eslint.org/) with the following plugins:

- [Stylelint SCSS](stylelint-scss)
- [Stylelint Selector BEM Pattern](https://github.com/simonsmith/stylelint-selector-bem-pattern)

[BEM CSS methodology](https://en.bem.info/) is enforced to keep styling consistent with the underlying [Material Design Components](https://material.io/develop/web/) styling. If you are not familiar with BEM please consult the [The BEM quickstart documentation](https://en.bem.info/methodology/quick-start/).

### Husky

[Husky](https://github.com/typicode/husky) conventions pending...

# Future Roadmap

- [ ] Add ability to install starter with NPX.
- [ ] Add built-in support for native web-components.
- [ ] Adds progressively enhanced SPA-like behaviour (similar to Gatsby/Gridsome).
- [ ] Add built-in basic service worker.