<template>
  <div class="container">
    <div class="present-main">
      <h2 class="present-main__tit">Junior Developer <strong>유예나</strong></h2>
      <Swiper 
        class="present-main__swiper"
        :slidesPerView="1"
        :spaceBetween="30"
        :autoplay="{ delay: 1000 }"
        :loop = "true"
      >
        <swiper-slide class="swiper-slide">
          Frontend
        </swiper-slide>
        <swiper-slide class="swiper-slide">
          Vue3
        </swiper-slide>
        <swiper-slide class="swiper-slide">
          HTML / CSS
        </swiper-slide>
        <swiper-slide class="swiper-slide">
          Javascript
        </swiper-slide>
        <swiper-slide class="swiper-slide">
          Typescript
        </swiper-slide>
      </Swiper>
      <div class="present-main__swiper-pagination"></div>

      <div class="present-main__present">
        <div class="present-main__txtbox">
          <div class="present-main__gif">
            <img src="@/assets/images/yen_unscreen.gif" />
          </div>
          <span class="present-main__txt">오류를 해결해 냈을 때 느끼는 감정은
            <br /><strong>희열감</strong> 입니다.</span>
        </div>
      </div>
      
      <div class="present-main__desc">
      </div>

    </div>

  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/autoplay'

</script>

<style lang="scss" scoped>
.present-main {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  &__tit {
    text-align: center;
    font-size: 30px;
    margin-bottom: 40px;
    font-weight: 500;
    strong {
      font-weight: 700;
    }
  }
  &__gif {
    max-width: 300px;
  }
  &__present {
    background-color: #000;
    padding: 30px;
    border-radius: 20px;
  }
  &__txtbox {
    font-size: 20px;
    display: flex;
    align-items: center;
    gap: 20px;
  }
  &__swiper {
    font-size: 30px;
    max-width: 700px;
    margin-bottom: 50px;
  }
  &__txt {
    display: block;
    line-height: 40px;
    strong {
      font-weight: 700;
      font-size: 25px;
    }
  }
}
</style>
