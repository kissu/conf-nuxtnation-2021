<h1 class="!text-green-500">5. Quick answers</h1>

How about the [100 most viewed questions](https://data.stackexchange.com/stackoverflow/query/1440706/top-100-most-viewed-questions-on-nuxt) with the `nuxt.js` tag on stackoverflow?


<v-clicks>

- [Why does Prettier not format code in VS Code?](https://stackoverflow.com/q/52586965/8816585)

- [Vue.js generic questions, like how not to mutate vuex store state outside of mutation handlers etc...]

- [The client-side rendered virtual DOM tree is not matching server-rendered content](https://stackoverflow.com/q/47862591/8816585)

- [How to install jQuery into Nuxt.js?](https://stackoverflow.com/q/68413867/8816585)

- [How to import plugins properly?](https://nuxtjs.org/docs/directory-structure/plugins#vue-plugins)

- Please do NOT ❌
  - import scripts with a head + CDN combo
  - import `.min` files from `/static`
  - set a plugin globally on your app if you will use it only once, import it in the component directly
  - try to use the `mode: 'client'` version rather than `ssr: false` deprecated one

</v-clicks>

<!--
Prettier + ESlint, will be more agnostic and will provide linting

DOM missmatch client-only and explain why this hapenning, invalid HTML or not matching the data

difference module vs plugin
 -->
