<template>
    <div class="navigation">
     <div class="nav_links">
       <router-link to="/" class="nav_link" href="#">Home</router-link>
       <router-link to="/product" class="nav_link" href="#">Products</router-link>
     </div>
     <div class="signs_container">
      <div class="reg_login_container" v-if="num == null">
       <router-link to="/login" class="nav_link" href="#">Login</router-link>
       <router-link to="/register" class="nav_link" href="#">Registration</router-link>
      </div>
      <div v-else  class="logo_container">
        <p class="name">{{ massage }}</p>
      </div> 
     </div>
    </div>
</template>

<script>
import { onMounted, ref } from 'vue';

export default {
    name: 'this-Nav',

    setup() {
        const massage = ref('')
        const num = localStorage.getItem('id')

        console.log(massage);

        onMounted( async() => {

            fetch('https://dummyjson.com/users/' + num)
            .then(res => res.json())
            .then(user => {
              let firstName = user.firstName
 
              massage.value = firstName
            })
        })

        return {
            massage,
            num
        }
    },

    setup2() {
      const num = localStorage.getItem('id')
      const token = localStorage.getItem('token')

      return {
        num,
        token
      }
    },
}
</script>

<style scoped>

.navigation {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 87%;
  height: 70px;
  padding: 0 100px;
  background-color: #fff;
  box-shadow: 0px 4px 16px rgba(17, 34, 17, 0.05);
  position: fixed;
}
.userName {
  font-size: 16px;
  font-family: 'Montserrat';
  font-weight: 500;
}.userName:hover {
  cursor: pointer;
}
.name {
  font-size: 16px;
  font-family: 'Montserrat';
  font-weight: 600;
  transition: .2s;

}.name:hover {
  cursor: pointer;
  color: rgb(9, 110, 0);
  transition: .2s;
}

.reg_login_container,
.nav_links {
  display: flex;
  gap: 30px;
}

.nav_link {
  padding: 4px 0;
  font-size: 16px;
  
  color: black;
  text-decoration: none;
  font-family: 'Montserrat';
  font-weight: 600;
  border-bottom: 3px solid transparent;
  transition: 0.1s;
}.nav_link:hover {
  border-bottom: 3px solid #0eaa00;
  transition: 0.1s;
}

</style>