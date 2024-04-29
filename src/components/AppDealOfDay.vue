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

  <div class="products">
    <div class="container">
      <h4 class="section-title">Deal Of The Day</h4>
    </div>
    <div class="container">
      <div class="products-selection row">
        <h5 class="products-selection_titles">1026 days</h5>
        <h5 class="products-selection_titles">13 hours</h5>
        <h5 class="products-selection_titles">24 minutes</h5>
        <h5 class="products-selection_titles">17 seconds</h5>
      </div>
    </div>
    <div class="products-cards">
      
      <div class="container">
        <div class="row">

          

          <div class="col-3">
            <div class="card">
              <img class="card-img" src="../assets/04-327x327.jpg" alt="joypad">
              <div class="card-info">
                <div class="product-rating">
                  <span class="star full-star"><font-awesome-icon :icon="['fas', 'star']" /></span>
                  <span class="star full-star"><font-awesome-icon :icon="['fas', 'star']" /></span>
                  <span class="star full-star"><font-awesome-icon :icon="['fas', 'star']" /></span>
                  <span class="star full-star"><font-awesome-icon :icon="['fas', 'star']" /></span>
                  <span class="star empty-star"><font-awesome-icon :icon="['fas', 'star']" /></span>
                </div>
                <h5 class="product-name">Shopping Mahjong connect</h5>
                <div class="product-price">
                  <p class="old-price">£180.00</p>
                  <p class="discounted-price">£100.00</p>
                </div>
              </div>
              <div class="flag flag-discount"><h5 class="flag-title">-44%</h5></div>
            </div>
          </div>

          <div class="col-3">
            <div class="card">
              <img class="card-img" src="../assets/09-327x327.jpg" alt="joypad">
              <div class="card-info">
                <div class="product-rating">
                  <span class="star full-star"><font-awesome-icon :icon="['fas', 'star']" /></span>
                  <span class="star full-star"><font-awesome-icon :icon="['fas', 'star']" /></span>
                  <span class="star full-star"><font-awesome-icon :icon="['fas', 'star']" /></span>
                  <span class="star full-star"><font-awesome-icon :icon="['fas', 'star']" /></span>
                  <span class="star empty-star"><font-awesome-icon :icon="['fas', 'star']" /></span>
                </div>
                <h5 class="product-name">Buddy and Lucky Solitair</h5>
                <div class="product-price">
                  <p class="discounted-price">£83.00</p>
                  <p class="old-price">-</p>
                  <p class="discounted-price">£90.00</p>
                </div>
              </div>
              
            </div>
          </div>

          <div class="col-3">
            <div class="card">
              <img class="card-img" src="../assets/03-327x327.jpg" alt="joypad">
              <div class="card-info">
                <div class="product-rating">
                  <span class="star empty-star"><font-awesome-icon :icon="['fas', 'star']" /></span>
                  <span class="star empty-star"><font-awesome-icon :icon="['fas', 'star']" /></span>
                  <span class="star empty-star"><font-awesome-icon :icon="['fas', 'star']" /></span>
                  <span class="star empty-star"><font-awesome-icon :icon="['fas', 'star']" /></span>
                  <span class="star empty-star"><font-awesome-icon :icon="['fas', 'star']" /></span>
                </div>
                <h5 class="product-name">Taishou x Alice Epilogue</h5>
                <div class="product-buttons">
                  <span class="col-3 p-button bag"><font-awesome-icon :icon="['fas', 'bag-shopping']" /></span>
                  <span class="col-3 p-button heart"><font-awesome-icon :icon="['fas', 'heart']" /></span>
                  <span class="col-3 p-button cross"><font-awesome-icon :icon="['fas', 'up-down-left-right']" /></span>
                  <span class="col-3 p-button eye"><font-awesome-icon :icon="['fas', 'eye']" /></span>
                </div>
              </div>
              <div class="flag flag-discount"><h5 class="flag-title">-44%</h5></div>
            </div>
          </div>

          <div class="col-3">
            <div class="card">
              <img class="card-img" src="../assets/11-327x327.jpg" alt="joypad">
              <div class="card-info">
                <div class="product-rating">
                  <span class="star full-star"><font-awesome-icon :icon="['fas', 'star']" /></span>
                  <span class="star full-star"><font-awesome-icon :icon="['fas', 'star']" /></span>
                  <span class="star full-star"><font-awesome-icon :icon="['fas', 'star']" /></span>
                  <span class="star full-star"><font-awesome-icon :icon="['fas', 'star']" /></span>
                  <span class="star empty-star"><font-awesome-icon :icon="['fas', 'star']" /></span>
                </div>
                <h5 class="product-name">Shopping Mahjong connect</h5>
                <div class="product-price">
                  <p class="discounted-price">£100.00</p>
                </div>
              </div>
              
            </div>
          </div>
          <!-- END ROW -->
          

            
          <div class="carousel-buttons">
            <div class="button button-left"></div>
            <div class="button button-right"></div>
           </div>
           
          


        </div>
      </div>
    </div>
  </div>
  
</template>

<style lang="scss" scoped>
@use '../style/variables' as *;

.products{
  margin-bottom: 62px;
  .section-title::after{
    content: '';
    display: block;
    border-bottom: 1px solid $company_yellow;
    width: 30px;
    margin: 10px auto;
  }
  .products-selection.row{
    justify-content: center;
    margin-bottom: 23px;
    .products-selection_titles{
      padding: 16px 25px;
      border: 1px solid $separation_lines;
      cursor: pointer;
      &:hover{
        color: $company_yellow;
      }
    }
  }
  .products-cards{
    
    .row{
      margin-right: -$half-gutter;
      margin-left: -$half-gutter;

      .carousel-buttons{
        // width: 100%;
      // display: flex;
      // justify-content: space-between;
      position: relative;
      // margin-left: -10px;
      // margin-right: -10px;
      width: 100%;
      // position: absolute;
      // z-index: 10;

      .button{
        background-image: url(../assets/arrow.png);
        width: 20px;
        height: 20px;
        // display: inline-block;
        position: absolute;
        // border: 1px solid white;
        background-size: 268%;
        &.button-left{
        background-position: 0px -34px;
        left: 0;
        top: -250px;
        &:hover{
          background-position: 0px 0px;
        }
        }
        &.button-right{
        background-position: 20px -34px;
        right: 0;
        top: -250px;
        &:hover{
          background-position: 20px 0px;
        }
        }
      }
    }
    }
    
    .card{
      position: relative;
      padding: $half_gutter;
      .flag-discount{
        position: absolute;
        top: 17px;
        left: 17px;
        padding: 0 5px;
        font-weight: 300;
        font-size: 13px;
      }
      .card-img{
        height: 210px;
        width: 100%;
      }
      .card-info{
        background-color: $company_black-purple;
        padding: $padding_card_info;
        height: 123px;
        & > *{
          margin-bottom: 13px;
        }
        .product-rating{
          .star{
            font-size: 8px;
            margin-right: 2px;
            &.full-star{
              color: $company_yellow;
            }
            &.empty-star{
              color: $grey_text;
            }
          }
        }
        // .product-name{

        // }
        .product-price{
          display: flex;
          font-size: 10px;
          p{
            margin-right: 8px;
          }
          .old-price{
            color: $grey_text;
            // margin-right: 8px;
            text-decoration: line-through;
          }
          .discounted-price{
            color: $company_yellow;
          }
        }
        .product-buttons{
          display: flex;
          margin-right: -$padding_card_info;
          margin-left: -$padding_card_info;
          .p-button{
            border: 1px solid $separation_lines;
            text-align: center;
            font-size: 10px;
            cursor: pointer;
            &:hover{
              color: $company_yellow;
            }
          }
        }
      }
    }
  }
}
</style>
