# sandbox.js
This repository contains several packages that are used to experiment with various ideas and new JavaScript or Node.js features

## Setup
+ The top-level `package.json` contains common development dependencies used across all sub-packages and should be installed by running `npm install`
  - Most directories in this project are separate packages and may require running `npm install` from within the directory
+ [Integrating Prettier + ESLint + Airbnb Style Guide in VSCode](https://blog.echobind.com/integrating-prettier-eslint-airbnb-style-guide-in-vscode-47f07b5d7d6a)
  1. Install ESLint and Prettier VSCode extenstions
  1. `npm install -D eslint prettier`
  1. `npx install-peerdeps --dev eslint-config-airbnb-base` (Use `eslint-config-airbnb` if React support is needed)
  1. `npm install -D eslint-config-prettier eslint-plugin-prettier`
  1. Create and configure `.eslintrc.json` and `.prettierrc.json`
  1. Set `"editor.formatOnSave": true` VSCode user setting (global, language, or project level)
