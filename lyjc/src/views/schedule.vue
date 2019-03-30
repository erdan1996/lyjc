<!--  -->
<template>
  <div id="noscorll" style="overflow: hidden;height:100%">
    <top :topmsg="'进度查询'"></top>
    <div class="contact">
      <h4>委托单号：{{ id }}</h4>
    </div>
      <common-scroll
        ref="scroll"
        :listenScroll="listenScroll"
        @pullingUp="handlePullUp"
        :data="list"
      >
        <div class="scroll-content">
          <ul class="topcontent">
            <li v-for="(item, index) in spans" :key="index">
              {{ item }}
            </li>
          </ul>
          <ul class="botcontent" v-for="(item, index) in lis" :key="index">
            <li>
              {{ item.djh }}
            </li>
            <li>
              {{ item.qjmc }}
            </li>
            <li>
              {{ item.ts }}
            </li>
            <li>
              {{ item.khyqsjdz }}
            </li>
            <li>
              {{ item.zsPrint }}
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
export default {
  components: {
    top,
    LoadMore,
    CommonScroll
  },
  data() {
    return {
      spans: ["登记号", "器具名称", "套数", "检验进度", "送检日期"],
      lis: [],
      arr: [],
      id: "",
      list: [],
      listenScroll: true,
      loadMore: false, // 加载更多
      total: 0, // 推荐总条数
      loadMoreTitle: '加载中...',
      page: 1,
      pageSize: 10
    };
  },
  created() {
    this.more();
    this.listenScroll = true;
  },
  methods: {
    more() {
      this.id = this.$route.params.id
      this.$api.common
        .getjindu({
          number: this.id,
          pageNo: this.page,
          pageSize: this.pageSize
        })
        .then(res => {
          this.total = res.data.data.count;
          this.lis = this.lis.concat(...res.data.data.list);
          this.loadMore = false;
          this.$refs.scroll.refresh()
          this.$refs.scroll.finishPullUp()
        })
        .catch(e => {
          this.longTimeRequest();
          // this.loadMore = true;
        })
    },
    handlePullUp () {
      if (this.loadMore) return
      this.loadMore = true;
      if (this.total > this.lis.length) {
        this.page += 1;
        this.more();
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
.contact {
  box-sizing: border-box;
  position: relative;
  margin-top: 20px;
  // height: 100%;
  h4 {
    font-weight: 400;
    margin-bottom: 20px;
    margin-left: 20px;
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
    }
  }
  .botcontent {
    display: flex;
    border: 1px solid rgba(230, 231, 235, 1);
    text-align: center;
    li {
      box-sizing: border-box;
      padding: 0 10px;
      padding-top: 20px;
      overflow: hidden;
      height: 140px;
      font-size: 24px;
      width: 151px;
      // line-height: 140px;
      border-right: 1px solid rgba(230, 231, 235, 1);
      &:last-child {
        border: none;
      }
    }
  }
</style>
