const finder = {
    data () {
        return {
            prodItems: [],
            findText: ''
        }

    },
    components: {

    },
    methods: {
        filterGoods () {
            const regexp = new RegExp(this.findText, 'i');
            this.$root.$refs.prod.filtredItems = this.$root.$refs.prod.prodItems.filter(product => regexp.test(product.product_name));
          },
    },
    mounted () {

    },
    template: `<form action="#" class="search-form">
                    <input v-model.lazy="findText" type="text" class="search-field">
                    <button @click="filterGoods ()" class="btn-search" type="submit">
                        <i class="fas fa-search"></i>
                    </button>
               </form>`
}

export default finder