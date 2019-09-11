<template>
    <div class="cart-temp">
        <button @click="isVisibleCart = !isVisibleCart"  class="cart-button" type="button">Корзина</button>
        <div class="cart-block" v-show="isVisibleCart">
            <p v-if="!cartItems.length"> Cart is empty </p>
            <cart-item v-for="product of cartItems"
            :key="product.id_product"
            :img="imgCart"
            :item="product"></cart-item>
        </div>
    </div>
</template>

<script>
import cartItem from './cartItem.vue'
export default {
    data () {
        return {
            imgCart: 'https://placehold.it/100x80',
            cartUrl: `/getBasket.json`,
            cartItems: [],
            isVisibleCart: false,
        }
    },    
    components: {
        'cart-item': cartItem
    },
    methods: {
        addGoods(good) { //Добавление
            let find = this.cartItems.find ( el => el.id_product === good.id_product )

            if (find) {
             this.$parent.putGoods (`/api/cart/${find.id_product}`, {quantity: 1})
                 .then (data => {
                     if (data.result) {
                         find.quantity++
                     }
                 })
            } else {
                let prod = Object.assign ({quantity: 1}, good)
                this.$parent.pushGoods (`/api/cart/`, prod)
                 .then (data => {
                     if (data.result) {
                         this.cartItems.push (prod)
                     }
             })
            }
        },
        listGoods() {
            return this.cartItems;   
        },
        rmGood (good) { //Удаление
            if (good.quantity > 1) { 
                this.$parent.deleteGoods (`/api/cart/${good.id_product}`, {quantity: -1})
                    .then (data => {
                        if (data.result) {
                        good.quantity--
                        }
                    })
            } else {
                this.$parent.deleteGoods (`/api/cart/${good.id_product}`)
                .then (data => {
                    if (data.result) {
                        this.cartItems.splice (this.cartItems.indexOf(good), 1)
                    }
                })
            };
        },
    },
    mounted () {
        this.$parent.fetchGoods (`/api/cart`)
        .then (data => {
           for (let el of data.contents) {
             this.cartItems.push (el)
            //  this.filtred.push (el)
           }
        })
    }
}
</script>
