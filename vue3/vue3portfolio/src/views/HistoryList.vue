<template>
  <div class="history-list">
    <h2 class="history-list__tit">포트폴리오</h2>
    <swiper
      :modules="modules"
      :slidesPerView="1"
      :centeredSlides="true"
      :pagination="{
        el: '.history-list__swiper-pagination',
        bulletClass: 'history-list__swiper-bullet',
        bulletActiveClass:'history-list__swiper-bullet--active',
        clickable: true,
      }"
    >
      <swiper-slide>
        <div class="history-list__slide">
          <div class="history-list__img">
            <img src="../assets/images/img_hecto.png" alt="헥토헬스케어 이미지">
          </div>
        </div>
        <span class="history-list__project-tag">앱</span>
        <div class="history-list__desc">
          <span class="history-list__project-tit"> 헥토헬스케어 구축 </span>
          <span class="history-list__project-date">2023.05 ~ 2023.09</span>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="history-list__slide">
          <div class="history-list__img">
            <img src="../assets/images/img_lg.png" alt="LG.com 이미지">
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="history-list__slide">
          <div class="history-list__img">
            <img src="../assets/images/img_aplus.png" alt="에이플러스 이미지">
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="history-list__slide">
          <div class="history-list__img">
            <img src="../assets/images/img_sds.png" alt="삼성sds 이미지">
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="history-list__slide">
          <div class="history-list__img">
            <img src="../assets/images/img_kf.png" alt="한국국제류재단 이미지">
          </div>
        </div>
      </swiper-slide>
    </swiper>
    <div class="history-list__swiper-pagination"></div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'

const modules = [Pagination]

</script>


<style lang="scss" scoped>
.history-list {
  position: relative;
  padding: 7rem 4rem;
  &__tit {
    font-size: 4rem;
    font-weight: 600;
  }
  .swiper {
    width: 90%;
    margin-top: 7rem;
  }
  &__swiper-pagination {
    position: absolute;
    bottom: 0;
    text-align: center;
    &:deep(.history-list__swiper-bullet) {
      display: inline-block;
      width: 1.6rem;
      height: 1.6rem;
      border-radius: 50%;
      background-color: #9a9a9a;
      margin: 0 0.8rem;
    }
    &:deep(.history-list__swiper-bullet--active) {
      background-color: #000;
    }
  }
  &__project-tag {
    display: inline-flex;
    background-color: #c8cffa;
    color: #3042e6;
    font-size: 3rem;
    border-radius: 1.5rem;
    padding: 0.5rem 1.5rem;
    margin: 3rem 0;
  }
  &__project-tit {
    display: block;
  }
  &__project-date {
    display: block;
  }
}


</style>