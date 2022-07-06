<template>
  <div class="container col col-xxl-8 px-4">
    <div class="row g-4 pt-3 align-items-start">
      <div

        class="card col-xs-3 col-md-4 col-lg-3 col-xxl-2"
      v-for="(movie, index) in movies" v-bind:key="movie.id"
      >

            <MovieCard
              :id="movie.id"
              :index="index"
              :title="movie.title"
              :release_date="movie.release_date"
              :overview="movie.overview"
              :poster_path="movie.poster_path"
              :vote_average="movie.vote_average"
            />

      </div>
    </div>
  </div>
</template>

<script>
import MovieCard from "../utils/MovieCard.vue";

export default {
  name: "MoviesList50",
  props: ["movies"],
  components: {
    MovieCard,
  },
};
</script>

<style scoped>

</style>