<template>
  <div class="d-flex justify-content-center gap-2 my-5">
    <button @click="sortByTitle" class="btn btn-dark">
      Trier par titre
    </button>
    <button @click="sortByDate" class="btn btn-dark">
      Trier par date de sortie
    </button>
    <button @click="sortByRank" class="btn btn-dark">
      Trier par note
    </button>
  </div>
</template>

<script>
export default {
  name: "SortButtons",
  props: ["movies"],
  data() {
    return {
      sortedByDate: false,
      sortedByRating: false,
      sortedByTitle: false,
    };
  },

  methods: {
    // Sort the Dates
    sortByDate() {
      const tempMovies = this.movies;

      if (!this.sortedByDate) {
        tempMovies.sort((a, b) => {
          if (a.release_date > b.release_date) {
            return 1;
          }
          if (a.release_date < b.release_date) {
            return -1;
          }
          return 0;
        });
        this.sortedByDate = true;
      } else {
        tempMovies.sort((a, b) => {
          if (a.release_date < b.release_date) {
            return 1;
          }
          if (a.release_date > b.release_date) {
            return -1;
          }
          return 0;
        });
        this.sortedByDate = false;
      }
    },

    // Sort the Rank
    sortByRank() {
      const tempMovies = this.movies;

      if (!this.sortedByRating) {
        tempMovies.sort((a, b) => {
          if (a.vote_average > b.vote_average) {
            return 1;
          }
          if (a.vote_average < b.vote_average) {
            return -1;
          }
          return 0;
        });
        this.sortedByRating = true;
      } else {
        tempMovies.sort((a, b) => {
          if (a.vote_average < b.vote_average) {
            return 1;
          }
          if (a.vote_average > b.vote_average) {
            return -1;
          }
          return 0;
        });
        this.sortedByRating = false;
      }
    },

    // Sort the Titles
    sortByTitle() {
      const tempMovies = this.movies;

      if (!this.sortedByTitle) {
        tempMovies.sort((a, b) => {
          if (a.title > b.title) {
            return 1;
          }
          if (a.title < b.title) {
            return -1;
          }
          return 0;
        });
        this.sortedByTitle = true;
      } else {
        tempMovies.sort((a, b) => {
          if (a.title < b.title) {
            return 1;
          }
          if (a.title > b.title) {
            return -1;
          }
          return 0;
        });
        this.sortedByTitle = false;
      }
    },
  },
};
</script>
