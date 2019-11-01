<template>
  <main class="view post">
    <section class="stream">
      <video ref="video" id="video" width="100%" height="300" autoplay v-if="!captured"></video>
    </section>
    <section class="capture">
      <canvas ref="canvas" id="canvas" width="100%" height="300" v-if="captured"></canvas>
    </section>
  </main>
</template>

<script>
export default {
  data() {
    return {
      video: {},
      captured: false
    };
  },
  methods: {
    capture() {}
  },
  mounted() {
    this.video = this.$refs.video; //links to vide ref up above.
    this.video.width = window.innerWidth;
    this.video.height = window.innerHeight - 80;

    if (navigator.mediaDevices && navigator.getUserMedia) {
      navigator.mediaDevices
        .getUserMedia({
          video: true
        })
        .then(stream => {
          this.video.srcObject = stream;
          this.video.play();
        })
        .catch(err => {
          console.error(err);
        });
    }
  }
};
</script>

<style>
</style>