<script setup lang="ts">
import type { Movie } from '~/pages/movies/movies';

defineProps<{ movie: Movie }>();
</script>

<template>
    <li>
        <NuxtLink :to="{ name: 'movies-id', params: { id: movie.imdbID } }">
            <img :src="movie.Poster" :alt="movie.Title" loading="lazy" />
        </NuxtLink>
    </li>
</template>
