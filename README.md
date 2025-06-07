# vue3-slick-carousel
vue3-slick-carousel
Is a clone of vue-slick-carousel
AND
vue-slick-carousel inherits the long-loved slick-carousel features, which was been completely rewritten as a vue component. 
The small changes made were for my personal use on a VUE3 project.
They are there fore compatibilty updates to work with VUE3 +

Nothing else has changed.
To refere to the original project, go to [ vue-slick-carousel ](https://github.com/gs-shop/vue-slick-carousel/) 
<br/>


## Installation

### yarn/npm/bit

```bash
# npm
npm i vue3-slick-carousel
# yarn
yarn add vue3-slick-carousel
# bit
bit import gsshop.vue3-slick-carousel/vue3-slick-carousel
```

### cdn

```bash
# latest
https://unpkg.com/vue3-slick-carousel
```

<br/>

## Quick Start

```html
<template>
  <div>
    <VueSlickCarousel :arrows="true" :dots="true">
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
    </VueSlickCarousel>
  </div>
</template>

<script>
  import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  // optional style for arrows & dots
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

  export default {
    name: 'MyComponent',
    components: { VueSlickCarousel },
  }
</script>
```
