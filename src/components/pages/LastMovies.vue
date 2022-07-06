<template>
  <section class="m-5" id="LastMovies">
    <div class="col-lg-6 col-md-8 mx-auto">
      <h1 class="fw-light">Films 2022</h1>
      <SortButtons :movies="LastMovies" />
    </div>
    <div class="d-flex flex-wrap align-items-start">
      <MoviesList :movies="LastMovies" />
    </div>
  </section>
</template>

<script>
import axios from "axios";
import MoviesList from "../utils/MoviesList.vue";
import SortButtons from "../utils/SortButtons.vue";

export default {
  name: "LastMovies",
  props: [
    "movies",
    ],
  components: {
    MoviesList,
    SortButtons,
  },

  data() {
    return {
      LastMovies: [],
    };
  },

  created: function () {
    axios
      .get(
        "https://api.themoviedb.org/3/discover/movie?api_key=f59ed1baf836b3d5166c1566153e85ac&language=fr&primary_release_year=2022&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_original_language=fr"
      )

      .then((res) => {
        this.LastMovies = res.data.results;
        console.log(this.LastMovies);
      });
  },
};
</script>
