<template>
<div class="about">
  <div class="text-center">
    <h1>Welcome {{ profile.name }}</h1>
    <img class="rounded" :src="profile.picture" alt="" />
    <p>{{ profile.email }}</p>
  </div>
  <div class="container-fluid vh-90">
    <div class="row justify-content-around">
    <Joke v-for='joke in jokes' :jokeData='joke' :key='joke._id'/>
    </div>
  </div>
  </div>
</template>

<script>
import Joke from "../components/Joke";

export default {
  name: "Profile",
  computed: {
    profile() {
      return this.$store.state.profile;
    }
  },
    mounted() {

  }
};
</script>

<style scoped>
img {
  max-width: 100px;
}
</style>
