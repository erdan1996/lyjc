<!--  -->
<template>
<!-- eslint-disable -->
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
    <button class="submit">提交</button>
    <div class="dialog" v-show="show">
      <div class="form">
        <p>
          感谢您完成问卷,请填写以下资料， 将有机会获取我们送出的小礼品。           
        </p>
        <input type="text" placeholder="单位  名称"/>
        <input type="text" placeholder="您的  姓名"/>
        <input type="number" placeholder="您的  电话"/>
        <button>
          好的
        </button>
      </div>
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
      radio: "1",
      checked: true,
      icon: {
        normal: require("@/assets/images/check.png"),
        active: require("@/assets/images/checked.png")
      },
      show: false
    };
  },
  created() {
    // this.wenjuan()
  },
  methods: {
    wenjuan() {
      this.$api.common.login().then(res => {
        console.log(res);
      });
    }
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
      border-bottom: 1px solid #e6e7eb;
      box-sizing: border-box;
      padding: 20px 0 0px 20px;
      h4 {
        margin-bottom: 30px;
        font-weight: 400;
      }
    }
  }
  .submit {
    width: 100%;
    height: 88px;
    background: rgba(255, 99, 72, 1);
    color: #fff;
    line-height: 88px;
    text-align: center;
    margin-top: 520px;
  }
  .dialog {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.7);
    .form {
      position: absolute;
      top: 350px;
      left: 30px;
      box-sizing: border-box;
      padding: 20px;
      text-align: center;
      width: 690px;
      height: 713px;
      background: #fff;
      border-radius: 16px;
      p {
        margin-bottom: 55px;
      }
      input {
        margin-bottom: 32px;
        width: 626px;
        height: 88px;
        background: rgba(241, 242, 246, 1);
        border-radius: 44px;
        padding-left: 30px;
      }
      button {
        margin-top: 10px;
        width: 380px;
        height: 78px;
        background: linear-gradient(
          -90deg,
          rgba(255, 99, 72, 1),
          rgba(255, 159, 124, 1)
        );
        box-shadow: 0px 6px 16px 0px rgba(255, 159, 124, 0.6);
        border-radius: 39px;
        color: #fff;
      }
    }
  }
}
</style>
