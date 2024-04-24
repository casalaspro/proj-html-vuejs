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

  <div class="banner">
    <div class="container">
      <div class="row">
        <div class="col-6">
          <div class="card ship">
            <div class="flag"><h3>Most Popular</h3></div>
            <h3 class="banner-title">The Battelfield 4<br>Naval Strike</h3>
          </div>
        </div>
        <div class="col-6">
          <div class="card war">
            <div class="flag"><h3>Latest Game</h3></div>
            <h3 class="banner-title">Assansins<br>Unity Game</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
  
</template>

<style lang="scss" scoped>
@use '../style/variables' as *;

.banner{
  margin-right: -$half_gutter;
  margin-left: --$half_gutter;
  margin-bottom: 64px;
}
.col-6{
  padding: 0 $half_gutter;
  .card{
    background-size: cover;
    padding: 55px 0 55px 44%;
    &.ship{
      background-image: url(../assets/cms-banner-01.jpg);
    }
    &.war{
      background-image: url(../assets/cms-banner-02.jpg);
    }
    .flag{
    background-color: $company_yellow;
    padding: 0px 10px;
    width: 135px;
    transform: skew(-30deg);
    margin-bottom: 20px;
    // position: relative;
    h3{
      // position: absolute;
      transform: skew(30deg);
      color: black;
      font-weight: 600;
      font-size: 18px;
      font-style: italic;
    }
  }
  .banner-title{
    font-size: 23px;

  }
  }
}

</style>
