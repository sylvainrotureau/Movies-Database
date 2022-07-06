<template>
  <section class="m-5" id="SearchMovies">
    <div class="col-lg-6 col-md-8 mx-auto">
<h1>Recherche de film</h1>
<input type="text" v-model="search" @keyup="getSearch(search)" />
  <SortButtons :movies = "SearchMovies" />
     </div>

 <div>
      <MoviesList :movies="SearchMovies" />
    </div>
      </section>

</template>

<script>
import axios from "axios";
import MoviesList from "../utils/MoviesList.vue";
import SortButtons from "../utils/SortButtons.vue";


export default {
  name: "SearchMovies",
  props: [
    "movies",
    ],
  components: {
    MoviesList,
    SortButtons,
  },

  data() {
    return {
      SearchMovies: [],
    };
  },

  methods: {
  getSearch(search) {
    axios
      .get(
        "https://api.themoviedb.org/3/search/movie?api_key=f59ed1baf836b3d5166c1566153e85ac&page=1&query=" + search
      )

.then((res) => {
        this.SearchMovies = res.data.results;

        
      })
  },
  
}
}
</script>

<style scoped></style>
