<template>
  <div class="container">
    <baseTime />
    <div class="intro-master">
      <div class="intro-master__intro">
        <div class="intro-master__img">
          <img src="../assets/images/photo_yena.png" alt="소유자 사진"/>
        </div>
        <div class="intro-master__info">
          <span class="intro-master__name">유예나</span>
          <div class="intro-master__personal">
            <div class="intro-master__iconbox">
              <button class="intro-master__icon" @click="phoneBtn">
                <div class="intro-master__phone">
                  <img src="../assets/images/icon_phoneB.svg" alt="전화 이미지"/>
                </div>
              </button>
            </div>
            <div class="intro-master__iconbox">
              <button class="intro-master__icon" @click="mailBtn">
                <div class="intro-master__email">
                  <img src="../assets/images/icon_mail.svg" alt="이메일 이미지"/>
                </div>
              </button>
            </div>
          </div>
          <span v-if="phoneOn" class="intro-master__icontxt">010-5199-0558</span>
          <a v-if="mailOn == true" class="intro-master__icontxt" href="mailto:dbdpsk8871@naver.com">
            <span class="intro-master__send">메일보내기</span>
          </a>
        </div>
      </div>
      <ul class="intro-master__list">
        <li>Default Option : 원활한 커뮤니케이션</li>
        <li>디버깅하여 오류를 잡을 때 느끼는 희열감이 업무를 위한 원동력으로 쓰여집니다.</li>
        <li>클린 코드는 자기만족이라고 하지만 코드 에디터에 깨끗하게 작성된 코드의 아름다운 모습을 놓칠 수 없습니다.</li>
        <li>유지보수하기 편리한 코드, 웹 접근성에 맞는 코드를 지향합니다.</li>
        <li>새로운 기술이나 환경을 접하는 것을 흥미롭게 생각합니다. 수행한 프로젝트마다 새로운 기술을 접하고 습득하였습니다.</li>
      </ul>
      <div class="intro-master__linkcont">
        <a class="intro-master__link" href="https://hospitable-mitten-6bb.notion.site/f9b0c2043fdf4c4eb773b5b888b1ebc8?pvs=4" target="_blank">
          <div class="intro-master__linkicon">
            <img src="../assets/images/icon_notion.svg" alt="노션 이미지"/>
          </div>
        </a>
        <a class="intro-master__link" href="https://kcong0505.tistory.com/" target="_blank">
          <div class="intro-master__linkicon">
            <img src="../assets/images/icon_tstory2.png" alt="블로그 이미지"/>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  import { ref } from 'vue';
  import baseTime from '@/components/BaseTime.vue';

  export default {
    name: 'introMaster.vue',
    components: {
      baseTime,
    },
    props: {
    },
    setup() {
      const phoneOn = ref(false)
      const phoneBtn = () => {
        phoneOn.value = !phoneOn.value
      };

      const mailOn = ref(false);
      const mailBtn =() => {
        mailOn.value = !mailOn.value
      }
      return {
        phoneBtn,
        mailBtn,
        phoneOn,
        mailOn,
      };
    }
  }


</script>

<style lang="scss">
  .intro-master {
    padding-top: 5rem;
    &__intro {
      display: flex;
      gap: 5rem;
    }
    &__img {
      flex: 1.5;
      > img {
        width: 100%;
        object-fit: contain;
      }
    }
    &__info {
      flex: 1;
      padding-top: 10rem;
    }
    &__name {
      display: block;
      margin-bottom: 3rem;
      font-size: 6rem;
      font-weight: 700;
    }
    &__personal {
      display: flex;
      margin-top: 6rem;
    }
    &__iconbox {
      display: flex;
      align-items: center;
      gap: 1rem;
      font-size: 2.5rem;
    }
    &__iconbox + &__iconbox {
      &::before {
        content: '';
        display: inline-block;
        border-left: 1px solid #000;
        width: 1px;
        height: 4rem;
        vertical-align: middle;
        padding-left: 2rem;
        margin-left: 2rem;
      }
    }
    &__icon {
      display: block;
      width: 7rem;
      height: 7rem;
    }
    &__icontxt {
      display: block;
      margin-top: 2rem;
      font-size: 3rem;
      font-weight: 500;
    }
    &__send {
      display: inline-block;
      border-bottom: 1px solid;
      color: #00008b;
    }
    &__icontxt + &__icontxt {
      margin-top: 2rem;
    }
    &__list {
      padding: 5rem 0 2rem;
      li {
        position: relative;
        padding-left: 2rem;
        font-size: 3.5rem;
        line-height: 4rem;
        &::before {
          content: "";
          width: 0.8rem;
          height: 0.8rem;
          border-radius: 50%;
          background-color: #333;
          position: absolute;
          top: 1.8rem;
          left: 0;
        }
      }
      li + li {
        margin-top: 2rem;
      }
    }
    &__linkcont {
      display: flex;
      align-items: center;
      justify-content: right;
      padding: 5rem 2rem 0;
    }
    &__link + &__link {
      padding-left: 5rem;
    }
    &__link {
      display: block;
    }

    &__linkicon {
      width: 16rem;
      > img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
  }

.fade-enter-from {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 5s cubic-bezier(0.22, 0.61, 0.36, 1);
}
.fade-leave-to {
  opacity: 0;
}

</style>