<script>
import { store } from '../store';


export default{
  data(){
    return{
      store: store,
    }
  },
  methods:{

  },
  created(){
    console.log(store.muenuHeader)
  },
  components:{

  }
}

</script>

<template>

  <div class="navbar">
    <div class="container">
      <div class="row">
        <img src="../assets/logo.png" alt="" class="logo">

        <ul class="menu">
          <li v-for="menu in store.muenuHeader"><a :href="menu.link">{{ menu.name }}</a></li>
        </ul>

        <div class="user-tools">
          <a href="#"><div class="search"></div></a>
          <a href="#"><div class="user"></div></a>
          <a href="#"><div class="shopping-cart"></div> <span>(0) £0.00</span></a>
        </div>

      </div>
    </div>
  </div>
  
</template>

<style lang="scss" scoped>
@use '../style/variables' as *;

.navbar{
  margin: 20px 0;
  .container{
    .row{
      justify-content: space-between;
      align-items: center;
      font-size: 10px;
      .logo{
        height: 22px;
      }
      ul{
        &.menu{
          display: flex;
          li{
            font-size: 10px;
            font-weight: 700;
          }
          li:not(:last-child){
            margin-right: 39px;
          }
        }
      }
      .user-tools{

        display: flex;
        
        a{
          display: flex;
          align-items: center;

          &:not(:last-child){
              margin-right: 23px;
            }
          
          &:last-child{
            text-align: center;
            color: $company_yellow;
            
          }
        }
          div{
            width: 13px; height: 14px;
            background-image: url(../assets/nav-icon.png);
            background-size: 99%;
            // border: 1px solid white;
            &.search{
              background-position: 0 -49px;
            }
            &.user{
              background-position: 0 -145px;
            }
            &.shopping-cart{
              background-position: 0 -242px;
              display: inline-block;
              margin-right: 5px;
            }
            
          }
        
      }
    }
  }
}

</style>
