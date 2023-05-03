<template>
    <div class="navigation">
      <div class="logo_container">
        <h3 class="logo">LoGo</h3>
      </div>
     <div class="nav_links">
       <router-link to="/" class="nav_link" href="#">Home</router-link>
       <router-link to="/about" class="nav_link" href="#">About</router-link>
       <a class="nav_link" href="#">Contacts</a> 
     </div>
     <div class="signs_container">
       <router-link to="/login" class="nav_link" href="#">Login</router-link>
       <router-link to="/register" class="nav_link" href="#">Registration</router-link>
     </div>
    </div>
</template>

<script>
export default {
    name: 'this-Nav'
}
</script>

<style v>

.navigation {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
  padding: 0 100px;
  background-color: #fff;
}

.logo {
  font-size: 22px;
  font-family: Arial, Helvetica, sans-serif;
}

.signs_container,
.nav_links {
  display: flex;
  gap: 30px;
}

.nav_link {
  font-size: 16px;
  font-family: Arial, Helvetica, sans-serif;
  color: black;
  text-decoration: none;
}.nav_link:hover {
  text-decoration: underline;
}

</style>