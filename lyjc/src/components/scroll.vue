<template>
  <div class="scroll"
       ref="wrapper">
    <slot></slot>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'CommonScroll',
  props: {
    probeType: {
      type: Number,
      default: 1
    },
    click: {
      type: Boolean,
      default: true
    },
    data: {
      type: Array,
      default: null
    },
    pullUpLoad: {
      type: Object,
      default () {
        return {
          threshold: 50
        }
      }
    },
    pullDownRefresh: {
      type: null,
      default: false
    },
    listenScroll: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      isPullingDown: false,
      isPullUpLoad: false
    }
  },
  mounted () {
    setTimeout(() => {
      this._initalScroll()
    }, 20)
  },
  methods: {
    _initalScroll () {
      if (!this.$refs.wrapper) {
        return
      }
      this.scroll = new BScroll(this.$refs.wrapper, {
        probeType: this.probeType,
        click: this.click,
        pullUpLoad: this.pullUpLoad,
        momentum: true
      })
      if (this.listenScroll) {
        const _this = this
        this.scroll.on('scroll', (pos) => {
          _this.$emit('scroll', pos)
        })
        this.scroll.on('touchEnd', (pos) => {
          _this.$emit('scrollend', pos)
        })
        this.scroll.on('pullingUp', () => {
          this.isPullUpLoad = true
          this.$emit('pullingUp')
        })
        if (this.pullDownRefresh) {
          this.scroll.on('pullingDown', () => {
            this.isPullingDown = true
            this.$emit('pullingDown')
          })
        }
      }
    },
    enable () {
      this.scroll && this.scroll.enable()
    },
    disable () {
      this.scroll && this.scroll.disable()
    },
    refresh () {
      this.scroll && this.scroll.refresh()
    },
    finishPullUp () {
      this.scroll && this.scroll.finishPullUp()
    },
    finishPullDown () {
      this.scroll && this.scroll.finishPullDown()
    },
    scrollTo () {
      this.scroll && this.scroll.scrollToElement.apply(this.scroll, arguments)
    },
    scrollToElement () {
      this.scroll && this.scroll.scrollToElement.apply(this.scroll, arguments)
    }
  },
  watch: {
    data () {
      setTimeout(() => {
        this.refresh()
      }, 20)
    }
  }
}
</script>
<style lang="less" scoped>
.scroll{
  position: absolute;
  overflow: hidden;
  top: 200px;
  left: 0;
  bottom: 0;
  right: 0;
  touch-action: none;
}
</style>