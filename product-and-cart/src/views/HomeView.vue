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

        <div class="card" v-for="(product, i) in inventory.slice(0, 3)" :key="product.id">
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
        </div>

        
        <!-- the sidebar of the cart  -->
        <side-bar v-if="showSideBar" 
        :toggle="toggleSideBar" 
        :inventory="inventory"
        :cart="cart"
        :remove="removeItem"
        />

      </div>
    </main>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

import food from '../food.json'

export default {
  name: 'HomeView',
  data() {
    return {
      inventory: food
    }
  },
  components: {
    HelloWorld
  }
}
</script>
