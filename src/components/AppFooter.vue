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
            <a class="send-button"></a>
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

  <div class="footer-infos">
    <div class="container">
      <div class="row">
        <p>Copyright &copy; 2024 Boolean</p>
        <div class="card-icons">
          <div class="c-amex"></div>
          <div class="c-yellow"></div>
          <div class="c-mastercard"></div>
          <div class="c-paypal"></div>
          <div class="c-visa"></div>
        </div>
      </div>
    </div>
  </div>


  
</template>

<style lang="scss" scoped>
@use '../style/variables' as *;
.footer-infos{
  padding: 10px 0;
  &:before{
    content: "";
    display: block;
    width: 100%;
    height: 9px;
    border-top: 1px solid $separation_lines;
  }
  .row{
    justify-content: space-between;
    font-size: 10px;
    color: $grey_text;
    .card-icons{
      div:not(:last-child){
        margin-right: 7px;
      }
    }
  }
}
.card-icons{
  display: flex;
  div{
    background-image: url(../assets/payments.png);
    background-size: 100%;
    
    // border: 1px solid white;
    width: 26px;
    height: 16px;
    &.c-amex{
      background-position: 0px -147px;
    }
    &.c-yellow{
      background-position: 0px -122px;
    }
    &.c-mastercard{
      background-position: 0px -47px;
    }
    &.c-paypal{
      background-position: 0px -73px;
    }
    &.c-visa{
      background-position: 0px 0px;
    }
  }
}
.footer-menu{
  padding-top: 82px;
  padding-bottom: 36px;
  .container{
    .row{
      .info li:hover:not(:first-child),.extras li:hover:not(:first-child){
        color: $company_yellow;
      }
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
        // &:hover:not(:first-child){
        //   color: $company_yellow;
        // }
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
            &:hover{
              color: $company_yellow;
            }
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
            &:focus-visible{
              outline: 2px solid $company_yellow;
            }
          }
          .send-button{
            height: 14px;
            width: 13px;
            background-image: url(../assets/newsletter.png);
            background-size: 100%;
            margin-left: -26px;
            cursor: pointer;
            
          }

        }
      }
    }
  }
}

</style>
