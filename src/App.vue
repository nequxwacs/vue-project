<template>
  <header class="header">
    <Nav></Nav>
  </header>

  <main class="select">
    <div class="select__container">
      <router-view/>
    </div>
  </main>

  <footer class="footer">
    <Footer></Footer>
  </footer>
</template>

<script>
import Nav from '@/components/Nav.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'App',
  components: {
    Nav,
    Footer
  }
}
</script>

<style>

@font-face {
  font-family: 'Montserrat';
  src: url('./assets/fonts/static/Montserrat-Regular.ttf');
  font-weight: 400;
}

@font-face {
  font-family: 'Montserrat';
  src: url('./assets/fonts/static/Montserrat-Medium.ttf');
  font-weight: 600;
}

@font-face {
  font-family: 'Montserrat';
  src: url('./assets/fonts/static/Montserrat-SemiBold.ttf');
  font-weight: 700;
}

body {
  width: 100%;
  padding: 0;
  margin: 0;
  background-color: rgb(250, 250, 250);
}

.header {
  width: 100%;
}

.select {
  display: flex;
  justify-content: center;
  width: 100%;
}

.select__container {
  /* display: flex;
  justify-content: center; */
}

.footer {
  margin-top: 200px;
}

</style>



