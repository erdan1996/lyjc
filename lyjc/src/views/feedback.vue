<!--  -->
<template>
  <div class="feedback">
    <top></top>
    <div class="content">
      <div class="bt">
        <img src="@/assets/images/star.png" alt="" />
        请您留下宝贵的意见(必填)：
      </div>
      <input type="textarea" class="ta" />
      <h4>单位名称</h4>
      <input type="text" />
      <h4>联系人</h4>
      <input type="text" />
      <h4>手机号码</h4>
      <input type="number" />
    </div>
    <button>提交</button>
  </div>
</template>
<script>
import top from "@/components/top.vue";
export default {
  components: {
    top
  },
  data() {
    return {};
  }
};
</script>
<style lang="less" scoped>
.feedback {
  box-sizing: border-box;
  // padding: 0 20px;
  .content {
    box-sizing: border-box;
    padding: 0 20px;
  }
  h4 {
    font-weight: 400;
  }
  input {
    width: 710px;
    height: 88px;
    background: rgba(240, 241, 245, 1);
    border-radius: 12px;
    margin-bottom: 48px;
    margin-top: 20px;
    box-sizing: border-box;
    padding: 0 30px;
  }
  .ta {
    width: 710px;
    height: 355px;
    background: rgba(240, 241, 245, 1);
    border: 1px solid rgba(230, 231, 235, 1);
    border-radius: 12px;
  }
  button {
    width: 750px;
    height: 88px;
    background: rgba(255, 99, 72, 1);
    color: #fff;
    line-height: 88px;
    text-align: center;
    margin-top: 170px;
  }
}
</style>
