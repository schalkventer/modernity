<img src="docs/logo.svg" width="700">

**Mødernity is a web project starter-kit allowing contributors of all skill levels to contribute to your project.**

It is specifically built to be used by remote volunteer-driven projects that require two things:

- The benefits of a modern [JAMstack](https://jamstack.org/) website.
- Contributions from developers across the entire skill spectrum.

This is accomplished beginner-friendly tooling that automatically enforces project-specific conventions. The primary goal is to assist contributors when they are adding/testing new code, while making it effortless for you to maintain/merge their code with confidence.

**Mødernity isn't a library or framework. It is a pre-configured bundle of modern beginner-friendly front-end tooling. This means that what you see is what you get. There are no Mødernity config files or Mødernity-specific abstractions.**

The name Mødernity is a play on *11ty* (on which the project is built) and *modern*. As well as the [form follows function](https://en.wikipedia.org/wiki/Form_follows_function) mantra from the [modernity era](https://en.wikipedia.org/wiki/Modernity).

**Table of Contents:**

- [Installation](#installation)
  - [Environment](#environment)
  - [Installation](#installation-1)
- [Getting started](#getting-started)
  - [Create your first page](#create-your-first-page)
  - [Creating a shared component](#creating-a-shared-component)
- [Motivation](#motivation)
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

# Installation

## Environment

**Make sure you have the latest versions of both [NodeJS](https://nodejs.org/en/) and [Git](https://git-scm.com/) installed. In addition, for real-time linting and syntax-higlighting make sure to add the following to your IDE:**

   - [Adding ESLint](https://eslint.org/docs/user-guide/integrations)
   - [Adding Stylelint](https://stylelint.io/user-guide/complementary-tools#editor-plugins)
   - [Adding lit-html syntax higlighting](https://lit-html.polymer-project.org/guide/tools#ide-plugins)

## Installation

**Open either the [Unix Shell](https://en.wikipedia.org/wiki/Unix_shell) (OSX or Linux), [Powershell](https://en.wikipedia.org/wiki/PowerShell) (Windows) or your custom terminal complete the following:**

1. Navigate to the location where you want to place your project folder.

2. Clone the repository via `git clone https://github.com/schalkventer/modernity.git`

3. Install all dependencies via `npm install`.

4. Execute `npm run config` to replace the default documentation and conventions with project-specific values.

5. Run the following commands as needed:
   1. To build the website into the `dist` folder run: `npm run build`.
   2. To start a local development server at [http://localhost:8080/](http://localhost:8080/) run: `npm start`.
   3. To start the Storybook component-testing framework run: `npm test`.
   4. To check and auto-fix code against defined conventions run: `npm run lint`.

# Getting started

## Create your first page

Mødernity is built on [11ty](https://www.11ty.io/) and uses [html-lit](https://lit-html.polymer-project.org/) for both client-side and static-html templating.

Since our instance of 11ty is set to build our pages from the `src/pages` directory ad use plain JavaScript for templating we can create our homepage file at `src/page/index.11ty.js`.

In this file we can add the following:

```js
/* src/pages/index.11ty.js */

import { html } from 'lit-html';

export default html`
  <html>
  <head>
    <title>Our home page</title>
  </head>
     <body>
      <h1>Hello world!</h1>
      <p>This is your very first Mødernity page.</p>
     </body>
  </html>
`;
```

That's it! We should see the following if we run `yarn start` and navigate to `https://localhost:8080:`

![](docs/basic-example.png)

You can add additional pages by using the 11ty convention for generating pages. For example:
git pu
- `src/pages/index.11ty.js` creates `www.example.com`.
- `src/pages/about/index.11ty.js` creates `www.example.com/about`.
- `src/pages/product/potato-cat/index.11ty.js` creates `www.example.com/product/potato-cat`

## Creating a shared component

However, adding all the HTML boilerplate can become quite cumbersome. Let us wrap the boilerplate logic in a component called 'wrapper.js' (we only need to add `11ty.js` for page files).

Components are plain JavaScript functions that return custom HTML based on the context and children passed to them.

```js
/* src/components/wrapper/index.js */

import { html } from 'lit-html';

export default (context, content) => html`
  <html>
    <head>
      <title>${context.title}</title>
    </head>
    <body>
      ${content}
    </body>
  </html>
`;
```

We can then change our homepage to the following:

```js
/* src/pages/index.11ty.js */

import { html } from 'lit-html';
import wrapper from '../components/wrapper';

const content = html`
  <h1>Hello world!</h1>
  <p>This is your very first Mødernity page.</p>
`;

export default html`
  ${wrapper({ title: 'Homepage' })}
`;
```

We can even toggle a components styling by importing a CSS file and : 
```css
/* src/components/button/styles.css */

.button {
  display: inline-block;
  background: #e0e0e0;
  color: rgba(0, 0, 0, 0.87);
  padding: 4px 8px;
  box-shadow: 
    0px 3px 1px -2px rgba(0,0,0,0.2), 
    0px 2px 2px 0px rgba(0,0,0,0.14), 
    0px 1px 5px 0px rgba(0,0,0,0.12);
}

.button.blue {
  background: #1976d2;
  color: white;
}

```

```js
/* src/components/button/index.js */

import { html } from 'lit-html';
import { calcStyling } from 'modernizr';
import './styles.css';

const cssClasses = calcStyling({
  'button': null,
  'blue': context.primary === true,
})

export default (context, content) => html`
  <button class="${cssFromContext(context)}>
    Click me!
  </button>
`;
```







We can even nest components inside one another. Let's add another component:



```js
// src/pages/index.11ty.js

import { html } from 'lit-html';
import wrapper from '../components/wrapper';
import customButton from '../components/customButton';

const content = html`
  <h1>Hello world!</h1>
  <p>This is your very first Mødernity page.</p>
  $
`;

export default html`
  ${wrapper({ title: 'Homepage' })}
`;
```

# Motivation

**Mødernity is guided by three core principles:**

1. ***Standarization***: Developers should be able to automatically enforce project-defined conventions at all times.
2. ***Accesibility***: Developers should require only limited HTML, CSS and JavaScript experience to contribute.
3. ***Transparent:*** Rely on open-source and well-documented third-party tooling instead of own abstractions.

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
import { update } from 'modernity';


export default (context) => html`
  <button @click=${handleClick}>
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

You can then create a static HTML page at `https://www.example.com/example-page` by composing regular HTML alongside the above components as follows:

```js
// src/pages/example-page.11ty.js

import { html } from 'lit-html';
import { layout } from '../components/layout';
import { button } from '../components/button';

const updatePage = () => {
  document.querySelector('')
}

const buttonContext = {
  clicked: 0,
  clickHander: () => {
     amountClicked++;
     update()
  }
}

const children = html`
  <div id="example-page">
     <h1>This is an example page</h1>
     <p>Click the button to increase the click counter!</p>
     ${button(buttonContext)}
  </div>
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