const prodItem = {
    props: ['img', 'item'],
    template: `<div class="goods-item">
                    <img :src="img" alt="Some img">
                    <div class="desc">
                        <h3>{{ item.product_name }}</h3>
                        <p>{{ item.price }}</p>
                        <button class="bay-btn" @click="$root.addToCart(item)">Купить</button>
                    </div>   
                </div>`
}

const prod = {
    data () {
        return {
            imgCatalog: 'https://placehold.it/200x150',
            catalogUrl: `/catalogData.json`,
            prodItems: [],
            filtredItems: [],
            API_URL: 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses'
        }

    },
    components: {
        'prod-item': prodItem
    },
    methods: {

    },
    mounted () {
        this.$parent.fetchGoods (`/api/products`)
        .then (data => {
           for (let el of data) {
             this.prodItems.push (el)
             this.filtredItems.push (el)
           }
        })
    },
    template: `<div class="prod-temp">
                        <prod-item v-for="product of filtredItems"
                        :key="product.id_product"
                        :img="imgCatalog"
                        :item="product"></prod-item>
                </div>`
}
export default prod