---
title: Adding a new content to a new content group
date: 2022-03-24
description: 'Contributing'
---

# Adding a new content to an existing directory

Let's say you want to add a new topic from [foreach] to this platform

Take an example where you need to add **Introduction to Networking Security**
> A networking topic from [foreach]

<br><br>
1. You will need to create a directory called may be `routing/cisco-router/introduction.md` and add it under `src/content/advanced-networking`, to finally have something like `src/content/advanced-networking/routing/cisco-router/introduction.md`


```
.
├─ src
│  ├─ .vuepress
│  ├─ blogs
│  └─ content
|     ├─ networking
|     |  └─ introduction.md
|     └─ advanced-networking 
|        └─ routing
|           └─ cisco-router
|              └─ introduction.md
├─  package.json
├─  .gitignore
├─  README.md
├─  tailwind.config.js
└─  yarn.lock
.
```

3. Having that done, finally you need to updated `src/.vuepress/config.js` with a path to your content

```js
...
'/content/advanced-networking/': [
        {
          title: 'Advanced Networking',
          collapsable: false,
          children: [
            ...  // Modify from here
            {
              title: 'Routing', // content group
              collapsable: true,
              children: [
                {
                  title: 'Cisco Router', // content sub group
                  collapsable: true,
                  children: [
                    'routing/cisco-router/introduction', //content file name
                  ]
                },
              ]
            },
          ]
        },
      ],
...
```

- [foreach]:https://foreach.benax.rw