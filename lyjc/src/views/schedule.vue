<!--  -->
<template>
  <div>
    <top :topmsg="'进度查询'"></top>
    <div class="contact">
      <h4>委托单号：812031367</h4>
      <ul class="topcontent">
        <li v-for="(item, index) in spans" :key="index">
          {{ item }}
        </li>
      </ul>
      <ul class="botcontent">
        <li v-for="(item, index) in lis" :key="index">
          项目名称需全部显示果超过宽度要换行显
        </li>
      </ul>
    </div>
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
      spans: ["登记号", "器具名称", "套数", "检验进度", "送检日期"],
      lis: [0, 1, 2, 3, 4]
    };
  }
};
</script>
<style lang="less" scoped>
.contact {
  box-sizing: border-box;
  margin-top: 20px;
  h4 {
    font-weight: 400;
    margin-bottom: 20px;
    margin-left: 20px;
  }
  .topcontent {
    display: flex;
    border: 1px solid rgba(230, 231, 235, 1);
    text-align: center;
    li {
      width: 151px;
      height: 99px;
      border-right: 1px solid rgba(230, 231, 235, 1);
      text-align: center;
      line-height: 99px;
      font-size: 24px;
      box-sizing: border-box;
      overflow: hidden;
      &:last-child {
        border-right: none;
      }
    }
  }
  .botcontent {
    display: flex;
    border: 1px solid rgba(230, 231, 235, 1);
    text-align: center;
    li {
      box-sizing: border-box;
      padding: 10px;
      overflow: hidden;
      height: 140px;
      font-size: 24px;
      // line-height: 140px;
      border-right: 1px solid rgba(230, 231, 235, 1);
      &:last-child {
        border: none;
      }
    }
  }
}
</style>
