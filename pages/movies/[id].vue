<script setup lang="ts">
const { id } = useRoute().params;
</script>

<template>
  <div>
    Page: movies
    <pre>{{ id }}</pre>
  </div>
</template>

<style scoped>

</style>