<!--  -->
<template>
  <div class="down">
    <top :topmsg="'资质下载'"></top>
    <div class="download" v-html="result.content"></div>
    <div class="river"></div>
    <ul class="href">
      <li v-for="(item, index) in result.list" :key="index">
        {{ item.name }}
        <a :href="item.url">下载附件</a>
      </li>
    </ul>
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
      result: {},
      list: {}
    };
  },
  created() {
    this.down();
  },
  methods: {
    down() {
      this.$api.common.getdown().then(res => {
        this.result = res.data;
      });
    }
  }
};
</script>
<style lang="less" scoped>
.down {
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
  .download {
    box-sizing: border-box;
    padding: 0 20px;
    margin-top: 20px;
    min-height: 900px;
    // overflow: hidden;
  }
  .river {
    width: 100%;
    height: 20px;
    background-color: #e6e7eb;
  }
  .href {
    li {
      height: 109px;
      width: 100%;
      border-bottom: 1px solid #e6e7eb;
      line-height: 109px;
      box-sizing: border-box;
      padding: 0 40px;
      a {
        float: right;
        color: #ff4757;
      }
    }
  }
}
</style>
