import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: "home",
            component: () => import('../views/Home/HomeView.vue'),
        },

        {
            path: '/user',
            name: "user",
            component: () => import('../views/Users/UserView.vue'),
        },

        {
            path: '/profile',
            name: "profile",
            component: () => import('../views/Profile/ProfileView.vue'),
        },
    ],
})

export default router;