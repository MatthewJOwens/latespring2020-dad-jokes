import Vue from "vue";
import VueRouter from "vue-router";
// @ts-ignore
import Home from "../views/Home.vue";
// @ts-ignore
import Profile from "../views/Profile.vue";
import { authGuard } from "@bcwdev/auth0-vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/jokes",
    name: "Jokes",
    // @ts-ignore
    component: () => import(/*webpackChunkName: "jokes" */'../views/Jokes.vue')
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
    beforeEnter: authGuard
  },
  {
    path: "/profile/:email",
    name: "ProfileDetails",
    // @ts-ignore
    component: () => import(/*webpackChunkName: "profile-details" */'../views/ProfileDetails.vue')
  }
];

const router = new VueRouter({
  routes
});

export default router;
