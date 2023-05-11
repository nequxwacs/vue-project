<template>
  <form @submit.prevent="submit" class="form">
   <h2 class="title">Login</h2>
   <input v-model="data.username" type="text" class="inputs" placeholder="email">
   <input v-model="data.password" type="password" class="inputs" placeholder="password">
   <button class="signin_btn" type="submit">Login</button>
  </form>
</template>

<script lang="ts">
import axios from 'axios'
import { reactive } from 'vue';
import { useRouter } from 'vue-router';

export default {
  name: 'this-Login',
  setup() {
      const data = reactive({
        username: 'kminchelle',
        password: '0lelplR'
      })

      const router = useRouter()

      const submit = async () => {
          await fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
          })
          .then(res => res.json())
          .then(res => {
            let id = res.id
            let token = res.token

            axios.post("http://localhost/polls/public/api/logout", {
              headers: {
              Authorization: `Bearer ${token}`
              }
            })

            localStorage.setItem('id', id)
            localStorage.setItem('token', token)
          })

          await router.push('/')

        
      }

      

      return {
          data,
          submit
      }
  },
  
}
</script>

<style scoped>
.form {
display: flex;
flex-direction: column;
gap: 20px;
width: 200px;
height: 230px;
border: 1px solid grey;
background-color: #fff;
border-radius: 10px;
padding: 20px;
margin-top: 12%;
}

.title {
margin: 10px;
text-align: center;
font-family: Arial, Helvetica, sans-serif;
}

.inputs {
padding: 7px 10px;
border-radius: 5px;
border: 1px solid grey;
}

.signin_btn {
padding: 10px 20px;
border-radius: 5px;
border: 1px solid grey;
}
</style>

