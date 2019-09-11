<template>
    <div class="cart-item">
        <div class="product-bio">
            <img :src="img" alt="Some img">
            <div class="product-desc">
                <p class="product-title">{{ item.product_name }}</p>
                <p class="product-quantity">К-во:{{ item.quantity }}</p>
                <p class="product-single-price">$ {{ item.price }}</p>
            </div>
        </div>
        <div class="right-block">
            <p class="product-price">{{ item.quantity * item.price }}</p>
            <button class="del-btn" @click="$root.$refs.cart.rmGood(item)">&times;</button>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
        }
    },    
    props: ['img', 'item']
}
</script>
