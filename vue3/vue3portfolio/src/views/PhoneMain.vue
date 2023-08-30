<template>
  <div class="container container--opacity">
    <statusBar />
    <div class="phone-main">
      <div class="phone-main__appbox">
        <div class="phone-main__app">
          <button class="phone-main__icon phone-main__icon--calender">
            <span class="phone-main__day">{{ dayCont }}</span>
            <span class="phone-main__date">{{ dateCont }}</span>
          </button>
          <span class="phone-main__icontxt">캘린더</span>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import statusBar from '@/components/StatusBar.vue';

  export default {
    name: 'phoneMain',
    components: {
      statusBar,
    },
    props: {
    },
    data() {
      return {
        dateCont: '',
        dayCont: '',
      };
    },
    mounted() {
      this.updateTime();
      setInterval(this.updateTime, 1000);
    },
    methods: {
      updateTime() {
        const now = new Date();
        let date = now.getDate();
        let day = now.getDay();
        if (date < 10) {
          date = '0' + date;
        }
        const daysOfWeek = ['일', '월', '화', '수', '목', '금', '토'];
        day = daysOfWeek[day];

        this.dayCont = day + '요일';
        this.dateCont = date;
      },
    },
  }

</script>


<style lang="scss" scoped>
.container--opacity {
  position: relative;
  &::before {
    content: '';
    display: inline-block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(@/assets/images/img_phoneback.png);
    background-size: cover;
    opacity: 0.6;
  }
}
.phone-main {
  &__appbox {
    padding: 4rem 3rem;
  }
  &__app {
    position: relative;
    width: 11rem;
    text-align: center;
  }
  &__icon {
    width: 11rem;
    height: 11rem;
    border-radius: 1.5rem;
    &--calender {
      background-color: #fff;
    }
  }
  &__day {
    display: block;
    color: #000;
    font-size: 1.5rem;
    font-weight: 500;
  }
  &__date {
    display: block;
    color: #000;
    font-size: 5rem;
    font-weight: 500;
    line-height: 4.5rem;
  }
  &__icontxt {
    display: block;
    color: #fff;
    font-size: 2.5rem;
    margin-top: 2rem;
  }
}
</style>