<template>
  <router-link :to="`/MovieDetails/${id}`">
    <div class="card-body">
      <h2 class="card-title text-uppercase">{{ title }}</h2>
      <p class="card-text"></p>
    </div>

    <div v-if="$route.path == '/Top50Movies'">
      <span v-once>#{{ index + 1 }}</span>
    </div>

    <img
      class="card-img-top"
      v-bind:src="preUrl + poster_path"
      alt="moviePoster"
    />

    <p><span class="fw-bold">Sortie</span> : {{ release_date }}</p>
    <p>
      <span class="fw-bold">Note moyenne : </span>
      {{ vote_average }}
    </p>
    <p>
      <span class="fw-bold">Résumé : </span
      >{{ overview.substring(0, 200) + "..." }}
    </p>
  </router-link>
</template>

<script>
export default {
  name: "MovieCard",
  props: [
    "id",
    "index",
    "title",
    "release_date",
    "overview",
    "poster_path",
    "vote_average",
  ],

  data() {
    return {
      preUrl: "https://image.tmdb.org/t/p/original/",
    };
  },
};
</script>

<style scoped>
.card {
  width: 250px;
}

h2 {
  font-size: 1.5rem;
  height: 100px;
}

a {
  text-decoration: none;
  color: black;
}
</style>