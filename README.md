[![Netlify Status](https://api.netlify.com/api/v1/badges/6a345131-c86a-4200-bc5d-4200e8e569d8/deploy-status)](https://app.netlify.com/sites/vuepress-tailwind/deploys)
[![Build Status](https://travis-ci.org/DavidCouronne/vuepress-tailwind.svg?branch=master)](https://travis-ci.org/DavidCouronne/vuepress-tailwind)

# Vuepress Tailwind CSS starter

A simple Vuepress starter

Demo: [https://vuepress-tailwind.netlify.com/](https://vuepress-tailwind.netlify.com/)

<!-- Markdown snippet -->
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/DavidCouronne/vuepress-tailwind)

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

## Notes

- Check out these other Gridsome Starters where I got some ideas from:
    - [Gridsome Starter Blog](https://github.com/gridsome/gridsome-starter-blog) - I got a lot of design inspiration from this starter theme.
    - [Gridsome Portfolio Starter](https://github.com/drehimself/gridsome-portfolio-starter)

# Custom

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