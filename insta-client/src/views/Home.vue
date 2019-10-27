<template>
  <main class="feed">
    <article class="post" v-for="post in feed" :key="post.id">
      <header class="user-user">{{ post.display_name }}</header>
      <section class="post-picture">
        <img :src="post.image" :alt="post.desc" class="post-image" />
      </section>
      <footer class="post-desc">{{post.display_name + ': ' + post.desc}}</footer>
    </article>

    <button @click="logout">Logout</button>
  </main>
</template>

<script>
export default {
  computed: {
    feed() {
      return this.$store.state.feed;
    }
  },
  methods: {
    logout() {
      this.$store.commit("logout");
    }
  }
};
</script>