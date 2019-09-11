<template>
    <div class="goods-item">
        <img :src="img" alt="Some img">
        <div class="desc">
            <h3>{{ item.product_name }}</h3>
            <p>{{ item.price }}</p>
            <button class="bay-btn" @click="$root.addToCart(item)">Купить</button>
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
