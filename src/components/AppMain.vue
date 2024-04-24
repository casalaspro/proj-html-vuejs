<script>
import AppHero from './AppHero.vue';
import AppFeatures from './AppFeatures.vue';


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
    AppFeatures
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
</template>

<style lang="scss" scoped>

</style>
