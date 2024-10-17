import { createRouter, createWebHistory } from "@ionic/vue-router";
import { RouteRecordRaw } from "vue-router";
import TabsMenu from "@/components/TabsMenu.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/",
    component: TabsMenu,
    children: [
      {
        path: "",
        redirect: "/home",
      },
      {
        path: "home",
        component: () => import("../views/HomePage.vue"),
      },
      {
        path: "explorar",
        component: () => import("@/views/ExplorePage.vue"),
      },
      {
        path: "carro",
        component: () => import("@/views/RentalCartPage.vue"),
      },
      {
        path: "miCuenta",
        component: () => import("@/views/MyAccount.vue"),
      },
      {
        path: "login",
        component: () => import("@/views/LoginPage.vue"),
      },
      {
        path: "movie/:id",
        component: () => import("@/views/MovieDetailPage.vue"),
      },
      {
        path: "registro",
        component: () => import("@/views/SignUpPage.vue"),
      },
      {
        path: "historial",
        component: () => import("@/views/HistoryRentPage.vue"),
      },
      {
        path: "configuracion",
        component: () => import("@/views/SettingsPage.vue"),
      },
      {
        path: "favoritos",
        component: () => import("@/views/FavoritesPage.vue"),
      },
      {
        path: "sobreNosotros",
        component: () => import("@/views/AboutPage.vue"),
      },
      {
        path: "contacto",
        component: () => import("@/views/ContactPage.vue"),
      },
      {
        path: "reparto/:id",
        component: () => import("@/views/CastPage.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
