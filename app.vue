<template>
  <div>
    <!-- <NuxtRouteAnnouncer />
    <NuxtWelcome />
    <h2>Hello</h2>
    <button @click="increment">Increment</button>
    <p>Count: {{ count }}</p> -->
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>


<script setup lang="ts">
// import { ref } from 'vue';

// const count = ref(0);

// const increment = () => {
//   count.value++;
// };            
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? titleChunk : 'My movie Site';
  }
})
</script>

<style scoped></style>