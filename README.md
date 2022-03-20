# Foreach Is Backed Up

The foreach.benax.rw free content backup registry

## Features


- [Tailwind CSS v1.0](https://tailwindcss.com) 
- Theme Switcher with Dark Mode
- [@vuepress/plugin-pwa](https://v1.vuepress.vuejs.org/plugin/official/plugin-pwa.html)
- Blog
- Accordion component

## Installation

```bash
# install vuepress globally
yarn global add vuepress@next # OR npm install -g vuepress@next

# clone or download repository

# install dependencies
yarn # OR npm install

# start writing
yarn develop

# build
yarn build

# upgrade dependencies
yarn upgrade --latest
```
## Colors

`src/.vuepress/theme/styles/config.styl`

| CSS Variables  | Vuepress Variables | Tailwind            | Note |
|----------------|--------------------|---------------------|------|
| --body-color   | $textColor         | primary             |      |
| --accent-color | $accentColor       | accent              |      |
| --accent-hover |                    | accenthover         |      |
| --border-color | $borderColor       | borderColor-primary |      |
| --bg-color     |                    | background-primary  |      |
| --bg-content   |                    | background-content  |      |
| --bg-code      | $codeBgColor       | background-code     |      |