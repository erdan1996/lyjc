<!--  -->
<template>
  <div>
    <top :topmsg="'外检位置'"></top>
    <div class="position" style="white-space:pre-wrap" v-html="cont"></div>
  </div>
</template>
<script>
import top from "@/components/top.vue";
export default {
  components: {
    top
  },
  data() {
    return {
      cont: ""
    };
  },
  created() {
    this.down();
  },
  methods: {
    down() {
      this.$api.common.getposition().then(res => {
        this.cont = res.data.content;
      });
    }
  }
};
</script>
<style lang="less">
.position {
  box-sizing: border-box;
  padding: 0 20px;
  margin-top: 20px;
  display: block;
}
</style>
