---
clicks: 8
---

<h1 class="!text-green-900">SSR</h1>

```js
// nuxt.config.js
ssr: true, // default value
target: 'server' // default value
```

How to prepare for production: `yarn build`

<div v-click class="relative flex items-center justify-center mt-12">
  <div class="flex flex-col">
    <ri-loader-5-fill v-if="$slidev.nav.clicks === 6 || $slidev.nav.clicks === 7"
      class="absolute mt-3 text-green-500 transition duration-500 animate-spin"
      :class="[$slidev.nav.clicks === 7 ? 'ml-8.5' : 'ml-6.5']" />
    <ph-monitor-bold v-if="$slidev.nav.clicks < 8" class="w-auto h-12" />
    <ph-monitor-duotone v-if="$slidev.nav.clicks === 8" class="w-auto h-12" />
    <p class="!m-1" v-if="$slidev.nav.clicks < 8">
      {{ $slidev.nav.clicks === 7 ? 'Hydration' : 'Browser' }}
    </p>
    <p class="!m-1" v-if="$slidev.nav.clicks === 8">Hydrated SPA</p>
  </div>

  <div class="w-24 text-center flex flex-col mx-4" v-if="$slidev.nav.clicks < 3 && $slidev.nav.clicks < 7"
    :class="[$slidev.nav.clicks === 2 ? 'visible' : 'invisible']">
    <span class="text-sm">1. Request</span>
    <mdi-arrow-right-thick class="mx-auto inline" />
  </div>
  <div class="w-24 text-center flex flex-col mx-4" v-if="$slidev.nav.clicks > 2 && $slidev.nav.clicks < 7"
    :class="[$slidev.nav.clicks === 5 ? 'visible' : 'invisible']">
    <span class="text-sm">4. HTML</span>
    <mdi-arrow-left-thick class="mx-auto inline" />
  </div>

  <div class="flex flex-col" v-if="$slidev.nav.clicks < 7">
    <img src="/images/nuxt_logo.svg" class="h-12">
    <span class="text-sm">Nuxt Server</span>
  </div>


  <div class="w-24 text-center flex flex-col mx-4" v-if="$slidev.nav.clicks < 4 && $slidev.nav.clicks < 7"
    :class="[$slidev.nav.clicks === 3 ? 'visible' : 'invisible']">
    <span class="text-sm">2. Request</span>
    <mdi-arrow-right-thick class="mx-auto inline" />
  </div>
  <div class="w-24 text-center flex flex-col mx-4" v-if="$slidev.nav.clicks > 3 && $slidev.nav.clicks < 7"
    :class="[$slidev.nav.clicks === 4 ? 'visible' : 'invisible']">
    <span class="text-sm">3. JSON</span>
    <mdi-arrow-left-thick class="mx-auto inline" />
  </div>

  <div class="flex flex-col" v-if="$slidev.nav.clicks < 7">
    <h3 class="flex justify-center p-2 mx-auto bg-orange-700 rounded-md">API</h3>
    <p class="!m-1">REST API</p>
  </div>
</div>
