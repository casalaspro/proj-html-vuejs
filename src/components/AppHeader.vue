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

.head-tools{
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
          margin: 0 26px;
          &::after{
            content: "";
            display: inline;
            border-right: 1px solid white;
            margin-left: 26px;
          }
        }
      }
  }
  }
}

</style>
