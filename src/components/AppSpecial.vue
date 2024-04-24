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
  <div class="special">
    <div class="container">
      <h2 class="section-title">Special Category</h2>
    </div>
    <div class="container">
      <div class="row">

        <div class="col-4">
          <div class="card batman">
            <div class="info-box">
              <h3 class="card-title">Batman</h3>
              <a href="#" class="shop-link">Shop Now</a>
            </div>
            <div class="card-modal">Batman</div>
          </div>
        </div>

        <div class="col-4">
          <div class="card bayonetta">
            <div class="info-box">
              <h3 class="card-title">Bayonetta</h3>
              <a href="#" class="shop-link">Shop Now</a>
            </div>
            <div class="card-modal">Bayonetta</div>
          </div>
        </div>

        <div class="col-4">
          <div class="card dark">
            <div class="info-box">
              <h3 class="card-title">Dark Souls</h3>
              <a href="#" class="shop-link">Shop Now</a>
            </div>
            <div class="card-modal">Dark Souls</div>
          </div>
        </div>

        <div class="col-4"></div>
        <div class="col-4"></div>
      </div>
    </div>
  </div>
  
</template>

<style lang="scss" scoped>
@use '../style/variables' as *;

.special{
  margin-right: -$half_gutter;
  margin-left: -$half_gutter;
  margin-bottom: 81px;
}
.col-4{
  padding: 0 $half_gutter;
  .card{
    position: relative;
    background-size: cover;
    height: 384px;
    display: flex;
    flex-direction: column;
    justify-content: end;
    &.batman{
      background-image: url(../assets/category-image-02-446x550_t.jpg);
    }
    &.bayonetta{
      background-image: url(../assets/category-image-01-446x550_t.jpg);
    }
    &.dark{
      background-image: url(../assets/category-image-03-446x550_t.jpg);
    }
    .info-box{
      padding: 15px 0 10px 10px;
      background-color: #170e1fb7;
      .card-title{
        font-size: 13px;
      }
      .shop-link{
        font-size: 9px;
        font-weight: 500;
        color: $company_yellow;
        &::after{
          content: '';
          display: block;
          width: 40px;
          border-bottom: 1px solid $company_yellow;;
        }
      }
      
    }
    .card-modal{
        font-size: 10px;
        color: black;
        position: absolute;
        padding: 2px 5px;
        background-color: white;
        border-radius: 4px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: none;
        
    }
    &:hover .card-modal{
      display: block;
    }
    &:hover .info-box{
      background-color: #170e1f;
    }
    &:hover{
      cursor: pointer;
    }
  }
}

</style>
