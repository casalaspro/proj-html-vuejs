<script>
import {store} from './store';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';
import StickyButton from './components/StickyButton.vue';


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
    console.log(document.documentElement.scrollTop);
  },
  components:{
    AppHeader,
    AppMain,
    AppFooter,
    StickyButton,

  }
}

</script>

<template>
  <StickyButton />
  

    <header>
      <AppHeader />
     </header>

     <main>
      <AppMain />

     </main>

     <footer>
      <AppFooter />
     </footer>
  <!-- </div> -->
</template>

<style lang="scss">
@use './style/general';
@use './style/_variables' as *;

footer{
  background-image: url(./assets/footer-bg.png);
  background-size: cover;
}

header{
  margin-top: -419px;
}


  




</style>
