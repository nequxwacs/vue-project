<template>
    <div></div>
</template>

<script lang="ts">
import { onMounted, ref } from 'vue';

export default {
    name: 'this-Ch',
    setup() {

        onMounted( async() => {

            fetch('https://dummyjson.com/users')
            .then(res => res.json())
            .then(console.log)
        })
    }
}
</script>