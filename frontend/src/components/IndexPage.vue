<template>
  <v-carousel hide-controls>
    <v-carousel-item
      v-for="(movie,i) in movies"
      :key="i"
      :src="movie.poster"
    ></v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  created() {
    this.$http.get('/api/movies')
    .then(res => {
      this.movies = res.data
    })
  },
  data () {
      return {
        movies: []
      }
    }
}
</script>