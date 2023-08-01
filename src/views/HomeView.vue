<script setup>
import { storeToRefs } from 'pinia'
import  Counter  from '../components/Counter.vue';
import { useAuthStore } from '../stores/auth';

const storeAuth = useAuthStore();
// const {isAuthenticated, user} = storeToRefs(storeAuth);


</script>

<template>
  <main>
    <div v-if="storeAuth.isAuthenticated">
      <h4>User name is : {{ storeAuth.fullname }}</h4>
    </div>
    <Counter />
  </main>

</template>

<!-- ====== using props ====== -->

<!-- <script setup>
import { useCounterStore } from '../stores/counter';

import  Counter  from '../components/Counter.vue';

const store = useCounterStore();
</script>

<template>
  <main>
    <h1>HomePage {{ store.count }}</h1>
    <Counter :count="store.count" />
  </main>

</template> -->
