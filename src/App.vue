<template>
  <header class="header">
    <Nav></Nav>
  </header>

  <main class="main_container">
    <router-view/>
  </main>
</template>

<script>
import Nav from '@/components/Nav.vue'

export default {
  name: 'App',
  components: {
    Nav
  }
}
</script>

<style scoped>

body {
  padding: 0;margin: 0;
  background-color: #f3f3f3;
}

.main_container {
  display: flex;
  justify-content: center;
  width: 100%;  
}

</style>



