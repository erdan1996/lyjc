<!--  -->
<template>
  <div class="procost">
    <top :topmsg="'项目费用'"></top>
    <input type="text" v-model="test" />
    <div class="search" @click="sousuo">
      <img src="@/assets/images/search.png" alt="" />
    </div>
    <div class="content">
      <ul class="topcontent">
        <li v-for="(item, index) in spans" :key="index">
          {{ item }}
          <div class="topimg" v-show="index === 3">
            <img src="@/assets/images/top.png" alt="" class="shang" />
            <img src="@/assets/images/bot.png" alt="" class="xia" />
          </div>
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
      spans: ["项目名称", "准确度等级", "测量范围", "所属领域", "价格"],
      lis: [0, 1, 2, 3, 4],
      test: ''
    };
  },
  methods: {
    sousuo() {
      this.$api.common.search({data: this.test}).then(res => {
        console.log(res)
      })
    }
  }
};
</script>
<style lang="less" scoped>
.procost {
  position: relative;
  input {
    width: 710px;
    height: 72px;
    background: rgba(241, 242, 246, 1);
    opacity: 0.95;
    border-radius: 31px;
    margin-left: 20px;
    box-sizing: border-box;
    padding-left: 36px;
    margin-bottom: 40px;
    margin-top: 27px;
    &::-webkit-input-placeholder {
      color: #808e9b;
    }
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
      &:nth-child(4) {
        position: relative;
        padding: 20px 0 0 30px;
        line-height: 30px;
        display: flex;
        // &::before {
        //   position: absolute;
        //   top: 12px;
        //   right: 27px;
        //   content: url("../assets/images/top.png");
        //   vertical-align: middle;
        //   display: inline-block;
        // }
        // &::after {
        //   position: absolute;
        //   top: 32px;
        //   right: 53px;
        //   content:url("../assets/images/bot.png");
        // }
      }
      // .shang {
      //   position: absolute;
      //   top: 12px;
      //   right: 17px;
      // }
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
  .search {
    position: absolute;
    top: 129px;
    right: 56px;
  }
}
</style>
