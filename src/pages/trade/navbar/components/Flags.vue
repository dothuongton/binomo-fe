<template>
  <div class="flag">
    <img :src="getImgUrl(code)" v-bind:alt="code" />
  </div>
</template>
<script>
export default {
  name: "Flags",
  props: {
    code: {
      type: String,
    },
  },
  methods: {
    getImgUrl(code) {
      var images = require.context("@/assets/images/flags", false, /\.svg$/);
      return images("./" + code + ".svg");
    },
  },
};
</script>
<style lang="scss" scoped>
.flag {
  margin: 5px;
  height: 10px;
  width: 10px;
  object-fit: cover;
  display: flex;
}
</style>
