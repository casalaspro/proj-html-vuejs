<script>
import { store } from '../store';


export default{
  data(){
    return{
      store: store,
      test: 'skype'
    }
  },
  methods:{

  },
  created(){
    console.log("Dal footer:", store.menuFooter[0].addressInfo);
  },
  components:{

  }
}

</script>

<template>

  <div class="footer-menu">
    <div class="container">
      <div class="row">
        <ul class="address col-3">
          <li><h3>Address Info</h3></li>
          
          <li v-for="address in store.menuFooter[0].addressInfo"><span class="icon"><font-awesome-icon :icon="['fas', address.iconName]" /></span><span>{{ address.info }}</span></li>
        </ul>
        <ul class="info col-3">
          <li><h3>Informations</h3></li>
          <li v-for="info in store.menuFooter[0].informations"><a :href="info.link">{{ info.name }}</a></li>
        </ul>
        <ul class="extras col-3">
          <li><h3>Extras</h3></li>
          <li v-for="extra in store.menuFooter[0].extras"><a :href="extra.link">{{ extra.name }}</a></li>
        </ul>
        <ul class="newsletter col-3">
          <li><h3>Our Newsletter</h3></li>
          <li><p>There are many variations of passages of form humour or randomised</p></li>
          <li class="email">
            <input type="email" name="" id="">
            <div class="send-button"></div>
          </li>

          <li class="socials">
            
            <li><a href="#"><font-awesome-icon :icon="['fab', 'facebook-f']" /></a></li>
            <li><a href="#"><font-awesome-icon :icon="['fab', 'x-twitter']" /></a></li>
            <li><a href="#"><font-awesome-icon :icon="['fab', 'google-plus-g']" /></a></li>
            <li><a href="#"><font-awesome-icon :icon="['fab', 'skype']" /></a></li>
            <li><a href="#"><font-awesome-icon :icon="['fab', 'instagram']" /></a></li>
        
          </li>
          
        </ul>
      </div>
    </div>
  </div>


  
</template>

<style lang="scss" scoped>
@use '../style/variables' as *;


.footer-menu{
  padding: 82px 0;
  .container{
    .row{
      ul.address{
        li{
          // &:nth-child(2){
            
          // }
          display: flex;
        }
      }
      &>*:not(:last-child){
        padding-right: 20px;
      }
      li{
        color: $grey_text;
        font-size: 10px;
        // margin-bottom: 11px;
        line-height: 20px;
        &:first-child{
          margin-bottom: 20px;
        }
        h3{
          font-family: $titles_font;
          color: $company_white;
          font-size: 15px;
        }
        &.socials{
          color: $company_white;
          font-size: 12px;
          display: flex;
          li{
            color: $company_white;
            font-size: 12px;
            margin-right: 22px;
          }
        }
        .icon{
          color: $company_yellow;
          margin-right: 10px;
          display: inline-block;
        }
      }

      .newsletter{
        &>*{
          margin-bottom: 20px;
        }
        .email{
          display: flex;
          align-items: center;


          input{
            height: 29px;
            width: 100%;
            padding-right: 39px;
            // border-radius: 0;
            border: none;
          }
          .send-button{
            height: 14px;
            width: 13px;
            background-image: url(../assets/newsletter.png);
            background-size: 100%;
            margin-left: -26px;
          }

        }
      }
    }
  }
}

</style>
