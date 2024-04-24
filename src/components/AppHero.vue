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
  
  <div class="hero">
    <!-- <StickyButton /> -->
    <div class="container">
      
      <div class="flag hero-flag"><h3>Upcoming Stock</h3></div>
      <h2 class="hero-title">Resident EVil 3 <br>Remake</h2>
      <button class="hero-button">Shop Now</button>
    </div>
  </div>
  
</template>

<style lang="scss" scoped>
@use '../style/variables' as *;


.hero{

  background-image: url(../assets/hero.jpg);
  height: 592px;
  background-size: cover;
  .container{
    padding: 166px 0;
  .hero-flag{
    background-color: $company_yellow;
    padding: 0px 10px;
    width: 200px;
    transform: skew(-30deg);
    // position: relative;
    h3{
      // position: absolute;
      transform: skew(30deg);
      color: black;
      font-weight: 500;
      font-size: 23px;
    }
  }
  .hero-title{
    font-size: 41px;
    margin: 31px 0 31px 0;
  }
  .hero-button{
    font-size: 10px;
    color: black;
    padding: 12px 18px;
    background-color: $company_white;
    border: none;
    border-right: 2px solid $separation_lines;
    border-bottom: 2px solid $separation_lines;
  }
}
  
}


</style>
