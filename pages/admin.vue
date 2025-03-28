<template lang="html">
    <p>
        Hello admin 
    </p>
</template>
<script setup>
definePageMeta({
    middleware:'auth'
})

</script>
