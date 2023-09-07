<template>
  <div class="history-list">
    <h2 class="history-list__tit">포트폴리오</h2>
    <span class="history-list__swiperdesc">이미지를 클릭하시면 세부내용을 확인 할 수 있습니다.</span>
    <swiper
      :modules="modules"
      :pagination="{
        el: '.history-list__swiper-pagination',
        bulletClass: 'history-list__swiper-bullet',
        bulletActiveClass:'history-list__swiper-bullet--active',
        clickable: true,
      }"
    >
    <swiper-slide v-for="(item, index) in swiperItem" :key="index">
      <historyItem
        :historyImg = "item.historyImg"
        :imgDesc = "item.imgDesc"
        :tag = "item.tag"
        :tit ="item.tit"
        @handleClick="handleClick(index)"
      />
    </swiper-slide>
      <!-- <swiper-slide>
        <button type="button" class="history-list__slide" @click="isHecto">
          <div class="history-list__img">
            <img src="../assets/images/img_hecto.png" alt="헥토헬스케어 이미지">
          </div>
          <span class="history-list__imgdesc">헥토헬스케어 홈페이지 이미지입니다. (관련 어플은 10월 초 오픈예정)</span>
        </button>
        <span class="history-list__project-tag">모바일</span>
        <span class="history-list__project-tit"> 헥토헬스케어 구축</span> 
      </swiper-slide>
      <swiper-slide>
        <button type="button" class="history-list__slide" @click="isLg">
          <div class="history-list__img">
            <img src="../assets/images/img_lg.png" alt="LG.com 이미지">
          </div>
        </button>
        <span class="history-list__project-tag">웹사이트(반응형)</span>
        <span class="history-list__project-tit">LG.com GP1 2차 구축</span> 
      </swiper-slide>
      <swiper-slide>
        <div class="history-list__slide">
          <div class="history-list__img">
            <img src="../assets/images/img_aplus.png" alt="에이플러스 이미지">
          </div>
        </div>
        <span class="history-list__project-tag">웹 사이트, 모바일(태블릿 전용)</span>
        <span class="history-list__project-tit">에이플러스 의전관리시스템 구축</span> 
      </swiper-slide>
      <swiper-slide>
        <div class="history-list__slide">
          <div class="history-list__img">
            <img src="../assets/images/img_sds.png" alt="삼성sds 이미지">
          </div>
        </div>
        <span class="history-list__project-tag">웹 사이트</span>
        <span class="history-list__project-tit">삼성sds 운영</span> 
      </swiper-slide>
      <swiper-slide>
        <div class="history-list__slide">
          <div class="history-list__img">
            <img src="../assets/images/img_kf.png" alt="한국국제류재단 이미지">
          </div>
        </div>
        <span class="history-list__project-tag">웹 사이트</span>
        <span class="history-list__project-tit">한국국제류재단 운영</span> 
      </swiper-slide> -->
    </swiper>
    <div class="history-list__swiper-pagination"></div>

    <!-- hecto 세부내용 -->
    <div v-show="activeIndex === list" v-for="(box, list) in descItem" :key="list" class="history-list__detail">
      <span class="history-list__project-date">{{ box.date }}</span>
      <span class="history-list__project-personnel">{{ box.personnel }}</span>
      <span class="history-list__project-desc" v-html="box.desc"></span>
    </div>
    <!-- <span class="history-list__project-date">2023.05 ~ 2023.08</span>
      <span class="history-list__project-personnel">개발 인원 : 프론트 2명, 백 6명(고객사)</span>
      <span class="history-list__project-desc">        
        양방향 바인딩이 가능한 뷰의 장점을 살려 자주 사용되는 요소(제품 슬라이드, 배송 현황 바, 그래프 등)들은 <strong>컴포넌트로 제작</strong>하여 코드 재사용률을 높혔다. <br />총 130 페이지 중 75% 개발
      </span> -->
    <!-- lg 세부내용 -->
    <!-- <div v-if="openLG" class="history-list__detail">
      <span class="history-list__project-date">2023.04</span>
      <span class="history-list__project-personnel">개발 인원 : 프론트 5명</span>
      <span class="history-list__project-desc">        
        언어별 디자인에 따라 코드 개발 하였으며, 9개국 중 호주와 멕시코를 담당, UK의 카트, checkout, search, Quick menu, About LG 페이지 수정을 담당<br />
        <br />PUG를 사용하며 <strong>mixin을 통해 코드 간소화</strong>를 진행하였다
      </span>
    </div> -->
  </div>
</template>

<script setup>
import { ref } from 'vue'
import historyItem from '@/components/HistoryItem.vue'
import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'

const modules = [Pagination]

const activeIndex = ref(0);
const handleClick = (index) => {
  activeIndex.value = index;
} 

const swiperItem = ([
  {
    historyImg: 'img_hecto',
    imgDesc: '헥토헬스케어 홈페이지 이미지입니다. (관련 어플은 10월 초 오픈예정)',
    tag: '모바일',
    tit: '헥토헬스케어 구축',
  },
  {
    historyImg: 'img_lg',
    tag: '웹사이트(반응형)',
    tit: 'LG.com GP1 2차 구축',
  },
])
const descItem = ref ([
  {
    date: '2023.05 ~ 2023.08',
    personnel: '개발 인원 : 프론트 2명, 백 6명(고객사)',
    desc: '양방향 바인딩이 가능한 뷰의 장점을 살려 자주 사용되는 요소(제품 슬라이드, 배송 현황 바, 그래프 등)들은 <strong>컴포넌트로 제작</strong>하여 코드 재사용률을 높혔다. <br />총 130 페이지 중 75% 개발',
  },
  {
    date: '2023.04',
    personnel: '개발 인원 : 프론트 5명',
    desc: '언어별 디자인에 따라 코드 개발 하였으며, 9개국 중 호주와 멕시코를 담당, UK의 카트, checkout, search, Quick menu, About LG 페이지 수정을 담당 <br />PUG를 사용하며 <strong>mixin을 통해 코드 간소화</strong>를 진행하였다',
  },
])

// const openHecto = ref(false)
// const isHecto = () => {
//   openHecto.value = !openHecto.value
// }
// const openLG = ref(false)
// const isLg = () => {
//   openLG.value = !openLG.value
// }


</script>


<style lang="scss" scoped>
.history-list {
  position: relative;
  padding: 10rem 4rem 17rem;
  &__tit {
    font-size: 6rem;
    font-weight: 600;
  }
  &__swiperdesc {
    display: block;
    margin: 7rem 0 3rem;
    font-size: 2.5rem;
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
  
  &__detail {
    padding-left: 2rem;
    margin-top: 1rem;
  }
  // hecto 세부내용
  &__project-date {
    display: block;
    font-size: 3rem;
  }
  &__project-personnel {
    display: block;
    margin-top: 4rem;
    font-size: 3.2rem;
  }
  &__project-desc {
    display: block;
    margin-top: 3rem;
    line-height: 4.5rem;
    font-size: 3.2rem;
    strong {
      font-weight: 700;
    }
  }
}


</style>