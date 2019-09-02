import cart from './cartComponent'
import prod from './prodComponent'
import finder from './findComponent'

let app = new Vue ({
  el: '#app',
  data: {

  },
  components: {
    cart,
    prod,
    finder
  },
  methods: {
    fetchGoods(url) {
      return fetch (url) 
        .then (result => result.json ())
        .catch (error => {
          console.log (error)
        })
    },
    addToCart (product) {
      this.$root.$refs.cart.addGoods (product)
    }
  },
  mounted () {
  }
})

export default app
