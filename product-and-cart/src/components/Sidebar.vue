<template>
    <aside class="cart-container">
        <div class="cart">
        <h1 class="cart-title spread">
            <span>
            Cart
            <i class="icofont-cart-alt icofont-1x"></i>
            </span>
            <button @click="toggle" class="cart-close">&times;</button>
        </h1>

        <div class="cart-body">
            <table class="cart-table">
            <thead>
                <tr>
                <th><span class=sr-only> Product Image </span></th>
                <th>Product</th>
                <th>Price</th>
                <th>Qty</th>
                <th>Total</th>
                <th><span class="sr-only">Actions</span></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(quantity, key, i) in cart" :key="i">
                <td><i class="icofont-carrot icofont-3x"></i></td>
                <td> {{ key }} </td>

                <!-- the price of the items -->
                <!-- The backslash (\) is used to escape special characters in many languages and frameworks. Without it, 
                the $ might be misinterpreted as a syntax element. -->
                <td>  ${{ getPrice(key) }}  </td>

                <!-- the quantity of the items -->
                <td class="center"> {{ quantity }} </td>

                <!-- the total price of the items -->
                <td> ${{ getTotalPrice(quantity, key) }}  </td>

                <td class="center">
                    <button class="btn btn-light cart-remove" @click="remove(key)">
                    &times;
                    </button>
                </td>
                </tr>
            </tbody>
            </table>

            <p class="center" v-if="!Object.keys(cart).length"><em>No items in cart</em></p>
            <div class="spread">
            <!-- the price of the carrots -->
            <span><strong>Total:</strong> $ {{ getCartTotal() }} </span>
            <button class="btn btn-light">Checkout</button>
            </div>
        </div>
        </div>
    </aside>
</template>

<script>
export default {
    props: ['toggle', 'cart', 'inventory', 'remove'],
    methods: {
        getPrice(name) {
            const product = this.inventory.find((p) => {
                return p.name == name
            })
            return product.price.USD
        },
        getTotalPrice(quantity, name) {
            return (this.getPrice(name) * quantity).toFixed(2)
        },
        getCartTotal() {
            if(Object.keys(this.cart).length == 0) {
                return 0
            }
            const names = Object.keys(this.cart)
            const cartTotal = Object.values(this.cart).reduce((acc, cur, index) => {
                return acc + (cur * this.getPrice(names[index]))
            })
            return cartTotal.toFixed(2)
        }
    }
}
</script>