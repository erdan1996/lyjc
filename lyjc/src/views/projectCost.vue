<!--  -->
<template>
  <div class="procost">
    <top :topmsg="'项目费用'"></top>
    <input type="text" v-model="test" />
    <div class="search" @click="soutitle">
      <img src="@/assets/images/search.png" alt="" />
    </div>
    <div class="content">
      <ul class="topcontent">
        <li v-for="(item, index) in spans" :key="index">
          {{ item }}
          <div class="topimg" v-show="index === 3">
            <img src="@/assets/images/top.png" alt="" class="shang" @click="up" />
            <img src="@/assets/images/bot.png" alt="" class="xia" @click="down" />
          </div>
        </li>
      </ul>
    </div>
    <common-scroll
      ref="scroll"
      :listenScroll="listenScroll"
      @pullingUp="handlePullUp"
      :data="list"
    >
      <div>
        <ul class="botcontent" v-for="(item, index) in arr" :key="index">
          <li>
            {{ item.service_name }}
          </li>
          <li>
            {{ item.grade }}
          </li>
          <li>
            {{ item.range }}
          </li>
          <li>
            {{ item.cate.cate_name }}
          </li>
          <li>
            {{ item.price }}
          </li>
        </ul>
        <load-more
          v-show="loadMore"
          :title="loadMoreTitle"
        ></load-more>
      </div>
    </common-scroll>
  </div>
</template>
<script>
import LoadMore from "../components/loadmore";
import CommonScroll from "../components/scroll";
import top from "@/components/top.vue";
import { Toast } from "vant";
export default {
  components: {
    top,
    LoadMore,
    CommonScroll
  },
  data() {
    return {
      spans: ["项目名称", "准确度等级", "测量范围", "所属领域", "价格"],
      lis: [0, 1, 2, 3, 4],
      test: "",
      arr: [],
      page: 1,
      pageSize: 10,
      sortid: "",
      listenScroll: true,
      loadMore: false, // 加载更多
      total: 0, // 推荐总条数
      loadMoreTitle: '加载中...',
      list: []
    };
  },
  created() {
    this.sousuo()
  },
  methods: {
    sousuo() {
      this.$api.common.search({like: this.test,sort: Number(this.sortid),pageNo: this.page, pageSize: this.pageSize}).then(res => {
        if (res.data.code === 0) {
          Toast.fail("该项目不存在");
        } else {
          this.sortid = res.data.sort;
          this.total = res.data.count
          this.arr = this.arr.concat(...res.data.list);
          this.loadMore = false;
          this.$refs.scroll.refresh()
          this.$refs.scroll.finishPullUp()
        }
      })
      .catch(res => {
        this.longTimeRequest();
      })
    },
    soutitle() {
      this.page = 1
      this.total = ""
      this.arr = []
      this.sousuo()
    },
    up() {
      this.page = 1
      this.sortid += 1
      this.total = ""
      this.arr = []
      this.sousuo()    
    },
    down() {
      this.sortid -= 1
      this.total = ""
      this.page = 1
      this.arr = []
      this.sousuo()      
    },
    handlePullUp () {
      if (this.loadMore) return
      this.loadMore = true;
      if (this.total > this.arr.length) {
        this.page += 1;
        this.sousuo();
        console.log(this.page)
      } else {
        this.loadMoreTitle = "没有更多";
      }
      
    },
    longTimeRequest () {
      this.loadMore = this.loadMoreTitle === "没有更多";
    }
  }
};
</script>
<style lang="less" scoped>
.procost {
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
  .search {
    position: absolute;
    top: 129px;
    right: 56px;
  }
}
.scroll{
  position: absolute;
  overflow: hidden;
  top: 330px;
  left: 0;
  bottom: 0;
  right: 0;
  height: 100%;
  touch-action: none;
}
.botcontent {
  display: flex;
  border: 1px solid rgba(230, 231, 235, 1);
  text-align: center;
  li {
    width: 151px;
    box-sizing: border-box;
    padding: 10px;
    overflow: hidden;
    height: 140px;
    font-size: 24px;
    line-height: 140px;
    border-right: 1px solid rgba(230, 231, 235, 1);
    &:last-child {
      border: none;
    }
  }
}
</style>
