<template>
  <div class="base-popup">
    <div class="base-popup__content">
      <span class="base-popup__txt">{{ baseTxt }}</span>
      <div class="base-popup__btnbox">
        <a class="base-popup__btn base-popup__btn--agree" href="mailto:dbdpsk8871@naver.com" @click="emitCloseModal">수락</a>
        <button class="base-popup__btn" @click="emitCloseModal">거절</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'basePopup',
  props: {
    baseTxt: {
      type: String,
      default: '',
    },
  },
  methods: {
    emitCloseModal() {
      this.$emit('closeModal');
    }
  }
}
</script>

<style lang="scss">

.base-popup {
  $this:'.c-modal';
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 900;
  &__content {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    position: fixed;
    width: 70rem;
    height: 25rem;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background: #fff;
    text-align: center;
    border-radius: 3rem;
  }
  &__txt {
    margin-top: 3rem;
    font-size: 3.7rem;
    padding: 3rem 3rem 2rem;
    color: #333;
  }
  &__btnbox {
    display: flex;
    align-items: center;
    gap: 1rem;
    border-top: 1px solid #999;
  }
  &__btn {
    width: 50%;
    font-size: 3rem;
    color: #999;
    padding: 2.5rem;
    &--agree {
      color: #037cff;
      font-weight: 500;
    }
    &:last-child {
      border-left: 1px solid #999;
    }
  }
  @media (max-width: 540px) {
    &__content {
      width: 50rem;
    }
    &__txt {
      padding: 1rem 3rem 2rem;
      word-break: keep-all;
      font-size: 3.3rem;
      line-height: 4.5rem;
    }
  }

}
</style>