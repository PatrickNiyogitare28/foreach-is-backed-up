---
title: Tailwind CSS tests
date: 2019-06-27
description: 'Test Components'
sidebar: auto
---

## Tools

[https://material.io/design/color/the-color-system.html#tools-for-picking-colors](https://material.io/design/color/the-color-system.html#tools-for-picking-colors)

[https://material.io/tools/color/#!/?view.left=1&view.right=0&primary.color=0d2538](https://material.io/tools/color/#!/?view.left=1&view.right=0&primary.color=0d2538)


## Theme

```
<div class="bg-background-primary">
<span class="text-accent">Accent color</span>
</div>
```

<div class="bg-background-primary">
<span class="text-accent">Accent color</span>
</div>

```
<div class="bg-background-primary">
<span class="text-accent opacity-75">Accent hover opacity .75</span>
</div>
```

<div class="bg-background-primary">
<span class="text-accent opacity-75">Accent hover opacity .75</span>
</div>

## Alerts

from [https://tailwindcss.com/components/alerts/](https://tailwindcss.com/components/alerts/)

<div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
  <strong class="font-bold">Holy smokes!</strong>
  <span class="block sm:inline">Something seriously bad happened.</span>
  <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
    <svg class="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
  </span>
</div>



 

## Accordion

from [https://vuejsexamples.com/an-accordion-using-vuejs-and-tailwind-css/](https://vuejsexamples.com/an-accordion-using-vuejs-and-tailwind-css/)

<Accordion title="Trevor Belmont">
<p class="pb-5">Lorem ipsum dolor sit amet, ut alii voluptaria est, ad illum inimicus deterruisset eam. His eu bonorum adipisci definiebas, no vis nostrud conclusionemque. Ad his virtute accusata, pro habemus singulis temporibus ut, ne bonorum dolores euripidis quo. No nam amet erant intellegebat. Rationibus instructior id pri, vis case abhorreant ea, id sea meis feugiat.</p>

<p class="pb-5">Ut vel percipit facilisi, sea partem veritus mandamus eu, at debet deleniti eos. Iudico suscipit mel ut. Per ad habeo sadipscing concludaturque. Pri lorem fastidii in, accusam honestatis signiferumque est ut, ea eos omnium senserit reprehendunt. Eu est nibh invenire.</p>
</Accordion>

<Accordion title="Alucard">
<p class="pb-5">Lorem ipsum dolor sit amet, ut alii voluptaria est, ad illum inimicus deterruisset eam. His eu bonorum adipisci definiebas, no vis nostrud conclusionemque. Ad his virtute accusata, pro habemus singulis temporibus ut, ne bonorum dolores euripidis quo. No nam amet erant intellegebat. Rationibus instructior id pri, vis case abhorreant ea, id sea meis feugiat.</p>

<p class="pb-5">Ut vel percipit facilisi, sea partem veritus mandamus eu, at debet deleniti eos. Iudico suscipit mel ut. Per ad habeo sadipscing concludaturque. Pri lorem fastidii in, accusam honestatis signiferumque est ut, ea eos omnium senserit reprehendunt. Eu est nibh invenire.</p>
</Accordion>

With Component and Dark Theme:

<Accordion title="See Code">
```html
<Accordion title="Alucard">
<p class="pb-5">Lorem ipsum dolor sit amet, ut alii voluptaria est, ad illum inimicus deterruisset eam. His eu bonorum adipisci definiebas, no vis nostrud conclusionemque. Ad his virtute accusata, pro habemus singulis temporibus ut, ne bonorum dolores euripidis quo. No nam amet erant intellegebat. Rationibus instructior id pri, vis case abhorreant ea, id sea meis feugiat.</p>
</Accordion>
```
</Accordion>

## Custom Blocks

`/src/.vuepress/theme/styles/index.styl`

> **This is a quote**. Lorem ipsum dolor sit amet, ut alii voluptaria est, ad illum inimicus deterruisset eam. His eu bonorum adipisci definiebas, no vis nostrud conclusionemque. Ad his virtute accusata, pro habemus singulis temporibus ut, ne bonorum dolores euripidis quo. No nam amet erant intellegebat. Rationibus instructior id pri, vis case abhorreant ea, id sea meis feugiat.

