<template>
  <!-- <v-carousel hide-controls>
    <v-carousel-item
      v-for="(movie,i) in movies"
      :key="i"
      :src="movie.poster"
    ></v-carousel-item>
  </v-carousel> -->
  <v-expansion-panel>
    <v-expansion-panel-content
      v-for="(movie,i) in movies"
      :key="i"
    >
      <template v-slot:header>
        <div>{{movie.name}}</div>
      </template>
      <v-card>
        <v-img :src="movie.poster">
        </v-img>
        <v-card-text>
          {{movie.description}}
        </v-card-text>
        
      </v-card>
    </v-expansion-panel-content>
  </v-expansion-panel>
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