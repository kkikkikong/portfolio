<template>
  <div class="container container--black">
    <div class="intro-page">
      <div class="intro-page__today">
        <baseDay />
        <baseTime />
        <router-link to="IntroMaster" class="intro-page__msg">
          <div class="intro-page__msgtit">
            <div class="intro-page__msgicon">
              <img src="../assets/images/icon_message.svg" alt="메시지 아이콘"/>
              <span class="intro-page__msgtxt">메시지</span>
            </div>
            <span class="intro-page__msgtime">지금</span>
          </div>
          <div class="intro-page__msgdesc">
            <span class="intro-page__sender">유예나</span>
            <span class="intro-page__msgcont">포트폴리오가 도착했습니다.</span>
            <span class="intro-page__msgview">눌러서 더 보기</span>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  import baseTime from '@/components/BaseTime.vue'
  import baseDay from '@/components/BaseDay.vue'

  export default {
    name: 'portfolioPage',
    components: {
      baseTime,
      baseDay,
    },
    props: {
    },
  }
</script>

<style lang="scss">
  .container--black {
    animation: backImg 0.01s 2s forwards;
  }
  .intro-page {
    &__today {
      margin-top: 20rem;
      text-align: center;
      opacity: 0;
      animation: lightOn 0.1s 2s forwards;
    }
    .base-day {
      color: #fff;
      font-weight: 700;
    }
    .base-time {
      color: #fff;
      font-weight: 700;
      font-size: 19rem;
    }
    .base-day + .base-time {
      margin-top: 1rem;
    }
    &__msg {
      display: block;
      width: calc(100% - 3rem);
      height: 23rem;
      border-radius: 3rem;
      margin: 6rem auto 0;
      overflow: hidden;
      background-color: rgba(182, 181, 189, 0.8);
      // animation: on 0.3s forwards;
      // animation-delay: 2.5s;
    }
    &__msgtit {
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: #333;
      padding: 2rem 2rem 1.2rem;
      background-color: rgba(202, 199, 208, 0.8);
      animation: onTit 0.3s forwards;
      animation-delay: 2.5s;
      font-size: 2.4rem;
      font-weight: 600;
    }
    &__msgicon {
      display: flex;
      align-items: center;
      > img {
        width: 5rem;
        height: 5rem;
        object-fit: contain;
      }
    }
    &__msgtxt {
      margin-left: 1rem;
    }
    &__msgdesc {
      padding: 2rem;
      text-align: left;
    }
    &__sender {
      display: block;
      font-size: 3rem;
      font-weight: 700;
      margin-bottom: 1rem;
    }
    &__msgcont {
      display: block;
      font-size: 3rem;
      font-weight: 00;
      margin-bottom: 1rem;
    }
    &__msgview {
      display: block;
      font-size: 2rem;
      margin-bottom: 1rem;
    }
  }
  @keyframes backImg {
    to {
      background: url(@/assets/images/img_background.png) center / cover no-repeat;
      background-color: transparent;
    }
  }
  @keyframes lightOn {
    to {
      opacity: 1;
    }
  }
  @keyframes on {
    from {
      background-color: #000;
    }
    to {
      opacity: 1;
      background-color: #b6b5bd;
    }
  }
</style>