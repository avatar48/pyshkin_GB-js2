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
    pushGoods(url, data) {
      return fetch (url, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify (data)
      }) 
        .then (result => result.json ())
        .catch (error => {
          console.log (error)
        })
    },
    putGoods(url, data) {
      return fetch (url, {
        method: 'PUT',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify (data)
      }) 
        .then (result => result.json ())
        .catch (error => {
          console.log (error)
        })
    },
    deleteGoods(url, data) {
      return fetch (url, {
        method: 'DELETE',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify (data)
      }) 
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
