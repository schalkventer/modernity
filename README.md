<img src="docs/logo.svg" style="max-width: 700px">

**Mødernity a super simple, low barrier-to-entry JAMstack starter built on 11ty.**

It is well suited for collaborative, open-source web projects that want to make use of the benefits of the modern front-end development toolchain, yet be simple enough that anyone with limited HTML, JavaScript and CSS experience can contribute.

**Table of Contents:**

- [Quickstart](#quickstart)
- [Tech-stack](#tech-stack)
  - [Core](#core)
    - [lit-html](#lit-html)
    - [Material Design Components](#material-design-components)
  - [Testing / Linting](#testing--linting)
    - [Storybook](#storybook)
    - [Prettier](#prettier)
    - [Stylelint](#stylelint)
    - [ESLint](#eslint)
    - [Husky](#husky)
- [Future Roadmap](#future-roadmap)

# Quickstart

1. Make sure you have the latest version of [NodeJS](https://nodejs.org/en/) and [Git](https://git-scm.com/) installed.
2. Clone the repository via `git clone https://github.com/schalkventer/modernity.git`
3. Make sure to integrate ESLint, Stylelint and Lit-HTML syntax highlighting for your IDE:
   1. [Adding ESLint](https://eslint.org/docs/user-guide/integrations)
   2. [Adding Stylelint](https://stylelint.io/user-guide/complementary-tools#editor-plugins)
   3. [Adding lit-html syntax higlighting](https://lit-html.polymer-project.org/guide/tools#ide-plugins)
4. Run `npm install`.
5. Run the following as needed:
   1. To build the website into the `dist` folder run `npm run build`.
   2. To start a local development server at [http://localhost:8080/](http://localhost:8080/) run `npm start`.
   3. To start the Storybook component-testing framework run `npm test`.
   4. To check for and auto-fix formatting errors in your code run `npm run lint`.
6. Refer to the documentation in the `README.md` file as needed.

# Tech-stack

## Core

[11ty](https://www.11ty.dev/) conventions pending....

### lit-html

**[lit-html](https://lit-html.polymer-project.org/) allows developers to write both client-side and static-html in regular JavaScript by using native JavaScript template tags.**

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

The initial static HTML that is sent to the user is generated with [lit-html-server](https://www.npmjs.com/package/@popeindustries/lit-html-server). Once the client-side JavaScript is loads the static-html is hydrated by using the core [lit-html](https://www.npmjs.com/package/lit-html) library `


The core [lit-html](https://www.npmjs.com/package/lit-html) library is used to update all 

### Material Design Components

[Material Design Components](https://material.io/develop/web/) conventions pending....
[]

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