---
title: Adding a new content to existing content group
date: 2022-03-24
description: 'Contributing'
---

# Adding a new content to an existing directory

Let's say you want to add a new topic from [foreach] to this platform

Take an example where you need to add **Introduction to Networking Security**
> A networking topic from [foreach]

1. You need to create a **.md** file and name it any relevant and self explanatory name like `introduction.md` with your contents in
<br><br>
2. Bellow is the project structure, you need to get your file under `src/content/networking/` to have a path like `src/content/networking/introduction.md` to your content file

```
.
├─ src
│  ├─ .vuepress
│  ├─ blogs
│  └─ content
|    └─ networking
|       └─ introduction.md
├─  package.json
├─  .gitignore
├─  README.md
├─  tailwind.config.js
└─  yarn.lock
.
```
<br><br>

3. Having that done, finally you need to updated `src/.vuepress/config.js` with a path to your content

```js
...
'/content/networking/': [
        {
          title: 'Networking',
          collapsable: false,
          children: [
            '',
            'introduction' // your created content file name
          ]
        },
      ],
...
```

- [foreach]:https://foreach.benax.rw