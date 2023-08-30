<template>
  <div class="inner">
    <div class="phone-guide">
      <div class="phone-guide__innerbox">
        <div class="phone-guide__camera">
          <div class="phone-guide__lens"></div>
        </div>
        <div class="phone-guide__speaker"></div>
      </div>
      <div class="phone-guide__inner">
        <router-view />
      </div>
      <router-link :to="'PhoneMain'" class="phone-guide__home"></router-link>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'APP',
    components: {
    },
    props: {
    },
  }
</script>

<style lang="scss">
@import './assets/scss/style.scss';
.phone-guide {
  max-width: 90rem;
  height: 165rem;
  border: 2px solid #131212 ;
  border-radius: 7rem;
  margin: 0 auto;
  background-color: #fff;
  box-shadow: 2rem 2rem 3rem #c2bcb8;
  overflow: hidden;
  animation: vibration .1s 2s 5;

  &__innerbox {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 6.5rem;
    background-color: #fff;
  }
  &__inner {
    width: calc(100% - 8rem);
    height: calc(100% - 35rem);
    border: 2px solid #131212;
    margin: 7rem auto 0;
    background-color: #fff;
  }
  &__time {
    color: #595959;
    font-size: 4rem;
    padding: 2rem 0 0 2rem;
  }
  &__camera {
    position: relative;
    width: 3rem;
    height: 3rem;
    border: 2px solid #131212 ;
    border-radius: 50%;
    background-color: #000;
    margin-right: 2rem;
    box-shadow: 0.5rem 0.5rem 2rem #222 inset;
  }
  &__lens {
    position: relative;
    left: calc(50% - 0.75rem);
    top: calc(50% - 0.75rem);
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    // lens 효과
    background: rgba(18, 18, 18, 0.5);
    box-shadow: 0 8px 32px 0 rgba(200, 200, 200, 0.4);
    backdrop-filter: blur( 2rem );
    border: 1px solid rgba(255, 255, 255, 0.2);
  }
  &__speaker {
    width: 12rem;
    height: 3rem;
    border: 2px solid #131212 ;
    border-radius: 3rem;
    padding-right: 5rem;
    background-color: #333;
    box-shadow: 0.5rem 0.5rem 2rem #222 inset;
  }
  &__home {
    display: block;
    width: 11rem;
    height: 11rem;
    border: 2px solid #131212 ;
    border-radius: 50%;
    margin: 3.5rem auto;
    background-color: #fff;
    box-shadow: 0.5rem 0.5rem 2rem #c2bcb8 inset;
  }
  @keyframes vibration {
    from {
      transform: rotate(1deg);
    }
    to {
      transform: rotate(-1deg);
    }
  }
}
</style>