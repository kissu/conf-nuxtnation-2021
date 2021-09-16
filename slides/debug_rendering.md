<h1 class="!text-green-500">3. How to debug those?</h1>

- for `target: 'static'` configurations, you can `yarn generate && yarn start` and:
  - see if it works locall  y
  - double-check your `nuxt.config.js` `generate` key
  - generate it and drag&drop the folder to [Netlify.drop](https://app.netlify.com/drop) for a quick and easy debugging

- for `target: 'server'` configurations, you can `yarn build && yarn start`
  - [Heroku](https://www.heroku.com/) is still the easiest to setup a simple backend server
  - [Render.com](https://render.com/) can also be a good alternative


For every other platform, please check our official [integration guides](https://nuxtjs.org/integrations) and try to narrow down the scope of your configuration! 🚀

<!--
people sometimes do have funky Nginx configurations, Docker or even network issues
 -->
