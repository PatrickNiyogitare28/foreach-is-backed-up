---
title: Custom
description: Simple description
---

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

## Override default Vuepress containers

[See Vuepress examples](https://vuepress.vuejs.org/guide/markdown.html#custom-containers)

`/src/.vuepress/theme/styles/custom-blocks.styl`



```css
.custom-block {
    @apply bg-background-primary m-4 p-4 shadow
}
.custom-block.tip {
    @apply rounded
}
.custom-block.warning {
    @apply border-l-4 border-accent
}
.custom-block.danger {
    @apply border-4 border-accent px-4 py-3 rounded relative
}
``` 

:::tip This is a tip !
Lorem ipsum dolor sit amet, ut alii voluptaria est, ad illum inimicus deterruisset eam. His eu bonorum adipisci definiebas, no vis nostrud conclusionemque. Ad his virtute accusata, pro habemus singulis temporibus ut, ne bonorum dolores euripidis quo. No nam amet erant intellegebat. Rationibus instructior id pri, vis case abhorreant ea, id sea meis feugiat.
:::



:::warning This is a warning !
Lorem ipsum dolor sit amet, ut alii voluptaria est, ad illum inimicus deterruisset eam. His eu bonorum adipisci definiebas, no vis nostrud conclusionemque. Ad his virtute accusata, pro habemus singulis temporibus ut, ne bonorum dolores euripidis quo. No nam amet erant intellegebat. Rationibus instructior id pri, vis case abhorreant ea, id sea meis feugiat.
:::



:::danger This is danger !
Lorem ipsum dolor sit amet, ut alii voluptaria est, ad illum inimicus deterruisset eam. His eu bonorum adipisci definiebas, no vis nostrud conclusionemque. Ad his virtute accusata, pro habemus singulis temporibus ut, ne bonorum dolores euripidis quo. No nam amet erant intellegebat. Rationibus instructior id pri, vis case abhorreant ea, id sea meis feugiat.
:::


## Accordion component

from [https://vuejsexamples.com/an-accordion-using-vuejs-and-tailwind-css/](https://vuejsexamples.com/an-accordion-using-vuejs-and-tailwind-css/)

`src/.vuepress/components/Accordion.vue`

```vue
<template>
  <div class>
    <div class="tab__header">
      <a
        href="#"
        class="tab__link p-4 block bg-background-content hover:bg-background-primary no-underline text-accent border-b-2 border-accent flex justify-between"
        @click.prevent="active = !active"
      >
        <strong>{{ title }}</strong>
        <span class="down-Arrow" v-show="!active">&#9660;</span>
        <span class="up-Arrow" v-show="active">&#9650;</span>
      </a>
    </div>
    <div class="tab__content p-2" v-show="active">
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title"],
  data() {
    return {
      active: false
    };
  }
};
</script>
```

<Accordion title="Usage">
```html
<Accordion title="Usage">
<p>Lorem ipsum dolor sit amet, ut alii voluptaria est, ad illum inimicus deterruisset eam. His eu bonorum adipisci definiebas, no vis nostrud conclusionemque. Ad his virtute accusata, pro habemus singulis temporibus ut, ne bonorum dolores euripidis quo. No nam amet erant intellegebat. Rationibus instructior id pri, vis case abhorreant ea, id sea meis feugiat.</p>
</Accordion>
```
</Accordion>