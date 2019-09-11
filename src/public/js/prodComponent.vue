<template>
    <div class="prod-temp">
        <prod-item v-for="product of filtredItems"
        :key="product.id_product"
        :img="imgCatalog"
        :item="product"></prod-item>
    </div>
</template>

<script>
import prodItem from './prodItem.vue'
export default {
    data () {
        return {
            imgCatalog: 'https://placehold.it/200x150',
            catalogUrl: `/catalogData.json`,
            prodItems: [],
            filtredItems: [],
        }
    },    
    components: {
        'prod-item': prodItem
    },
    mounted () {
        this.$parent.fetchGoods (`/api/products`)
        .then (data => {
           for (let el of data) {
             this.prodItems.push (el)
             this.filtredItems.push (el)
           }
        })
    }
}
</script>
