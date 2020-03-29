<template>
  <div class="movie-detail" :style="movieStyle">
    <div v-if="movie" class="movie-content">
       <h2>{{movie.title}}</h2>
    </div> 
  </div>
</template>

<script>
import movieApi from './api/movieApi'

export default {
  name: 'MovieDetail',
  props: {
    id: String
  },
  data: function() {
    return {
      movie: null
    }
  },
  computed: {
  movieStyle: function () {
    return {
      'background-image': this.movie ? `url(https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${this.movie.backdrop_path})` : 'none'
    }
  }
  },
  mounted: function() {
      movieApi.get(`/movie/${this.id}?api_key=54b9ebd748467d0d87a18f75275790d8`)
    .then(response => this.movie = response.data);
  }
}
</script>

<style scoped>
  .movie-detail {
    padding: 0 10% 0 10%;
    border-bottom: 1px solid rgba(19.02%, 22.16%, 24.71%, 1.00);
    background-position: right -200px top;
    background-size: cover;
    background-repeat: no-repeat;
  }
</style>