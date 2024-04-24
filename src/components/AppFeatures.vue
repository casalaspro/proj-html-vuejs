<script>


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

  }
}

</script>

<template>
    <div class="features">
      <div class="container">
        <div class="row">

          <div class="col-3">

            <div class="delivery-wrap">
              <div class="icon delivery"></div>
              <div class="text">
                <h6>Free Delivery</h6>
                <p>Free Shipping On All Order</p>
              </div>
            </div>

          </div>
        
          <div class="col-3">

            <div class="delivery-wrap">
              <div class="icon money"></div>
              <div class="text">
                <h6>Money Return</h6>
                <p>Back Guarantee in 7 days</p>
              </div>
            </div>

          </div>

          <div class="col-3">

            <div class="delivery-wrap">
              <div class="icon member"></div>
              <div class="text">
                <h6 id="member-title">Member Discount</h6>
                <p>On every order over $130.00</p>
              </div>
            </div>
          
          </div>

          <div class="col-3">

            <div class="delivery-wrap">
              <div class="icon return"></div>
              <div class="text">
                <h6>Return Policy</h6>
                <p>Support 24 hours a day</p>
              </div>
              
            </div>

          </div>
        </div>
      </div>
    </div>

</template>

<style lang="scss" scoped>
@use '../style/variables' as *;
.features{
  padding: 59px 0;
}
.col-3{
  .delivery-wrap{
    padding-left: 30px;
    display: flex;
    align-items: center;
    .icon{
      background-image: url(../assets/service-icon.png);
      background-size: 100%;
      flex-shrink: 0;
      margin-right: 10px;

      &.delivery{
        width: 37px;
        height: 26px;
        background-position: 0px -73px;
      }
      &.money{
        width: 37px;
        height: 26px;
        background-position: 0px -218px;
      }
      &.member{
        width: 37px;
        height: 26px;
        background-position: 0px -364px;
      }
      &.return{
        width: 37px;
        height: 26px;
        background-position: 0px -511px;
      }
    }

    .text{
      h6{
        font-size: 10px;
      }
      p{
        font-size: 10px;
        color: $grey_text;
      }
    }
// HOVER
    &:hover .delivery{
      background-position: 0px 0px;
      color: $company_yellow;    
    }
    &:hover .money{
      background-position: 0px -145px;  
    }
    &:hover .member{
      background-position: 0px -291px;
    }
    &:hover .return{
      background-position: 0px -438px;
    }
    &:hover h6{
      color: $company_yellow;  
    }

  }
}

// .col-3{
//   .wrap{
//   padding-left: 30px;
//   display: flex;
//   align-items: center;
//     .icon{

//       // border: 1px solid white;
//       background-image: url(../assets/service-icon.png);
//       background-size: 100%;
//       flex-shrink: 0;
//       margin-right: 10px;
//       &.delivery{
//         width: 37px;
//         height: 26px;
//         background-position: 0px -73px;

//         &:hover + h6{
//           background-position: 0px 0px;
//           color: $company_yellow;    
//         }

//       }
//       &.money{
//         width: 37px;
//         height: 26px;
//         background-position: 0px -218px;
//         &:hover + h6{
//         background-position: 0px -145px;
//         color: $company_yellow;   
//       }

//       }
//       &.member{
//         width: 37px;
//         height: 26px;
//         background-position: 0px -364px;

//         &:hover #member-title{
//           background-position: 0px -291px;
//           color: $company_yellow;
//         }
//         // &.hover ~ h6{
//         //   color: $company_yellow;
//         // }

//       }
//       &.return{
//         width: 37px;
//         height: 26px;

//         background-position: 0px -511px;
//         &:hover + h6{
//           background-position: 0px -438px;
//           color: $company_yellow; 
//         }

//       }
//     }
//     .text{
//       h6{
//         font-size: 10px;
//       }
//       p{
//         font-size: 10px;
//         color: $grey_text;
//       }
//     }
//   }
// }



</style>
