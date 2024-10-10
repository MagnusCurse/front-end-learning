<template>
  <header class="top-bar spread">
    <nav class="top-bar-nav">
      <router-link to="/" class="top-bar-link">
        <i class="icofont-spoon-and-fork"></i>
        <span>Home</span>
      </router-link>
      <!-- router products -->
      <router-link to="/products" class="top-bar-link">
        <span>Products</span>
      </router-link>
      <!-- router past-orders -->
      <router-link to="/past-orders" class="top-bar-link">
        <span>Past Orders</span>
      </router-link>
    </nav>

    <div @click="toggleSideBar" class="top-bar-cart-link">
      <i class="icofont-cart-alt icofont-1x"></i>
      <span>Cart ( {{ cartItemsQuantity() }} )</span>
    </div>

  </header>
  <!-- show the component according to the route, the default route is HomeWorld.vue component -->
  <router-view :inventory="inventory" :addToCart="addToCart" />
  <Sidebar v-if="showSideBar"
    :toggle="toggleSideBar" 
    :inventory="inventory"
    :cart="cart"
    :remove="removeItem"
  />


</template>

<script>
import Sidebar from '@/components/Sidebar.vue'
import food from './food.json'

export default {
  components: {
    Sidebar
  },
  data: function() {
    return {
      showSideBar: false,
      inventory: food,
      cart: {

      }
    }
  },
  methods: {
    addToCart(name, index) {
      if(!this.cart[name]) {
        this.cart[name] = 0;
      }
      this.cart[name] += this.inventory[index].quantity; // increase the quantity of the cart according to the type
    },
    toggleSideBar() {
      this.showSideBar = !this.showSideBar;
    },
    // remove the item from the cart
    removeItem(name) {
      delete this.cart[name]
    },
    // get the current item quantity of the cart 
    cartItemsQuantity() {
      if(Object.keys(this.cart).length == 0) {
        return 0
      }
      const cartQuantity = Object.values(this.cart).reduce((acc, cur) => {
        return acc + cur
      })
      return cartQuantity
    }
  }
}



</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
