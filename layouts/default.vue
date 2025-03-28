<script setup>

const isLoggedIn = userIsLoggedIn()
</script>
<template>
  <nav style="display: flex; gap: 10px;">
    <NuxtLink to="/">Home</NuxtLink>
    <NuxtLink to="/movies">Movies</NuxtLink>
    <NuxtLink to="https://vueschool.io/">School Video</NuxtLink>
    <NuxtLink to="/login" v-if="!isLoggedIn">Login{{ isLoggedIn }}</NuxtLink>
    <a href="#" v-else @click.prevent="isLoggedIn = false">Logout</a>
  </nav>
  <slot></slot>
</template>