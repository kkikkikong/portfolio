<template>
  <div class="container container--black">
    <div class="intro-page">
      <div class="intro-page__today">
        <baseDay />
        <baseTime />
        <messageBox />
      </div>
    </div>
  </div>
</template>

<script>
  import { ref } from 'vue';
  import baseTime from '@/components/BaseTime.vue'
  import baseDay from '@/components/BaseDay.vue'
  import messageBox from '@/components/MessageBox.vue'
  
  export default {
    name: 'introPage',
    components: {
      baseTime,
      baseDay,
      messageBox,
    },
    setup() {
      const onClick = ref(false)
      const blindOff = () => {
        onClick.value = !onClick.value
      };
      return {
        onClick,
        blindOff,
      };
    }
  }
</script>

<style lang="scss">
  .container--black {
    animation: phone 0.5s 2s forwards;
  }
  .intro-page {
    &__today {
      text-align: center;
      margin-top: 20rem;
      opacity: 0;
      animation: delayOn 1s 2s forwards;
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