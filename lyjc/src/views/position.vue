<!--  -->
<template>
  <div>
    <top :topmsg="'外检位置'"></top>
    <div class="contact"></div>
  </div>
</template>
<script>
import top from "@/components/top.vue";
export default {
  components: {
    top
  }
};
</script>
<style lang="less" scoped>
.contact {
  box-sizing: border-box;
  padding: 0 20px;
  margin-top: 20px;
}
</style>
