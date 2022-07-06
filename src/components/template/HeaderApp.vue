<template>
  <header>
    <div class="container-fluid bg-secondary text-dark">
      <router-link
        
        v-for="randomFourElement in randomFourElements"
        v-bind:key="randomFourElement.id"
        :to="`/MovieDetails/${randomFourElement.id}`"
      >
        <img
          class="randomImg"
           v-bind:src="preUrl + randomFourElement.poster_path"
          alt="moviePoster"
        />
      </router-link>
    </div>

    <div id="mainTitle" class="container-fluid bg-secondary text-dark">
      VUE JS MOVIES
    </div>
    <div class="container-fluid bg-dark text-white">
      <div
        class="
          d-flex
          flex-wrap
          align-items-center
          justify-content-center justify-content-lg-start
        "
      >
        <a
          href="/"
          class="
            d-flex
            align-items-center
            mb-2 mb-lg-0
            text-white text-decoration-none
          "
        >
          <img id="logo" class="w-25" src="../../assets/logo.png" alt="" />
          VueJS Movies
        </a>

        <ul
          class="
            nav
            col-12 col-lg-auto
            me-lg-auto
            mb-2
            justify-content-center
            mb-md-0
          "
        >
          <li>
            <router-link to="/" class="nav-link px-2 text-white"
              >Accueil</router-link
            >
          </li>
          <li>
            <router-link to="/FrenchMovies" class="nav-link px-2 text-white"
              >Top films français</router-link
            >
          </li>
          <li>
            <router-link to="/AmericanMovies" class="nav-link px-2 text-white"
              >Top films américains</router-link
            >
          </li>
          <li>
            <router-link to="/LastMovies" class="nav-link px-2 text-white"
              >Derniers films</router-link
            >
          </li>
          <li>
            <router-link to="/Top50Movies" class="nav-link px-2 text-white"
              >Top 50 films</router-link
            >
          </li>
          <li>
            <router-link to="/SearchMovies" class="nav-link px-2 text-white"
              >Recherche de films</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
import axios from "axios";

function getMultipleRandom(arr, num) {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());

  return shuffled.slice(0, num);
}

// config du composant (option API)
export default {
  name: "HeaderApp",
  data() {
    return {
      randomFourElements: [],
      preUrl: "https://image.tmdb.org/t/p/original/",
    };
  },
  created: function () {
    axios
      .get(
        "https://api.themoviedb.org/3/discover/movie?api_key=f59ed1baf836b3d5166c1566153e85ac&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&year=2022"
      )

      .then((res) => {
        this.randomFourElements = getMultipleRandom(res.data.results, 4);
      });
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Bungee+Inline&display=swap");

.randomImg {
  width: 10% !important;
}

#mainTitle {
  font-family: "Bungee Inline", cursive;
  font-size: 4rem;
  letter-spacing: 2rem;
  background-color: lightgray !important;
}
</style>
