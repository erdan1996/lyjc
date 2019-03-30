<!--  -->
<template>
  <div class="feedback">
    <top></top>
    <div class="content">
      <div class="bt">
        <img src="@/assets/images/star.png" alt="" />
        请您留下宝贵的意见(必填)：
      </div>
      <input type="textarea" class="ta" v-model="content" />
      <h4>单位名称</h4>
      <input type="text" v-model="company" />
      <h4>联系人</h4>
      <input type="text" v-model="contact" />
      <h4>手机号码</h4>
      <input type="telephone" v-model="phone" />
    </div>
    <button @click="yj">提交</button>
  </div>
</template>
<script>
import top from "@/components/top.vue";
import { Toast } from "vant";
export default {
  components: {
    top
  },
  data() {
    return {
      company: "",
      contact: "",
      phone: "",
      content: ""
    };
  },
  methods: {
    yj() {
      if (!this.content) {
        Toast("请填写意见");
        return;
      }
      // if (!this.contact) {
      //   Toast("请填写联系人");
      //   return;
      // }
      // if (!this.company) {
      //   Toast("请填写单位");
      //   return;
      // }
      if (this.phone.length == 0) {
        Toast("请填写有效的手机号");
        return;
      }
      if (this.phone.length != 11) {
        Toast("请填写有效的手机号");
        return;
      }
      if (!/^1[3|4|5|7|8][0-9]\d{8,11}$/.test(this.phone)) {
        Toast("请填写手机号");
        return;
      }
      this.$api.common
        .getyijian({
          company: this.company,
          contact: this.contact,
          phone: this.phone,
          content: this.content
        })
        .then(res => {
          if (res.data.success) {
            Toast.success("提交成功");
          }
          WeixinJSBridge.call('closeWindow');
        });
    }
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
