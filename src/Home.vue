<template>
  <div id="home">
    <MovieList :movies="movies"/>
  </div>
</template>

<script>
import MovieList from './components/MovieList.vue'
import movieApi from './api/movieApi'

export default {
  name: 'Home',
  components: {
    MovieList
  },
  data: function () {
    return {
      movies: [],
      language: 'en-US'
    }
  },
  mounted: function() {
    movieApi.get('/movie/popular?api_key=54b9ebd748467d0d87a18f75275790d8&language=' + this.language)
    .then(response => this.movies = response.data.results.filter(movie => movie.poster_path !== null));
  }
}
</script>
