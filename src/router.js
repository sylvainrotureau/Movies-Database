import { createWebHistory, createRouter } from "vue-router";

import App from "./App.vue";
import AmericanMovies from "./components/pages/AmericanMovies.vue";
import FrenchMovies from "./components/pages/FrenchMovies.vue";
import LastMovies from "./components/pages/LastMovies.vue";
import SearchMovies from "./components/pages/SearchMovies.vue";
import Top50Movies from "./components/pages/Top50Movies.vue";
import MovieDetails from "./components/pages/MovieDetails.vue";

const routes = [
    {
        path: '/',
        component: App
    },
    {
        path: '/AmericanMovies',
        component: AmericanMovies
    },
    {
        path: '/FrenchMovies',
        component: FrenchMovies
    },
    {
        path: '/LastMovies',
        component: LastMovies
    },
    {
        path: '/SearchMovies',
        component: SearchMovies
    },
    {
        path: '/Top50Movies',
        component: Top50Movies
    },
    {
        path: '/MovieDetails/:id',
        component: MovieDetails
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;
