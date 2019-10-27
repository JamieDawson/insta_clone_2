<template>
  <div class="home">
    <main class="feed">
      Hello, World!
      <button @click="logout">Logout</button>
    </main>
  </div>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$store.commit("logout");
    }
  }
};
</script>