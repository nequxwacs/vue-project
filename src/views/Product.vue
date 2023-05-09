<template>
    <div class="product_container">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
    </div>
</template>

<script>
import Card from '@/components/Card.vue'

export default {
    name: 'this-Product',
    components: {
        Card
    }
}
</script>

<style scoped>
.product_container {
    display: grid;
    grid-template-columns: 270px 270px 270px 270px; 
    justify-content: space-between;
    margin-top: 140px;
    width: 86%;
}
</style>