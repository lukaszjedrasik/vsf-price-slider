<template>
  <div class="price-slider">
    <h2>Price Selector</h2>
      <vue-slider
        v-model="dynamicPrice.values"
        :min="Math.min(minAvailablePrice, dynamicPrice.values[0])"
        :max="Math.max(maxAvailablePrice, dynamicPrice.values[1])"
        lazy
      />
  </div>
</template>

<script>
    import applyDynamicPriceFilter from '../mixins/applyDynamicPriceFilter';
    import VueSlider from 'vue-slider-component/dist-css/vue-slider-component.umd.min.js'
    import 'vue-slider-component/dist-css/vue-slider-component.css'
    import 'vue-slider-component/theme/default.css'

    export default {
        name: 'CustomPriceSelector',
        components: {
            VueSlider
        },
        mixins: [
            applyDynamicPriceFilter('dynamicPrice')
        ]
    }
</script>

<style lang="scss">
.price-slider {
  .vue-slider-dot {
    z-index: 3;
  }
}
</style>
