import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Store from "@/views/Store.vue";
import Angebote from "@/views/Angebote.vue";
import SpielView from "@/views/SpielView.vue";
import Deal from "@/views/Deal.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/Stores',
      name: 'Alle Stores anzeigen',
      component: Store
    },
    {
      path: '/Angebote',
      name: 'Gefundene Angebote anzeigen',
      component: Angebote,
      props: true,
    },
    {
      path: '/Spiele',
      name: 'Gefundene Spiele anzeigen',
      component: SpielView,
    },
    {
      path: '/Deals',
      name: 'Einen Deal anzeigen',
      component: Deal,
    }
  ]
})

export default router