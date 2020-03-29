<template>
  <div class="movies">
    <MovieItem v-for="movie in movies" :key="movie.id" :movie="movie" />  
  </div>
</template>

<script>
import MovieItem from './MovieItem';

export default {
  name: 'MovieList',
  components: {
    MovieItem
  },
  props: {
    movies: Array
  }
}
</script>

<style scoped>
 .movies {
    display: flex;
    overflow-y: auto;
 }
</style>