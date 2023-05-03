<template>
    <p v-if="isElVisable" class="title">Вы еще не вошли в систему</p>
    <p v-else class="title">{{ massage }}</p>
</template>

<script lang="ts">
import { onMounted, ref } from 'vue';

export default {
    name: 'this-Home',
    setup() {
        const massage = ref('')

        

        onMounted( async() => {
            const num = localStorage.getItem('id')

            fetch('https://dummyjson.com/users/' + num)
            .then(res => res.json())
            .then(user => {
              let firstName = user.firstName
 
              massage.value = 'Welcome' + ' ' + firstName
            })
            // .then(console.log)
        })

        return {
            massage
        }
    },

    data: () => {
      return {
          isElVisable: false
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

