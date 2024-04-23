<script>
import AppHeadTools from './AppHeadTools.vue';
import AppNavbar from './AppNavbar.vue';


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
    AppHeadTools,
    AppNavbar

  }
}

</script>

<template>

  <AppHeadTools />

  <AppNavbar />


  
  
</template>

<style lang="scss" scoped>


.navbar{
  .container{
    .row{
      ul{
        &.menu{
          display: flex;

        }
      }
      .user-tools{
        .a{
          div{
            width: 13px;
            height: 13px;
            background-image: url(../assets/nav-icon.png);
          }
        }
      }
    }
  }
}

</style>
