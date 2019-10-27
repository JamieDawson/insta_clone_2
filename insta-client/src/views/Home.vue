<template>
  <main class="feed">
    <button @click="logout">Logout</button>
  </main>
</template>

<script>
export default {
  // computed: {
  //   feed () {
  //     return this.$store.state.feed;
  //   }
  // }
  methods: {
    logout() {
      this.$store.commit("logout");
    }
  }
};
</script>