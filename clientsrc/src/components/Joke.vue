<template>
<div class='col-4'>
<div class="joke card my-2">
  <div class="card-body">
    <h5 class="card-title">{{jokeData.setup}}</h5>
    <p class="card-text" v-show="show">{{jokeData.punchline}}</p>
    <a class="btn btn-success" v-on:click="show=!show" v-show='!show'>Tell Me</a>
    <p><small><strong>created by </strong><a @click="setActiveUser(jokeData.creator)">{{jokeData.creator.name}}</a></small></P>
  </div>
</div>
  </div>
</template>


<script>
export default {
  name: 'joke',
  props: ['jokeData'],
  data(){
    return {
      show: false,
    }
  },
  computed:{},
  methods:{
    setActiveUser(creator) {
      this.$store.commit("setActiveProfile", creator)
      console.log("eh?", this.$store.state.activeProfile);
      this.$router.push({
        name: "ProfileDetails",
        params: {email: this.jokeData.creator.email}
      })
    }
  },
  components:{}
}
</script>


<style scoped>
</style>