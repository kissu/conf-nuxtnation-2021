---
clicks: 6
---

<h1 class="!text-green-900">SSG (static)</h1>

```js
// nuxt.config.js
ssr: true, // default value
target: 'static'
```

How to prepare for production: `yarn generate`

<div v-click class="relative flex items-center justify-center mt-12">
  <div class="flex flex-col">
    <ri-loader-5-fill v-if="$slidev.nav.clicks === 4 || $slidev.nav.clicks === 5"
      class="absolute mt-3 text-green-500 transition duration-500 animate-spin"
      :class="[$slidev.nav.clicks === 5 ? 'ml-8.5' : 'ml-6.5']" />
    <ph-monitor-bold v-if="$slidev.nav.clicks < 6" class="w-auto h-12" />
    <ph-monitor-duotone v-if="$slidev.nav.clicks === 6" class="w-auto h-12" />
    <p class="!m-1" v-if="$slidev.nav.clicks < 6">
      {{ $slidev.nav.clicks === 5 ? 'Hydration' : 'Browser' }}
    </p>
    <p class="!m-1" v-if="$slidev.nav.clicks === 6">Hydrated SPA</p>
  </div>

  <div class="w-24 text-center flex flex-col mx-4" v-if="$slidev.nav.clicks < 3 && $slidev.nav.clicks < 5"
    :class="[$slidev.nav.clicks === 2 ? 'visible' : 'invisible']">
    <span class="text-sm">1. Request</span>
    <mdi-arrow-right-thick class="mx-auto inline" />
  </div>

  <div class="w-24 text-center flex flex-col mx-4" v-if="$slidev.nav.clicks > 2 && $slidev.nav.clicks < 5"
    :class="[$slidev.nav.clicks === 3 ? 'visible' : 'invisible']">
    <span class="text-sm">2. HTML + JS</span>
    <mdi-arrow-left-thick class="mx-auto inline" />
  </div>

  <div class="flex flex-col" v-if="$slidev.nav.clicks < 5">
    <h3 class="flex justify-center p-2 mx-auto bg-teal-900 rounded-md">CDN</h3>
    <p class="!m-1">Static files</p>
  </div>
</div>
