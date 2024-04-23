<script>
import { store } from '../store';


export default{
  data(){
    return{
      store: store,
      menuHover: 100,
    }
  },
  methods:{
    selectMenuHover(i){
      this.menuHover = i;
      console.log("Hai selezionato: ", i);
    },
    deselectMenuHover(){
      this.menuHover = 100;
      console.log('Deselezionato!');
    }
  },
  created(){
    console.log(store.muenuHeader);
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
          <!-- <li @mouseover="selectMenuHover(i)"   v-for="(menu, i) in store.muenuHeader"><a :href="menu.link">{{ menu.name }}</a>
            <ul v-if="menuHover === i" class="menu-modal-hover">
              
            </ul>
          </li> -->
          <li v-for="(menu, i) in store.muenuHeader"><a :href="menu.link">{{ menu.name }}</a>
            <div class="menu-modal-hover">
              <ul>
                <li>Left Sidebar</li>
                <li>Right Sidebar</li>
                <li>Full Width</li>
              </ul>
            </div>
          </li>

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
            position: relative;
            font-size: 10px;
            font-weight: 700;
            &:hover .menu-modal-hover{
            display: block;
            
            }
            .menu-modal-hover{
              
              padding: 20px;
              // background-color: rgba(255, 255, 0, 0.475);
              // border: 1px solid $separation_lines;
              position: absolute;
              z-index: 2;
              top: -10px;
              height: 60px;
              width: 60px;
              display: none;
              ul{
                background-color: $modal_hover_background;
                position: absolute;
                left: -20px;
                top: 47px;
                padding: 20px;
                border: 1px solid $separation_lines;
                width: 180px;
                z-index: 3;
                li{
                  color: $grey_text;
                  line-height: 23px;
                  font-weight: 300;
                  &:hover{
                    color: $company_yellow;
                  }
                }
              }
            }
            
            &:hover{
              color: $company_yellow
            }
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
