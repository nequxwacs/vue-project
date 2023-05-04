<template>
    <p v-if="num == null" class="title">Вы еще не вошли в систему</p>
    <p v-else class="title">{{ massage }}</p>
</template>

<script lang="ts">
import { onMounted, ref } from 'vue';

export default {
    name: 'this-Home',
    setup() {
        const massage = ref('')
        const num = localStorage.getItem('id')

        

        onMounted( async() => {

            fetch('https://dummyjson.com/users/' + num)
            .then(res => res.json())
            .then(user => {
              let firstName = user.firstName
 
              massage.value = 'Welcome' + ' ' + firstName
            })
        })

        return {
            massage,
            num
        }
    }
}



</script>

<style scoped>
.title {
    font-size: 24px;
    font-weight: 5  00;
    font-family: Arial, Helvetica, sans-serif;
}
</style>

