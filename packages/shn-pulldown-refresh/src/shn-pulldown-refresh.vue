<template>
  <div class="shn-pulldown-refresh"></div>
</template>
<script>
export default {
  name: 'shn-pulldown-refresh',
  props: {
    target: {
      type: String,
      default: 'window'
    },
    bottom: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      show: false,
      scrollTop: 0
    }
  },
  mounted() {
    this.add()
  },
  destroyed() {
    this.remove()
  },
  methods: {
    scrollToBottom() {
      if (this.target === 'window') {
        const scrollHeight =
          document.body.scrollHeight || document.documentElement.scrollHeight
        const clientHeight =
          document.body.clientHeight || document.documentElement.clientHeight
        const scrollTop =
          document.body.scrollTop || document.documentElement.scrollTop
        if (scrollTop >= scrollHeight - clientHeight - this.bottom) {
          this.$emit('pulldown')
        }
      } else {
        const scrollHeight = document.getElementById(this.target).scrollHeight
        const clientHeight = document.getElementById(this.target).clientHeight
        const scrollTop = document.getElementById(this.target).scrollTop
        if (scrollTop >= scrollHeight - clientHeight) {
          this.$emit('pulldown')
        }
      }
    },
    add() {
      if (this.target === 'window') {
        window.addEventListener('scroll', this.scrollToBottom)
      } else {
        document
          .getElementById(this.target)
          .addEventListener('scroll', this.scrollToBottom)
      }
    },
    remove() {
      if (this.target === 'window') {
        window.removeEventListener('scroll', this.scrollToBottom)
      } else {
        document
          .getElementById(this.target)
          .removeEventListener('scroll', this.scrollToBottom)
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.shn-pulldown-refresh {
  display: none;
}
</style>
