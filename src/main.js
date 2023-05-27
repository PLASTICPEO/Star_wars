import { createApp } from "vue";
import App from "./App.vue";
import People from "./components/people/People.vue";
import Home from "./components/home/Home.vue";
import "../src/assets/css/style.css";
import { createRouter, createWebHistory } from "vue-router";
import Layout from "./components/layout/layout.vue";
import StarShip from "./components/starShip/StarShip.vue";

const routes = [
  {
    path: "/",
    component: Layout,
    children: [
      {
        path: "",
        component: Home,
      },
      {
        path: "/people",
        component: People,
      },
      {
        path: "/starship",
        component: StarShip,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.use(router);
app.mount("#app");
