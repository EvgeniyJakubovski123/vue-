import { createRouter, createWebHistory } from 'vue-router'
import HomePage from "../views/HomePage.vue";
import RandomQuote from "../views/RandomQuote.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
      {
          path: '/',
          name: "quotes",
          component: HomePage
      },
      {
          path: "/random",
          name: "random",
          component: RandomQuote
      }
  ],
})

export default router
