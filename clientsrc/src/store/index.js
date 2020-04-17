import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";
import router from "../router";

Vue.use(Vuex);

let baseUrl = location.host.includes("localhost")
  ? "http://localhost:3000/"
  : "/";

let api = Axios.create({
  baseURL: baseUrl + "api",
  timeout: 3000,
  withCredentials: true
});

export default new Vuex.Store({
  state: {
    profile: {},
    activeProfile: {},
    profileJokes: [],
    jokes: []
  },
  mutations: {
    setProfile(state, profile) {
      state.profile = profile;
    },
    setActiveProfile(state, profile) {
      state.activeProfile = profile;      
    },
    setJokes(state, jokes) {
      state.jokes = jokes
    },

    setProfileJokes(state, jokes) {
      state.profileJokes = jokes
    }
  },
  actions: {
    setBearer({ }, bearer) {
      api.defaults.headers.authorization = bearer;
    },
    resetBearer() {
      api.defaults.headers.authorization = "";
    },
    async getProfile({ commit }) {
      try {
        let res = await api.get("profile");
        commit("setProfile", res.data);
      } catch (error) {
        console.error(error);
      }
    },

    async addJoke({ commit, dispatch }, newJoke) {
      try {
        let res = await api.post('jokes', newJoke)
        dispatch('getJokes')
      } catch (error) {
        console.error(error)
      }
    },
    async getJokes({ commit, dispatch }) {
      try {
        let res = await api.get('jokes')
        commit('setJokes', res.data)
      } catch (error) {
        console.error(error)
      }
    },
    async getJokesByEmail({ commit, dispatch }, email) {
      try {
        let res = await api.get('profile/' + email + "/jokes")
        commit('setProfileJokes', res.data)
        console.log(res.data);
        
      } catch (error) {
        console.error(error)
      }
    }
  }
});
