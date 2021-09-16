<h1 class="!text-green-900">SSG rocks! 🤘</h1>

Since SSG generates a bundle at a specific time, you need either to have the data locally (maybe with [@nuxt/content](https://github.com/nuxt/content)) or you can fetch the data from a remote API **during** the build time. No need to reach an external API after this!

`nuxt.config.js`
```js
import axios from 'axios'

export default {
  ...
  generate: {
    routes: async () => {
      const users = await axios.get('https://jsonplaceholder.typicode.com/users')
      return users.data.map((user) => ({
        route: `/users/${user.id}`,
        payload: user,
      }))
    },
    fallback: 'no-user.html',
  },
}
```

More info available in [the documentation](https://nuxtjs.org/docs/configuration-glossary/configuration-generate#speeding-up-dynamic-route-generation-with-payload)
