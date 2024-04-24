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
      <h4 class="section-title">Our Products</h4>
    </div>
    <div class="container">
      <div class="products-selection row">
        <h5 class="products-selection_titles">Featured</h5>
        <h5 class="products-selection_titles">New Arrival</h5>
        <h5 class="products-selection_titles">Best Sellers</h5>
      </div>
    </div>
    <div class="products-cards">
      <div class="container">
        <div class="row">
          <div class="col-3">
            <div class="card">

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
</template>

<style lang="scss" scoped>
@use '../style/variables' as *;

.products{
  .section-title::after{
    content: '';
    display: block;
    border-bottom: 1px solid $company_yellow;
    width: 30px;
    margin: 10px auto;
  }
  .products-selection.row{
    justify-content: center;
    .products-selection_titles{
      padding: 16px 25px;
      border: 1px solid $separation_lines;
      cursor: pointer;
      &:hover{
        color: $company_yellow;
      }
    }
  }
}
</style>
