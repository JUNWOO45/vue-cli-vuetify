<template>
  <v-expansion-panel>
    <v-expansion-panel-content
      v-for="(movie,i) in movies"
      :key="i"
    >
      <template v-slot:header>
        <div>{{movie.name}}</div>
      </template>
      <v-card>
        <v-img :src="movie.poster" max-width="800px">
        </v-img>
        <v-card-text>
          {{movie.description}}
          <v-dialog
            v-model="dialog"
            width="500"
          >
            <template v-slot:activator="{ on }">
              <v-btn
                color="red lighten-2"
                dark
                v-on="on"
              >
                이 영화 보고싶어요?
              </v-btn>
            </template>

            <v-card>
              <v-card-title
                class="headline grey lighten-2"
                primary-title
              >
                안돼요.
              </v-card-title>

              <v-card-text>
                여울이가 크면 같이 봐요!
              </v-card-text>

              <v-divider></v-divider>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  color="primary"
                  flat
                  @click="dialog = false"
                >
                  I accept
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
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
        movies: [],
        dialog: false
      }
    }
}
</script>