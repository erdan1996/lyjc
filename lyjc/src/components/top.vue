<!--  -->
<template>
  <div class="top">
    <div class="img" v-show="show" @click="back">
      <img src="../assets/images/left.png" alt="" />
    </div>
    <h3>{{ topmsg }}</h3>
  </div>
</template>
<script>
export default {
  name: "top",
  props: {
    topmsg: {
      type: String,
      default: "意见反馈"
    }
  },
  data() {
    return {};
  },
  computed: {
    show() {
      return this.$route.path === "/schedule" ? true : false
    }
  },
  methods: {
    back() {
      this.$router.push({ path: '/' })
    }
  }
};
</script>
<style lang="less" scoped>
.top {
  height: 88px;
  line-height: 88px;
  display: flex;
  box-sizing: border-box;
  padding-left: 20px;
  .img {
    margin-right: 41px;
  }
  h3 {
    font-weight: 400;
    color: #2f3542;
  }
}
</style>
