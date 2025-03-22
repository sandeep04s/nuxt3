<template>
  <div>
    <!-- <NuxtRouteAnnouncer />
    <NuxtWelcome />
    <h2>Hello</h2>
    <button @click="increment">Increment</button>
    <p>Count: {{ count }}</p> -->
    <nav style="display: flex; gap: 10px;">
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/movies">Movies</NuxtLink>
      <NuxtLink to="https://vueschool.io/">School Video</NuxtLink>
    </nav>
    <NuxtPage />
  </div>
</template>


<script setup lang="ts">
// import { ref } from 'vue';

// const count = ref(0);

// const increment = () => {
//   count.value++;
// };            
</script>

<style scoped>
</style>