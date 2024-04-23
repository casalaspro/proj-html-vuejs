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

footer{
  background-image: url(./assets/footer-bg.png);
  // height: 324px;
  // border: 1px solid white;
  background-size: cover;

}



</style>
