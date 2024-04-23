<script>
import {store} from './store';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';


export default{
  data(){
    return{
      store: store,
    }
  },
  methods:{

  },
  created(){
    console.log(store);
  },
  components:{
    AppHeader,
    AppMain,
    AppFooter,

  }
}

</script>

<template>
  <header>
    <AppHeader />
   </header>

   <main>
    <AppMain />
    
   </main>

   <footer>
    <AppFooter />
   </footer>
</template>

<style lang="scss">
@use './style/general';
@use './style/_variables' as *;

header{
  &::after{
      content: "";
      display: block;
      border-top: 1px solid $separation-lines;
      width: 100%;
    }
}

</style>
