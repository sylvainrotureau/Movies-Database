<template>
  <section class="m-5" id="Top50Movies">
    <div class="col-lg-6 col-md-8 mx-auto">
      <h1 class="fw-light">Top movies</h1>
            <SortButtons :movies = "Top50Movies" />
    </div>

    <div class="d-flex flex-wrap align-items-start">
      <MoviesList50 :movies="Top50Movies" />
    </div>
  </section>
</template>

<script>
import axios from "axios";
import MoviesList50 from "../utils/MoviesList50.vue";
import SortButtons from "../utils/SortButtons.vue";

export default {
  name: "Top50Movies",
  components: {
    MoviesList50,
    SortButtons,
  },

  data() {
    return {
      Top50Movies: [],
      preUrl: "https://image.tmdb.org/t/p/original/",
    };
  },

  created: function () {
    axios
      .get(
        "https://api.themoviedb.org/3/discover/movie?api_key=f59ed1baf836b3d5166c1566153e85ac&language=fr&sort_by=vote_average.desc&vote_count.gte=10000&include_adult=false&include_video=false&page=1"
      )

      .then((res1) => {
        let TopMovies20 = res1.data.results;

        axios
          .get(
            "https://api.themoviedb.org/3/discover/movie?api_key=f59ed1baf836b3d5166c1566153e85ac&language=fr&sort_by=vote_average.desc&vote_count.gte=10000&include_adult=false&include_video=false&page=2"
          )
          .then((res2) => {
            let TopMovies40 = TopMovies20.concat(res2.data.results);

            axios
              .get(
                "https://api.themoviedb.org/3/discover/movie?api_key=f59ed1baf836b3d5166c1566153e85ac&language=fr&sort_by=vote_average.desc&vote_count.gte=10000&include_adult=false&include_video=false&page=3"
              )
              .then((res3) => {
   

                 let TopMovies50 = TopMovies40.concat(res3.data.results);
                 TopMovies50.splice(50, 10);

                 this.Top50Movies = TopMovies50;

              });
          });
      });
  },
};
</script>

