
<script>


export default{
  data(){
    return{

    }
  },
  methods:{
    scrollTop(){

      console.log("You clicked.");
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  
    }

  },
  created(){
    
  },
  components:{

  }
}

</script>

<template>

<div class="sticky-block">
  <div @click="scrollTop()" class="button-top">
    <div class="border-wrap">
      <span class="button-top_icon">
        <font-awesome-icon :icon="['fas', 'angles-up']" />
      </span>
    </div>
  </div>
</div>
  
</template>

<style lang="scss" scoped>
@use '../style/variables' as *;

.sticky-block{
  display: flex;
  justify-content: flex-end;
  position: sticky;
  top: 0px;
  // pointer-events: none;
}
.button-top{
  width: 25px;
  height: 25px;
  rotate: 45deg;
  color: black;
  background-color: $company_yellow;
  border: 2px solid $company_yellow;
  display: inline-block;
  margin-right: 10px;
  margin-top: 394px;
  cursor: pointer;

    
  .border-wrap{
    border: 2px solid black;
    display: flex;
    justify-content: center;
    align-items:center;
    width: 100%;
    height: 100%;
    
    svg.svg-inline--fa.fa-angles-up{
      rotate: -45deg;
      font-size: 10px;
      transform: translate(15%, -25%);
    }
  }
}

</style>
