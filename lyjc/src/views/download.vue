<!--  -->
<template>
  <div class="down">
    <top :topmsg="'资质下载'"></top>
    <div class="download"></div>
    <div class="river"></div>
    <ul class="href">
      <li>
        标题
        <span>下载附件</span>
      </li>
    </ul>
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
.down {
  width: 100%;
  height: 100%;
  .download {
    box-sizing: border-box;
    padding: 0 20px;
    margin-top: 20px;
    min-height: 900px;
    overflow: hidden;
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
      span {
        float: right;
        color: #ff4757;
      }
    }
  }
}
</style>
