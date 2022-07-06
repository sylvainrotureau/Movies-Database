<template>
  <div id="container-body" v-cloak>
    <div id="container-main">
      <HeaderApp />
      <div v-if="$route.path == '/'">
        <section class="m-5" id="LastMovies">
          <div class="col-lg-6 col-md-8 mx-auto">
            <h1 class="fw-light">Vos films préférés sont sur VueJS Movies !</h1>
            <SortButtons :movies="movies" />
          </div>

          <MoviesList :movies="movies" />
        </section>
      </div>
      <div v-else>
        <router-view :key="$route.fullPath"></router-view>
      </div>

      <FooterApp />
    </div>
  </div>
</template>

<script>
import HeaderApp from "./components/template/HeaderApp.vue";
import axios from "axios";
import MoviesList from "./components/utils/MoviesList.vue";
import FooterApp from "./components/template/FooterApp.vue";
import SortButtons from "./components/utils/SortButtons.vue";

export default {
  name: "App",
  components: {
    HeaderApp,
    MoviesList,
    FooterApp,
    SortButtons,
  },
  data() {
    return {
      movies: [],
      preUrl: "https://image.tmdb.org/t/p/original/",
    };
  },
  created: function () {
    axios
      .get(
        "https://api.themoviedb.org/3/discover/movie?api_key=f59ed1baf836b3d5166c1566153e85ac&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&year=2022"
      )

      .then((res) => {
        this.movies = res.data.results;
      });
  },
};
</script>

<style>
[v-cloak] {
  display: none;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
