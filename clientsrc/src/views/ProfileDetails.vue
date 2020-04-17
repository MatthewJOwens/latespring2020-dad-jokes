<template>
<div class="profileDetails">
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
  name: 'profileDetails',

  data(){
    return {}
  },
  mounted() {
    this.$store.dispatch("getJokesByEmail", this.profile.email)
   
  }, 
  computed: {
    profile() {
      return this.$store.state.activeProfile;
    },
    jokes() { return this.$store.state.profileJokes}

  },
  methods:{},
  components:{
    Joke,
  },
  }
</script>


<style scoped>

</style>