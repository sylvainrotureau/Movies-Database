<template>
  <section class="m-5" id="FrenchMovies">
    <div class="col-lg-6 col-md-8 mx-auto">
      <h1 class="fw-light">Films français</h1>
      <SortButtons :movies = "frenchMovies" />
    </div>

    <div>
      <MoviesList :movies="frenchMovies" />
    </div>
  </section>
</template>

<script>
import axios from "axios";
import MoviesList from "../utils/MoviesList.vue";
import SortButtons from "../utils/SortButtons.vue";

export default {
  name: "FrenchMovies",
  props: [
    "movies",
    ],
  components: {
    MoviesList,
    SortButtons,
  },

  data() {
    return {
      frenchMovies: [],
    };
  },

  created: function () {
    axios
      .get(
        "https://api.themoviedb.org/3/discover/movie?api_key=f59ed1baf836b3d5166c1566153e85ac&language=fr&sort_by=popularity.desc&include_adult=false&include_video=false&vote_count.gte=1000&page=1&with_original_language=fr&page=1"
      )

      .then((res) => {
        this.frenchMovies = res.data.results;

        axios
          .get(
            "https://api.themoviedb.org/3/discover/movie?api_key=f59ed1baf836b3d5166c1566153e85ac&language=fr&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&vote_count.gte=1000&with_original_language=fr&page=2"
          )

          .then( (response) => {
            let frenchTempMovies = this.frenchMovies;

            response.data.results.forEach(function (movie) {
              frenchTempMovies.push(movie);
            })
            this.frenchMovies = frenchTempMovies            
          }
          ) 
          .catch(error => console.log(error))
      })
  },
}
</script>
