<template>
  <button type="button" :class="classes" @click="$emit('handleClick')">
    <slot></slot>
  </button>
</template>

<script>
import { computed } from 'vue'

export default {
  name: 'baseButton',
  props: {
    size: {
      type: String,
      default: 'medium',
    },
  },
  setup (props) {
    const classes = computed(() => {
      return `b-btn b-btn--${props.size}`
    })
    return {
      classes,
    }
  },
  emits: ['handleClick']
}
</script>

<style lang="scss" scoped>


</style>
