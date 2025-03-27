<script setup lang="ts">
import MovieCard from '~/components/movie/MovieCard.vue';
import type { movieData } from './movies';

const id = useRoute().params.id as string;
const API_KEY = import.meta.env.VITE_OMDB_API_KEY;

const { data: movieDetails, status, error } =await useFetch<movieData>(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`, {
  key: `/movies/${id}`,
  pick: ['Title', 'imdbID', 'Poster'],
  onResponse({ request, response }) {
    if (response._data.Error) {
      showError({ statusCode: 404, statusMessage: 'Page not found !!' })
    }

  }
})


// const { data: movieDetails, status, error, refresh, clear } = useAsyncData<movieData>(`/movies/${id}`, () => {
//   return $fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`);
// // }, {
// //   transform(movieDetails) {
// //     return {
// //       Plot: movieDetails.Plot,
// //       Title: movieDetails.Title,
// //       Year: movieDetails.Year,
// //       imdbID: movieDetails.Year,
// //       Type: movieDetails.Type,
// //       Poster: movieDetails.Poster
// //     }
// //   }
// },{
//    pick:['Title','imdbID','Poster'],
//   // transform(data){
//   //   return {
//   //     Poster:data.Poster,
//   //     imdbID:data.imdbID,
//   //     Title:data.Title
//   //   }
//   // }
// })

</script>

<template>

  <div>
    <h2>Movie Details</h2>

    <div v-if="status === 'pending'">Loading...</div>
    <div v-else-if="error">Error fetching movie data: {{ error.statusMessage }}</div>
    <MovieCard v-else-if="movieDetails" :movie="movieDetails" />
  </div>


</template>

<style scoped></style>