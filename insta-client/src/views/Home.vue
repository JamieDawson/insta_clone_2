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
      localStorage.removeItem("jwt");
      this.$router.push("/login");
    }
  }
};
</script>