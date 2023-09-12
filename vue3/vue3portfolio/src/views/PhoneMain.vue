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
      <div class="phone-main__bottombox">
        <div class="phone-main__app">
          <button class="phone-main__icon phone-main__icon--call"><span class="hide">전화걸기</span></button>
          <button class="phone-main__icon phone-main__icon--safari"><span class="hide">인터넷 연결하기</span></button>
          <button class="phone-main__icon phone-main__icon--send" @click="isMsg">
            <div class="phone-main__badge"></div>
            <div class="phone-main__message"></div>
            <span class="hide">메세지보내기</span>
          </button>
          <button class="phone-main__icon phone-main__icon--music"><span class="hide">음악듣기</span></button>
        </div>
      </div>
      <basePopup 
        v-if="popUp"
        @closeModal= "closeModal"
        baseTxt="면접전형 안내 메일을 보내겠습니까?"  
      />

    </div>

  </div>
</template>

<script>
  import statusBar from '@/components/StatusBar.vue';
  import basePopup from '@/components/BasePopup.vue';

  export default {
    name: 'phoneMain',
    components: {
      statusBar,
      basePopup,
    },
    props: {
    },
    data() {
      return {
        dateCont: '',
        dayCont: '',
        popUp: false,
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
      isMsg() {
        this.popUp = true
      },
      closeModal() {
        this.popUp = false
      }
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
  $this: '.phone-main';
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  &__appbox {
    padding: 5rem 3rem;
  }
  &__app {
    position: relative;
    width: 11rem;
    text-align: center;
  }
  &__icon {
    width: 12rem;
    height: 12rem;
    border-radius: 2rem;
    padding: 1rem;
    text-align: center;
    box-shadow: 1px 1px 2rem rgb(0, 0, 0, 0.4);
    &--calender {
      background-color: #fff;
    }
    &--call {
      background: #35c235 url(../assets/images/icon_call.svg) center / 70% no-repeat;
    }
    &--safari {
      background: #fff url(../assets/images/icon_safari.png) center / contain no-repeat;
    }
    &--send {
      position: relative;
      background-color: #35c235;
    }
    &--music {
      background: url(../assets/images/icon_music.svg) center / 70% no-repeat, linear-gradient(to bottom, #fb5b73, #fa253d);
    }
  }
  &__badge {
    position: absolute;
    width: 5rem;
    height: 5rem;
    top: -2rem;
    right: -2rem;
    background-color: red;
    border-radius: 50%;
    &::before {
      content: '1';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: #fff;
    }
  }
  &__message {
    position: relative;
    width: 9rem;
    height: 7.5rem;
    background-color: #fff;
    border-radius: 50%;
    margin: 0 auto 1rem;
    z-index: 999;
    &::after {
      content: '';
      width: 0;
      height: 0;
      position: absolute;
      left: 1.8rem;
      bottom: -1.7rem;
      border-left: 1.2rem solid transparent;
      border-right: 1.2rem solid transparent;
      border-top: 3.4rem solid #fff;
      transform: rotate(30deg);
    }
  }
  &__day {
    display: block;
    color: #000;
    font-size: 2.3rem;
    font-weight: 500;
    margin-bottom: 0.3rem;
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
  &__bottombox {
    padding: 5rem;
    border-radius: 8rem;
    background-color: rgba(0, 0, 0, 0.5);
    margin-bottom: 5rem;
    #{$this}__app {
      width: 100%;
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>