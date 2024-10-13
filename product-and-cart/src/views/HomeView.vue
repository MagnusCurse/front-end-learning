<template>
  <div class="home">
    <div class="splash-container">
      <div class="splash">
        <h1>Splendid Food</h1>
      </div>
    </div>

    <main class="wrapper">
      <h2>Recommended</h2>
      <div class="recommended">
        <!-- <div class="card" v-for="(product, i) in inventory.slice(0, 3)" :key="product.id">
          <div class="card-title">
            {{ product.name }}
          </div>
          <div class="card-body">
            <i class="icofont-10x icofont-{{ product.icon }}"></i>
            <form>
              <div class="row">
                <div class="cell">
                  <label>Type:</label>
                </div>
                <div class="cell">
                  <em> {{ product.type }} </em>
                </div>
              </div>
              <div class="row">
                <div class="cell">
                  <label>Price:</label>
                </div>
                <div class="cell">
                  $ {{ product.price.USD }}
                </div>
              </div>
              <div class="row">
                <div class="cell">
                  <label>Quantity:</label>
                </div>
                <div class="cell">
                  <input type="number" value="0" v-model.number="inventory[i].quantity">
                </div>
              </div>
            </form>
          </div>
          <div class="card-footer">
            <button class="btn btn-light" @click="addToCart(product.name, i)">Add to cart</button>
          </div>
        </div> -->
        <!-- Use ProductCard Component to replace the original HTML Code above -->
        <ProductCard
          v-for="(product, index) in inventory.slice(0, 3)"
          class="card" 
          :key="product.id"
          :index="index"
          :product="product"
          :addToCart="addToCart"          
        />
      </div>
    </main>
  </div>
</template>

<script>
import ProductCard from '../components/ProductCard.vue';



export default {
  name: 'HomeView',
  props: ['inventory', 'addToCart'],
  components: {
    ProductCard
  }
}
</script>
