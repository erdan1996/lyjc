<!--  -->
<template>
<!-- eslint-disable -->
  <div class="question">
    <!-- eslint-disable -->
    <top :topmsg="'满意度问卷'"></top>
    <ul class="queul">
      <li class="queli" v-for="(item,index) in ques" :key="index">
        <h4>{{item.title}}</h4>
        <van-radio-group v-model="item.id">
          <van-radio v-model="item1.checked" :name="i" v-for="(item1, i) in item.question_options" :key="i">
            {{item1.content}}
            <img
              slot="icon"
              slot-scope="props"
              :src="props.checked ? icon.active : icon.normal"
            />
          </van-radio>
        </van-radio-group>
      </li> 
    </ul>
    <button class="submit" @click="submit()">提交</button>
    <div class="dialog" v-show="show">
      <div class="form">
        <p>
          感谢您完成问卷,请填写以下资料， 将有机会获取我们送出的小礼品。           
        </p>
        <input type="text" placeholder="单位  名称" v-model="company"/>
        <input type="text" placeholder="您的  姓名" v-model="name"/>
        <input type="telephone" placeholder="您的  电话" v-model="phone"/>
        <div @click="senddata">
          好的
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// eslint-disable
import { Toast } from "vant";
import top from "@/components/top.vue";
export default {
  components: {
    top
  },
  data() {
    return {
      radio: "",
      checked: true,
      icon: {
        normal: require("@/assets/images/check.png"),
        active: require("@/assets/images/checked.png")
      },
      show: false,
      company: "11",
      name: "111",
      phone: "18292987301",
      res: {},
      ques: [],
      sends: [],
      sendsid: [],
      qusetion: []
    };
  },
  created() {
    this.wenjuan();
  },
  methods: {
    wenjuan() {
      this.$api.common.getques().then(res => {
        for (let i in res.data) {
          this.ques.push(res.data[i]);
          this.sendsid.push(res.data[i].id);
        }
      });
    },
    submit() {
      if (!this.ques[0].question_options[this.ques[0].id]) {
        Toast.fail("请选择答案");
        return;
      }
      if (!this.ques[1].question_options[this.ques[1].id]) {
        Toast.fail("请选择答案");
        return;
      }
      for (let i = 0; i < this.ques.length; i++) {
        this.sends.push(this.ques[i].question_options[this.ques[i].id].score);
      }
      // eslint-disable-next-lin
      for (let i = 0; i < this.sendsid.length; i++) {
        this.qusetion.push({
          id: this.sendsid[i],
          score: this.sends[i]
        });
      }
      this.show = true;
    },
    senddata() {
      if (!this.company) {
        Toast.fail("请填写公司");
        return;
      }
      if (!this.name) {
        Toast.fail("请填写姓名");
        return;
      }
      if (!this.phone) {
        Toast.fail("请填写手机号");
        return;
      }
      this.$api.common
        .sendques({
          company: this.company,
          contact: this.name,
          phone: this.phone,
          question: this.qusetion
        })
        .then(res => {
          if (res.status === 200) {
            Toast("提交成功");
          } else {
            Toast.fail(res.data.msg);
          }
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
    margin-top: 320px;
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
      div {
        margin-top: 10px;
        margin-left: 150px;
        width: 380px;
        height: 78px;
        line-height: 78px;
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
