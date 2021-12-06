<template>
  <div class="col-3 meme">
      <p>{{ meme.name }}</p>
      <img :src="meme.url" :alt="meme.name" class="fluid">
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
  props: {
    meme: Object,
  },
};
</script>

<style scoped>
    .meme {
        height: 300px;
        display: flex;
        flex-direction: column;
        align-items: center;
        border: 1px solid gray;
    }
    .meme img {
        max-height: 200px;
        max-width: 150px;
    }
</style>