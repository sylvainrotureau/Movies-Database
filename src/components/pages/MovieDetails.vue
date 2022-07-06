<template>
  <section id="movieDetail">
  <div class="mt-5" id="trailer" v-if="video[0]">
    <h2>{{ video[0].name }}</h2>


      <div class="container col col-xxl-8 px-4">
        <div class="row flex-lg-row g-5 p-5">
          <div class="col-sm-12 col-lg-6">
            <img
              class="card-img-top"
              v-bind:src="preUrl + movie.poster_path"
              alt="moviePoster"
            />
          </div>

                    
          <div class="col-sm-12 col-lg-6">
            <div class="row">
              <div class="col-12">
                <iframe class="w-100"
                  v-bind:src="'https://www.youtube.com/embed/' + video[0].key"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>

              <div class="col-12">
                <h1>{{ movie.title }}</h1>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">
                    <span class="fw-bold">Sortie : </span
                    >{{ movie.release_date }}
                  </li>
                  <li class="list-group-item">
                    <span class="fw-bold">Note moyenne : </span
                    >{{ movie.vote_average }}/10
                  </li>
                  <li class="list-group-item">
                    <span class="fw-bold">Titre original : </span
                    >{{ movie.original_title }}
                  </li>
                  <li class="list-group-item">
                    <span class="fw-bold">Langue originale : </span>
                    <span v-if="movie.original_language == 'en'">anglais</span>
                    <span v-else-if="movie.original_language == 'fr'"
                      >français</span
                    >
                    <span v-else>{{ movie.original_language }}</span>
                  </li>
                </ul>
                <p>{{ movie.overview }}</p>
              </div>
            </div>
          </div>
      </div>
    </div>
  </div>
  </section>
</template>

<script>
import axios from "axios";

export default {
  name: "MovieDetails",

  data() {
    return {
      id: this.$route.params.id,
      movie: [],
      video: [],
      preUrl: "https://image.tmdb.org/t/p/original/",
    };
  },

  created: function () {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/" +
          this.id +
          "?api_key=f59ed1baf836b3d5166c1566153e85ac&language=fr"
      )

      .then((res) => {
        this.movie = res.data;
        console.log(this.movie);
      });

    axios
      .get(
        "https://api.themoviedb.org/3/movie/" +
          this.id +
          "/videos?api_key=3ea8988340d4ed715d28b9978346c29e&language=fr"
      )

      .then((res) => {
        this.video = res.data.results;
        console.log(this.video);
      });
  },
};
</script>
