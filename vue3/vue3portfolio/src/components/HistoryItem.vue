<template>
  <div class="history-item">
    <button type="button" class="history-item__slide"  @click="$emit('handleClick')">
      <div class="history-item__img">
        <img :src="`images/${historyImg}.png`" :alt="historyImg">
      </div>
      <span v-if="imgDesc.length > 0" class="history-item__imgdesc"> {{ imgDesc }}</span>
    </button>
    <span class="history-item__project-tag">{{ tag }}</span>
    <span class="history-item__project-tit"> {{ tit }}</span> 
  </div>
</template>

<script>

export default {
  name: 'historyItem',
  props: {
    historyImg: {
      type: String,
      default: '',
    },
    imgDesc: {
      type: String,
      default: '',
    },
    tag: {
      type: String,
      default: '',
    },
    tit: {
      type: String,
      default: '',
    },
  },
  emits: ['handleClick']  
}

</script>

<style lang="scss">
  .history-item {
    $this: '.history-item';
    &__slide {
      text-align: left;
    }
    &__imgdesc {
      color: #666;
      font-size: 1.5rem;
    }
    &__project-tag {
      display: inline-flex;
      background-color: #c8cffa;
      color: #3042e6;
      font-size: 2.8rem;
      border-radius: 1.5rem;
      padding: 1rem 1.5rem;
      margin: 7rem 0 2rem 2rem;
    }
    &__project-tit {
      display: block;
      font-size: 4rem;
      padding: 0 2rem 0;
    }
  }
</style>
