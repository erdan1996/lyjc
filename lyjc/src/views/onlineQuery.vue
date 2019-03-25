<!--  -->
<template>
  <div class="online">
    <div class="top">
      <h4>在线查询</h4>
    </div>
    <div class="center">
      <div class="img">
        <img src="../assets/images/pro.png" alt="" />
      </div>
      <div class="p">检测进度查询</div>
      <input type="number" placeholder="请输入委托单号" />
      <button @click="chulai" class="queren">查询</button>
    </div>
    <div class="dialog" v-show="show">
      <div class="content">
        <div class="img">
          <img src="../assets/images/error.png" alt="" />
        </div>
        <p>您输入的委托单号有误，请确认后重试！</p>
        <button @click="show = false">返回</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: true
    };
  },
  methods: {
    chulai() {
      this.show = false;
    }
  }
};
</script>
<style lang="less" scoped>
.online {
  width: 100%;
  height: 100%;
  position: relative;
  text-align: center;
  .top {
    width: 750px;
    height: 399px;
    background: url("../assets/images/bgc.png") no-repeat;
    box-sizing: border-box;
    padding-top: 27px;
    h4 {
      color: #fff;
      margin-left: 20px;
      text-align: left;
      font-weight: 400;
    }
  }
  .center {
    position: absolute;
    top: 128px;
    left: 20px;
    width: 710px;
    height: 715px;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 1px 14px 4px rgba(201, 234, 245, 0.85);
    border-radius: 20px;
    box-sizing: border-box;
    padding: 80px 70px;
    .img {
      width: 176px;
      height: 173px;
      margin-left: 197px;
      margin-bottom: 25px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    input {
      margin: 80px 0;
      width: 570px;
      height: 88px;
      background: rgba(241, 242, 246, 1);
      border-radius: 42px;
      line-height: 88px;
      text-align: center;
      &::-webkit-input-placeholder {
        color: #97a3b0;
      }
      &:-ms-input-placeholder {
        color: #97a3b0;
      }
    }
    .queren {
      width: 380px;
      height: 78px;
      background: linear-gradient(-90deg, #bcbcbc, #c2c2c2);
      box-shadow: 0px 6px 16px 0px rgba(250, 193, 172, 0.6);
      border-radius: 39px;
      color: #fff;
      &:hover {
        background: linear-gradient(
          -90deg,
          rgba(255, 99, 72, 1),
          rgba(255, 159, 124, 1)
        );
      }
    }
  }
  .dialog {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    .content {
      position: absolute;
      top: 350px;
      left: 30px;
      box-sizing: border-box;
      padding: 48px 0 0;
      text-align: center;
      width: 690px;
      height: 388px;
      background: rgba(255, 255, 255, 1);
      border-radius: 16px;
      .img {
        width: 88px;
        height: 88px;
        margin-left: 301px;
        margin-bottom: 33px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      p {
        color: #2f3542;
        text-align: center;
      }
      button {
        width: 100%;
        height: 122px;
        line-height: 122px;
        text-align: center;
        color: #ff6348;
        background-color: #fff;
      }
    }
  }
}
</style>
