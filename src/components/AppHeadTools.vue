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

<section class="head-tools">
  <div class="container">
    <div class="row">
      <div class="whish-help">
        <a href="#">Whishlist(0)</a>
        <a href="#">Need Help? <span class="fas-icon"><font-awesome-icon :icon="['fas', 'chevron-down']" /></span></a>
      </div>
      <p>Call 24/7 . 800-8754-987</p>
    </div>
  </div>
</section>
  
</template>

<style lang="scss" scoped>
@use '../style/_variables.scss' as *;

section::after{
      content: "";
      display: block;
      border-top: 1px solid $separation-lines;
      width: 100%;
    }

    .head-tools{
      color: $grey_text;
  font-size: 10px;
  .row{
    justify-content: space-between;
    margin: 10px 0;

    .whish-help{
    
      .fas-icon{
        margin-left: 4px;
        font-size: 8px;
      }

      a{
        display: inline;
        &:nth-child(1){
          margin-right: 26px;
          color: $grey_text;
          &::after{
            content: "";
            display: inline;
            border-right: 1px solid $grey_text;
            margin-left: 26px;
          }
        }
      }
  }
  }
}

</style>
