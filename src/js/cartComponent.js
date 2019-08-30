const cartItem = {
    props: ['img', 'item'],
    template: `<div class="cart-item">
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
                        <button class="del-btn" @click="$root.$refs.cart.rmGood(item.product_name)">&times;</button>
                    </div>
                </div>`
}

const cart = {
    data () {
        return {
            imgCart: 'https://placehold.it/100x80',
            cartUrl: `/getBasket.json`,
            cartItems: [],
            isVisibleCart: false,
            API_URL: 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses'

        }
    },
    components: {
        'cart-item': cartItem
    },
    methods: {
        addGoods(good) { //Добавление
            this.cartItems.push(good);
        },
        listGoods() {
            return this.cartItems;   
        },
        rmGood (name) { //Удаление
            // console.log(name.product_name)
            if(this.__findByName(name) === -1){
                consile.log(`Невозможно удалить ${name}`);
            } else {
                this.cartItems.splice(this.__findByName(name), 1);
                return this.cartItems;
            }
        },
        __findByName(name) { //Поиск элемента в массиве
            let result = -1;
            this.cartItems.forEach((good, index) => {
                if (good.product_name == name) {
                  result = index;
              }
            });
            return result;
          }
    },
    mounted () {
        this.$parent.fetchGoods (this.API_URL + this.cartUrl)
        .then (data => {
           for (let el of data.contents) {
             this.cartItems.push (el)
            //  this.filtred.push (el)
           }
        })
    },
    template: `<div class="cart-temp">
                    <button @click="isVisibleCart = !isVisibleCart"  class="cart-button" type="button">Корзина</button>
                    <div class="cart-block" v-show="isVisibleCart">
                        <p v-if="!cartItems.length"> Cart is empty </p>
                        <cart-item v-for="product of cartItems"
                        :key="product.id_product"
                        :img="imgCart"
                        :item="product"></cart-item>
                    </div>
                </div>`
}

export default cart