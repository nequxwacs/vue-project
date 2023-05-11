<template>
    <div class="product_container">
        <Card v-for="res in stock" 
        :key="res.stock" 
        :img="res.images[1]"
        :title="res.title"
        :price="res.price"
        :category="res.category"
        :description="res.description"
        :discount="res.discountPercentage"
        :stock="res.stock"
        />
    </div>
</template>

<script>
import axios from 'axios'
import Card from '@/components/Card.vue'

export default {
    name: 'this-Product',
    components: {
        Card
    },
    data() {
        return {
            stock: [],
            error: []
        }
    },
    created() {
        axios.get('https://dummyjson.com/products')
        .then(responce => {
            this.stock = responce.data.products
            console.log(responce);
        })
        .catch(e => {
            this.errors.push(e)
        })
    }
}
</script>

<style scoped>
.product_container {
    display: grid;
    grid-template-columns: 255px 255px 255px 255px; 
    justify-content: space-between;
    margin-top: 180px;
    width: 86%;
    gap: 30px;
}
</style>