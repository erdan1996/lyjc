<template>
  <div class="load-more">
    {{title}}
  </div>
</template>
<script>
export default {
  name: 'LoadMore',
  props: {
    title: {
      type: String,
      default: '加载中...'
    }
  }
};
</script>
<style lang="less" scoped>
.load-more {
  width: 100%;
  height: 39px;
  text-align: center;
  background-color: #F7F7F7;
  line-height: 39px;
  font-size: #050505;
  font-weight: 400;
  color: #8f8f8f;
}
</style>
