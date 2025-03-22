<script setup lang="ts">
const { teamSlug, userId } = useRoute().params;
</script>

<template>
  <div>
    Page: teams
    <pre>{{ teamSlug }}</pre>
    <pre>{{ userId }}</pre>
  </div>
</template> 

<style scoped>

</style>