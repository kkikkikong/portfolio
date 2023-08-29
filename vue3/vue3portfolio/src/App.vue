<template>
  <div class="inner">
    <div class="phone-guide">
      <div class="phone-guide__innerbox">
        <div class="phone-guide__camera"></div>
        <div class="phone-guide__speaker"></div>
      </div>
      <div class="phone-guide__inner">
        <router-view />
      </div>
      <button class="phone-guide__home">
        <router-link :to="'/PortfolioPage'"></router-link>
      </button>
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
    width: 3rem;
    height: 3rem;
    border: 2px solid #131212 ;
    border-radius: 50%;
    background-color: #fff;
    margin-right: 2rem;
  }
  &__speaker {
    width: 12rem;
    height: 3rem;
    border: 2px solid #131212 ;
    border-radius: 3rem;
    padding-right: 5rem;
    background-color: #fff;
  }
  &__home {
    display: block;
    width: 11rem;
    height: 11rem;
    border: 2px solid #131212 ;
    border-radius: 50%;
    margin: 3.5rem auto;
    background-color: #fff;
    box-shadow: 0.5rem 0.5rem 2rem #c2bcb8 inset
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