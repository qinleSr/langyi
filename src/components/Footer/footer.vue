<template>
  <div class="footer_box">
    <div class="right_timeBox">
      阿斯顿
      <!-- {{dateTime}} -->
    </div>
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "footer",
  data() {
      
    return {};
  },
  created() {},
  mounted() {},
  methods: {},
};
</script>
<style  scoped>
.footer_box {
  display: flex;
  align-items: center;
  background-image: linear-gradient(to right, #615147, #988377);
}
</style>