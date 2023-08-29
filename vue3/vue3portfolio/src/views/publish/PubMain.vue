<template>
  <div>
    <div class="base-tab base-tab">
      <baseTab 
        :class="`${tabPanel === index ? 'base-tab__btn--active' : ''}`"
        v-for="(tab, index) in tabList"
        :key="index"
        :tabLabel="tab.label"
        @click="isTab(index)"
      />
    </div>
    <div v-if="tabPanel === 0" class="tab-panel">11111</div>
    <div v-if="tabPanel === 1" class="tab-panel">22222</div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import baseTab from '@/components/BaseTab.vue'

const tabPanel = ref(0)
const isTab = (index) => {
  tabPanel.value = index
}

const tabList = ref([
  {
    label:'aaa',
  },
  {
    label: 'bbbb',
  },
])
</script>


<style lang="scss" scoped>

</style>