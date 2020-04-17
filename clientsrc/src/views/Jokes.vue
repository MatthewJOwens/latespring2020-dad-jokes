<template>
  <div class="jokes">
    <h1>THIS IS THE JOKES PAGES</h1>
    <CreateJoke v-if="$auth.isAuthenticated" />
    <small class="text-danger" v-else>You must log in to create a joke.</small>
    <div class="container-fluid vh-90">
    <div class="row justify-content-around">
    <Joke v-for='joke in jokes' :jokeData='joke' :key='joke._id'/>
    </div>
  </div>
  </div>
</template>


<script>
import CreateJoke from "../components/CreateJoke";
import Joke from "../components/Joke";
export default {
  name: "jokes",
  data() {
    return {};
  },
  mounted() {
    console.log(this.$auth);
    this.$store.dispatch("getJokes");
  },
  computed: {
    jokes() { return this.$store.state.jokes}
  },
  methods: {},
  components: {
  CreateJoke, 
  Joke
  }
  
};
</script>


<style scoped>
</style>