<template>
    <div id="app">
        <header>
            <div class="logo">E-shop</div>
            <div class="cart">
                <finder ref="finder"></finder>
                <cart ref="cart"></cart>
            </div>
        </header>
        <main>
            <div class="goods-list">
                <prod ref="prod"></prod>
                <error ref="error"></error>
            </div>
        </main>
    </div>
</template>

<script>
import cart from './cartComponent.vue'
import prod from './prodComponent.vue'
import finder from './findComponent.vue'
import error from './errorComponent.vue'

export default {
    data () {
        return {}
    },
    components: {
        cart,
        prod,
        finder,
        error
    },
    methods: {
        fetchGoods(url) {
        return fetch (url) 
            .then (result => result.json ())
            .catch (error => {
            this.$refs.error.setError (error )
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
            this.$refs.error.setError (error )
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
            this.$refs.error.setError (error )
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
            this.$refs.error.setError (error )
            })
        },
        addToCart (product) {
        this.$root.$refs.cart.addGoods (product)
        }
    },
    mounted () {
    }
}
</script>


<style>
body{
    font-family: 'SF Pro Display', sans-serif;
}
header{
    display: flex;
    background-color: #2f2a2d;
    justify-content: space-between;
    color: #fafafa;
    padding: 30px 80px;
}
button:focus{
    outline: none;
}
.logo{

    text-transform: uppercase;
    font-weight: bold;
}

.cart-button{
    background-color: #fafafa;
    padding: 10px 20px;
    border: 1px solid transparent;
    color: #2f2a2d;
    border-radius: 5px;
    transition: all ease-in-out .4s;
    cursor: pointer;
}


.cart-button:hover{
    background-color: transparent;
    border-color: #fafafa;
    color: #fafafa;
}

.cart-button, .logo{
    align-self: center;
}

.goods-list{
    column-gap: 30px;
    display: grid;
    grid-template-columns: repeat(auto-fit, 200px);
    grid-template-rows: 1fr;
    padding: 40px 80px;
    justify-content: space-between;
}

.goods-item{
    display: flex;
    flex-direction: column;
    width: 200px;
    border-radius: 5px;
    overflow: hidden;
    margin: 20px 0;
}

img {
    max-width: 100%;
    height: auto
}

.desc {
    border: 1px solid #c0c0c040;
    padding: 15px
}
p {
    margin: 0 0 5px 0;
}

.btn-search {
    background-color: transparent;
    border: none;
    color: #fafafa;
    font-size: 1.2em;
    position: absolute;
    bottom: 5px;
    right: 0;
}

.search-form{
    position: relative;
    margin-right: 50px;
    display: inline-block;
}
.search-field:focus{
    outline: none;
}
.search-field {
    box-sizing: border-box;
    width: 200px;
    color: #fafafa;
    padding: 10px;
    background-color: transparent;
    border: none;
    border-bottom: 2px solid #fafafa;
}

.cart_header{
    display: flex;
    background-color: #2f2a2d;
    justify-content: space-between;
    color: #fafafa;
    padding: 7px 80px;

}
.cart-temp {
  display: inline-block;

}
.cart {
    position: relative;
  }
  
  #cat_window {
    background-color: #ffffff;
    margin: 5% auto;
    border: 1px solid #888;
    width: 400px;
    overflow: auto;
    height: 80%;
    border: 1px solid #c0c0c040;
    border-radius: 5px;
  }
  
  #cart_table {
    position: relative;
    top: 10%;
    left: 20%;
    border-collapse: collapse;
    color: #686461;
    border: 1px solid #888;
  }
  
  #cart_table caption {
    padding: 10px;
    color: white;
    background: #2f2a2d;
    font-size: 18px;
    text-align: left;
    font-weight: bold;
  }
  
  #cart_table th, #total {
    border-bottom: 3px solid #B9B29F;
    padding: 10px;
    text-align: left;
  }
  
  #cart_table td{
    padding: 10px;
  }
  #cart_table tr:nth-child(odd) {
    background: white;
  }
  #cart_table tr:nth-child(even) {
    background: radial-gradient(ellipse at center, rgba(255,255,255,1) 0%, rgba(246,246,246,1) 47%, rgba(237,237,237,1) 100%);
  }

  .btn-close {
    background-color: transparent;
    border: none;
    color: #fafafa;
    font-size: 1.2em;
    position: relative;
    right: -118%;
  }

  .invisible{
    display: none;
}

.cart-block{
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.62);
  border-radius: 5px;
  box-sizing: border-box;
  right: 0;
  top: 130%;
  position: absolute;
  background-color: white;
  padding: 20px;
  color: black;
  width: 300px;
}

.cart-block:before{
  content: '';
  width: 0;
  height: 0;
  position: absolute;
  top: -10px;
  right: 35px;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 10px solid white;
}

.cart-item {
  display: flex;
  justify-content: space-between;
}
.cart-item:not(:last-child){
  margin-bottom: 20px;
}
.product-bio{
  display: flex;
}
.cart-item img{
  align-self: flex-start;
  margin-right: 15px;
}
</style>