<!--  -->
<template>
  <div class="question">
    <top :topmsg="'满意度问卷'"></top>
    <ul class="queul">
      <li class="queli">
        <h4>1、满意度调查问卷</h4>
        <van-radio-group v-model="radio">
          <van-radio v-model="checked" name="1">
            满意
            <img
              slot="icon"
              slot-scope="props"
              :src="props.checked ? icon.active : icon.normal"
            />
          </van-radio>
          <van-radio v-model="checked" name="2">
            非常满意
            <img
              slot="icon"
              slot-scope="props"
              :src="props.checked ? icon.active : icon.normal"
            />
          </van-radio>
          <van-radio v-model="checked" name="3">
            完美
            <img
              slot="icon"
              slot-scope="props"
              :src="props.checked ? icon.active : icon.normal"
            />
          </van-radio>
        </van-radio-group>
      </li>
      <li class="queli">
        <h4>2、满意度调查问卷</h4>
        <van-radio-group v-model="radio">
          <van-radio v-model="checked" name="4">
            满意
            <img
              slot="icon"
              slot-scope="props"
              :src="props.checked ? icon.active : icon.normal"
            />
          </van-radio>
          <van-radio v-model="checked" name="5">
            非常满意
            <img
              slot="icon"
              slot-scope="props"
              :src="props.checked ? icon.active : icon.normal"
            />
          </van-radio>
          <van-radio v-model="checked" name="6">
            完美
            <img
              slot="icon"
              slot-scope="props"
              :src="props.checked ? icon.active : icon.normal"
            />
          </van-radio>
        </van-radio-group>
      </li>
    </ul>
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
    return {
      radio: "1",
      checked: true,
      icon: {
        normal: require("@/assets/images/check.png"),
        active: require("@/assets/images/checked.png")
      }
    };
  }
};
</script>
<style lang="less" scoped>
.question {
  width: 100%;
  .queul {
    li {
      width: 100%;
      height: 319px;
      border-bottom: 1px solid #E6E7EB;
      box-sizing: border-box;
      padding: 20px 0 0px 20px;
      h4 {
        margin-bottom: 30px;
        font-weight: 400;
      }
    }
  }
  button {
    width: 100%;
    height: 88px;
    background: rgba(255, 99, 72, 1);
    color: #fff;
    line-height: 88px;
    text-align: center;
    margin-top: 520px;
  }
}
</style>
