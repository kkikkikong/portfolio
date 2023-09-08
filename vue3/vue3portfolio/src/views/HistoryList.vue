<template>
  <div class="history-list">
    <h2 class="history-list__tit">포트폴리오</h2>
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
        <div v-show="activeIndex === list && activeIndex == index" v-for="(box, list) in descItem" :key="list" class="history-list__detail">
          <span class="history-list__project-date">{{ box.date }}</span>
          <span class="history-list__project-personnel">{{ box.personnel }}</span>
          <span class="history-list__project-desc" v-html="box.desc"></span>
        </div>
      </swiper-slide>
    </swiper>
    <div class="history-list__swiper-pagination"></div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import historyItem from '@/components/HistoryItem.vue'
import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'

const props = defineProps ({
  swiperItem: {
    type: Array,
    default: [],
  },
  descItem: {
    type: Array,
    default: [], 
  }, 
})

const modules = [Pagination]

const activeIndex = ref(-1);
const handleClick = (index) => {
  if (activeIndex.value === index) {
    activeIndex.value = -1; // 클릭한 항목이 이미 선택된 상태라면 숨김 처리
  } 
  else {
    activeIndex.value = index;
  }
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
  {
    historyImg: 'img_aplus',
    tag: '웹 사이트, 모바일(태블릿 전용)',
    tit: '에이플러스 의전관리시스템 구축',
  },
  {
    historyImg: 'img_sds',
    tag: '웹사이트(반응형)',
    tit: '삼성sds 운영',
  },
  {
    historyImg: 'img_kf',
    tag: '웹사이트(반응형)',
    tit: '한국국제류재단 운영',
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
  {
    date: '2022.12 ~ 2023.01',
    personnel: '개발 인원 : 프론트 2명',
    desc: '자바스크립트(document.write)를 사용하여 화면 출력하는 방식으로 개발 진행함으로 반복적인 <strong>컴포넌트를 재사용</strong>할 수 있게 <strong>구조화</strong>',
  },
  {
    date: '2022.11 ~ 2022.12',
    personnel: '개발 인원 : 프론트 3명, 백 3명',
    desc: '분기별로 변경되는 페이지 개발과 신규 서비스(웨비나) 개발을 진행하였다.<br /><strong>슬라이더 별 Option들</strong>과 <strong>JSON 구조</strong>에 대한 이해도를 높혔다.',
  },
  {
    date: '2022.09 ~ 2023.08',
    personnel: '개발 인원 : 프론트 1명, 백 2명',
    desc: '<strong>메인페이지 유지보수</strong> (디자인 변경 및 SNS 노출 화면 변경 등) 공고 및 게시물 업로드 등을 진행하였으며, 월별 월간아세안문화원 <strong>웹진 퍼블리싱</strong>, 분기별로는 코리아나 <strong>개간지 퍼블리싱</strong>(11개국, 총 게시물 약 200건)을 진행 하였다.',
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
  padding: 10rem 4rem 12rem;
  &__tit {
    font-size: 6rem;
    font-weight: 600;
    margin-bottom: 5rem;
  }
  &__swiper-pagination {
    position: absolute;
    bottom: 4rem;
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
  // 세부내용
  &__project-date {
    display: block;
    font-size: 3rem;
    margin-top: 1.5rem;
  }
  &__project-personnel {
    display: block;
    margin-top: 4rem;
    font-size: 3.2rem;
  }
  &__project-desc {
    display: block;
    margin-top: 3rem;
    line-height: 4.7rem;
    font-size: 3.2rem;
    &:deep(strong) {
      font-weight: 700;
    }
  }
}


</style>