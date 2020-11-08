import buildFilterPriceVariant from '../helpers/buildFilterPriceVariant';
import { priceSliderHooks } from '../hooks';

export default (wrapperKey: string = 'dynamicPrice') => ({
  data () {
    return {
      [wrapperKey]: {
        values: [
          0,
          50
        ],
        initialSetupDone: false
      }
    }
  },
  watch: {
    [`${wrapperKey}.values`] () {
      if (!this[wrapperKey].initialSetupDone) {
        return
      }
      return this.applyFilter();
    }
  },
  computed: {
    minAvailablePrice () {
      return this.$store.state['category-next'].dynamicPriceRanges.min;
    },
    maxAvailablePrice () {
      return this.$store.state['category-next'].dynamicPriceRanges.max;
    }
  },
  methods: {
    applyFilter () {
      const filterVariant = buildFilterPriceVariant(this[wrapperKey].values[0], this[wrapperKey].values[1]);
      return this.$store.dispatch('category-next/switchSearchFilters', [ filterVariant ]);
    }
  },
  async created () {
    this.$set(this[wrapperKey], 'values', [
      this.minAvailablePrice,
      this.maxAvailablePrice
    ])
    await this.$nextTick();
    this[wrapperKey].initialSetupDone = true;
  }
})
