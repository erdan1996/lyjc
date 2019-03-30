<!--  -->
<template>
  <div>
    <top :topmsg="'联系我们'"></top>
    <div class="contact" v-html="cont"></div>
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
      cont: ""
    }
  },
  created() {
    this.init()
  },
  methods: {
    init() {
      this.$api.common.getcontact().then(res => {
        this.cont = res.data.content
      })
    }
  }
};
</script>
<style lang="less" scoped>
.contact {
  box-sizing: border-box;
  padding: 0 20px;
  margin-top: 20px;
}
</style>
