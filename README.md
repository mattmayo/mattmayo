
## This is my personal website mattmayo.com
This serves as a playground so that I can code and learn about web technologies and frameworks. While it is simple now, I plan to continue to add more content.

## Some of the technologies used
* [Gatsby](https://www.gatsbyjs.com)
    * Web application framework that serves as a foundation for the site
* [GitHub Actions](https://github.com/features/actions)
    * Continuous integration that includes linting, testing, and building the app
* [GitHub Pages](https://pages.github.com)
    * Securely hosts the web application for free
* [GraphQL](https://graphql.org)
    * Allows retreiving different sizes for images to support responsive screens
* [ESLint](https://eslint.org)
    * Static code analyzer to find and automatically fix code
* [Node.js](https://nodejs.org/)
    * Web server and development environment for applications leveraging JavaScript or TypeScript languages
* [Node Version Manager](https://github.com/nvm-sh/nvm) (nvm)
    * Installs and provides tooling to support multilple versions of Node.js
* [PostCSS](https://postcss.org)
    * Cascading style sheets (CSS) tooling
    * Helps with things like linting CSS and [transpiling](https://en.wikipedia.org/wiki/Source-to-source_compiler) _future_ CSS
* [Prettier](https://prettier.io)
    * Code formatter for JavaScript and TypeScript
* [React](https://reactjs.org)
    * Library for building user interfaces via a simple component architecture
* [Tailwind CSS](https://tailwindcss.com)
    * CSS framework that is designed to reduce lines of code and ease styling
* [Typescript](https://www.typescriptlang.org)
    * Typed programming language that is a superset of JavaScript
* [Webpack](https://webpack.js.org)
    * Code [transpiler](https://en.wikipedia.org/wiki/Source-to-source_compiler) and module bundler

# How to setup the development environment
1. Install [Node.js](https://nodejs.org/), the long term support (LTS) version. 
    1. I recommend using [nvm](https://github.com/nvm-sh/nvm), but this is not required as long as you have Node.js installed.
    1. You will also be using [Node Package Manager](https://www.npmjs.com) (npm), but this comes with Node, so it doesn't need to be installed explicitly.
1. In your shell of choice execute the following command in the root directory 
    ```sh
    npm install
    ```
1. To run the application execute
    ```sh
    npm run start
    ```
1. Navigate to http://localhost:8000 and voilà!

# How to to deploy
Currently, the repo is not setup to deploy automatically and this will need to be done from a local workstation.
1. If you haven't already, install packages.
    ```sh
    npm install
    ```
1. To deploy from master execute
    ```sh
    npm run deploy
    ```
2. Navigate to the repo [settings page](https://github.com/mattmayo/mattmayo/settings) and update the **Custom domain** field to matt.mayo.com. This is required because deployment script resets this field to empty. TODO figure out why that happens.

## There's still much to do! Here are few things.
- [ ] Add search engine optimization ([SEO](https://moz.com/beginners-guide-to-seo))
- [ ] Add [tree shaking](https://en.wikipedia.org/wiki/Tree_shaking) to reduce deployed artifcact sizes (JS bundles, CSS, etc)
- [ ] Automate deployment using GitHub Actions
- [ ] Add metrics for things like page visits
- [ ] Add monitoring for when the site goes down, etc.
- [ ] Add more content!