<template>
  <div class="movie" @click="onMovieClick">
    <img :src="baseImage + movie.poster_path" />
    <div class="movie-content">
        <h4>{{ movie.title }}</h4>
        <p>{{ releaseDate(movie) }}</p>  
    </div>
  </div>
</template>

<script>
import moment from 'moment';

export default {
  name: 'MovieList',
  props: {
    movie: Object
  },
  data: function() {
      return {
          baseImage: 'http://image.tmdb.org/t/p/w185_and_h278_bestv2'
      }
  },
  methods: {
      releaseDate(movie) {
          return moment(movie.release_date).format('LL');
      },
      onMovieClick() {
          this.$router.push(`/movie/${this.movie.id}`)
      }
  }
}
</script>

<style scoped>
 .movie {
    margin-left: 15px;
    cursor: pointer;
 }

 .movie-content {
     padding: 26px 10px 12px 10px;
 }

 .movie-content p {
     color: rgba(0,0,0,0.6);
 }

 .movie-content h4, .movie-content p {
     margin: 0;
 }

 .movie img {
     border-radius: 10px;
 }
</style>