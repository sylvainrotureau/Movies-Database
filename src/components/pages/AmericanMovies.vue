<template>
  <section class="m-5" id="AmericanMovies">
    <div class="col-lg-6 col-md-8 mx-auto">
      <h1 class="fw-light">Films américains</h1>
            <SortButtons :movies = "AmericanMovies" />
    </div>

    <div class="d-flex flex-wrap align-items-start">
      <MoviesList :movies="AmericanMovies" />
    </div>
  </section>
</template>

<script>
import axios from "axios";
import MoviesList from "../utils/MoviesList.vue";
import SortButtons from "../utils/SortButtons.vue";

export default {
  name: "AmericanMovies",
  props: [
    "movies",
    ],
  components: {
    MoviesList,
    SortButtons,
  },

  data() {
    return {
      AmericanMovies: [],
    };
  },

  created: function () {
    axios
      .get(
        "https://api.themoviedb.org/3/discover/movie?api_key=f59ed1baf836b3d5166c1566153e85ac&language=fr&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&certification_country=us&with_original_language=en&page1"
      )

      .then((res) => {
        this.AmericanMovies = res.data.results;

        axios
          .get(
            "https://api.themoviedb.org/3/discover/movie?api_key=f59ed1baf836b3d5166c1566153e85ac&language=fr&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&certification_country=us&with_original_language=en&page2"
          )

          .then((response) => {
            let AmericanTempMovies = this.AmericanMovies;

            response.data.results.forEach(function (movie) {
              AmericanTempMovies.push(movie);
            })
            this.AmericanMovies = AmericanTempMovies
          })
      })
  },
}
</script>
