import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home/HomeView.vue";
import About from "../views/About/AboutView.vue";


const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: "home",
            component: Home
        },

        {
            path: '/about',
            name: "about",
            component: About
        },
    ],
})

export default router;