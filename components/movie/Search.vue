<script setup lang="ts">
import { ref } from 'vue';
import type { Movie, OMDBResponse } from "~/components/movie/movies";
const searchQuery=ref('page');
const movies=ref<Movie[]>([]);
const loading=ref<boolean>(false);
const API_KEY = import.meta.env.VITE_OMDB_API_KEY;

const handleSearchQuery= async()=>{
 
  try {
    loading.value=true;
    const response: OMDBResponse = await $fetch(
      `http://www.omdbapi.com/?apikey=${API_KEY}&s=${searchQuery.value}`
    );

    if (response.Response === "True") {
      movies.value = response.Search;
    } else {
      console.error("Error fetching movies:", response.Error);
      movies.value = [];
    }
  } catch (error) {
    console.error("Network or API error:", error);
    movies.value = [];
  }
  finally{
    loading.value=false;
  }

}
onMounted(()=>{
    handleSearchQuery()
})

</script>

<template>
  <div>
    Page: movies
    <form @submit.prevent="handleSearchQuery">
    <input type="search" v-model="searchQuery" :disabled="loading" placeholder="search movies">
    <button >search</button>
  </form>
  <ul style="display: flex; flex-wrap: wrap; gap: 10px; list-style: none;">
    <!-- <li v-for="(movie) in movies" :key="movie.imdbID">
      <NuxtLink :to="{name:'movies-id',params:{id:movie.imdbID}}">
        <img :src="movie.Poster" :alt="movie.Title"/>
      </NuxtLink>
    </li> -->
    
        <MovieCard :movie="movie" v-for="(movie) in movies" :key="movie.imdbID"/>
      
  </ul>
  
  </div>
</template>

<style scoped></style>
