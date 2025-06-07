# vue-slick3
vue-slick3 is a clone of vue-slick-carousel
AND
vue-slick-carousel is based on slick-carousel, and was completely rewritten as a vue component. <br/>
These small changes made were for my personal use on a VUE3 project.<br/>
They are therefore compatibility updates to work with VUE3 +

Nothing else has changed.
To refere to the original project, go to [ vue-slick-carousel ](https://github.com/gs-shop/vue-slick-carousel/) 
<br/>


## Installation

### yarn/npm/bit

```bash
# npm
npm i vue-slick3
# yarn
yarn add vue-slick3
```

### cdn

```bash
# latest
https://unpkg.com/vue-slick3
```

<br/>

## Quick Start

```html
<template>
  <div>
    <VueSlick3 :arrows="true" :dots="true">
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
    </VueSlick3>
  </div>
</template>

<script>
  import VueSlick3 from 'vue-slick3'
  import 'vue-slick3/dist/vue-slick3.css'
  // optional style for arrows & dots
  import 'vue-slick3/dist/vue-slick3-theme.css'

  export default {
    name: 'MyComponent',
    components: { VueSlick3 },
  }
</script>
```
