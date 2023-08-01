<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { useAuthStore } from './stores/auth';

const authStore = useAuthStore();

function logout () {
  // update state
  authStore.$patch((state) => {
    (state.isAuthenticated = false),(state.user = {});
  });
}


function login () {
  authStore.$reset();
}

  // change state
  // authStore.$state = {isAuthenticated:false,user:{}};



// function login () {
//   authStore.$patch((state) => {
//     (state.isAuthenticated = true),
//     (state.user = {name: "Say Tong Updated",email: "saytong@prasac.com.kh",});
//   });
// }

</script>

<template>
  <header>
    <div class="wrapper">
     
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <button @click="logout" v-if="authStore.isAuthenticated">Logout</button>
        <button @click="login" v-else>Login</button>
    
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>

</style>
