<template> 
  <button type="button" :class="`base-tab__btn`">{{ tabLabel }}</button>
</template>

<script>
export default {
  name: 'baseTab',
  props: {
    tabLabel: {
      type: String,
      default: '',
    }
  },
}
</script>
<style lang="scss">
  .base-tab {
    $this: '.base-tab';
    width: 100%;
    border-bottom: 1px solid #d2b2a7;
    display: flex;
    &__btn {
      width: 100%;
      display: inline-block;
      padding: 3.4rem 2rem 2.8rem;
      font-size: var(--hilda-font-18);
      line-height: 4.2rem;
      color: var(--hilda-gray-600);
      font-weight: var(--hilda-font-semibold);
      &--active {
        padding-bottom: var(--hilda-space-12);
        border-bottom: 0.4rem solid var(--hilda-blue-500);
        font-weight: var(--hilda-font-semibold);
        color: var(--hilda-gray-900);
      }
    }
  }
</style>

