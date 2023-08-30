<template>
  <Transition name="fade">
    <router-link to="/IntroMaster" class="message-box">
      <div class="message-box__msgbox">
        <div class="message-box__msgimg">
          <img src="../assets/images/icon_message.svg" alt="메세지 아이콘" />
          <span class="message-box__msgtit">메세지</span>
        </div>
        <span class="message-box__msgtime"> {{ msgTime }} </span>
      </div>
      <span class="message-box__msgsender"> {{ msgSender }} </span>
      <span class="message-box__msgcont"> {{ msgCont }} </span>
      <span class="message-box__msgview"> {{ msgView }} </span>
    </router-link>
  </Transition>
</template>

<script>
export default {
  name: 'messageBox',
  props: {
    blind: {
      type: Boolean,
    },
    msgTime: {
      type: String,
      default: '지금',
    },
    msgSender: {
      type: String,
      default: '유예나',
    },
    msgCont: {
      type: String,
      default: '이력서가 도착했습니다.',
    },
    msgView: {
      type: String,
      default: '눌러서 더 보기',
    }
  },
}
</script>

<style lang="scss" scoped>
  .message-box {
    display: block;
    width: calc(100% - 3rem);
    height: 24rem;
    border-radius: 3rem;
    overflow: hidden;
    margin: 5rem auto;
    // opacity: 0;
    text-align: left;
    background-color: rgba(172, 172, 173, 0.7);
    // animation: delayOn 1s 2s forwards;
    &__msgimg {
      display: flex;
      align-items: center;
      // opacity: 0;
      // animation: delayOn 1s 2s forwards;
      > img {
        width: 4rem;
        height: 4rem;
        object-fit: contain;
      }
    }
    &__msgbox {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 2rem 2rem 1.5rem;
      // opacity: 0;
      background-color: rgba(199, 197, 201, 0.4);
      // animation: delayOn 1s 2s forwards;
    }
    &__msgtit {
      padding-left: 1rem;
      font-size: 1.8rem;
    }
    &__msgsender {
      display: block;
      font-size: 3rem;
      font-weight: 700;
      padding: 0 2rem;
      margin: 3rem 0 1rem;
    }
    &__msgcont {
      display: block;
      padding: 0 2rem;
      font-size: 2.9rem;
      font-weight: 500;
      margin-bottom: 1.5rem;
    }
    &__msgview {
      display: block;
      font-size: 2.4rem;
      font-weight: 500;
      padding: 0 2rem;
    }
  }

  // keyframes
  @keyframes phone {
    to {
      background: url(../assets/images/img_phoneback.png) center / cover no-repeat;
    }
  }
  @keyframes delayOn {
    to {
      opacity: 1;
    }
  }
</style>
