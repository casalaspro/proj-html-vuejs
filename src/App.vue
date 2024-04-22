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

  }
}

</script>

<template>
  <h1>Ciao Mondo</h1>
</template>

<style lang="scss">
@use './style/general';

</style>
