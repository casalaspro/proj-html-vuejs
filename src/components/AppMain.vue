<script>
import AppHero from './AppHero.vue';
import AppFeatures from './AppFeatures.vue';
import AppBanner from './AppBanner.vue';
import AppSpecial from './AppSpecial.vue';
import AppProducts from './AppProducts.vue';
import AppBannerDiscount from './AppBannerDiscount.vue';
import AppDealOfDay from './AppDealOfDay.vue';


export default{
  data(){
    return{

    }
  },
  methods:{

  },
  created(){
    
  },
  components:{
    AppHero,
    AppFeatures,
    AppBanner,
    AppSpecial,
    AppProducts,
    AppBannerDiscount,
    AppDealOfDay
  }
}

</script>

<template>
  <section class="hero">
    <AppHero />
  </section>

  <section class="features">
    <AppFeatures />
  </section>

  <section class="banner">
    <AppBanner />
  </section>

  <section class="special">
    <AppSpecial />
  </section>

  <section class="products">
    <AppProducts />
  </section>

  <section class="discount">
    <AppBannerDiscount />
  </section>

  <section class="deals">
    <AppDealOfDay />
  </section>



</template>

<style lang="scss" scoped>

</style>
