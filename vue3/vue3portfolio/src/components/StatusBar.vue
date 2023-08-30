<template> 
  <div class="status-bar">
    <baseTime />
    <div class="status-bar__iconbox">
      <div class="status-bar__icon">
        <img src="../assets/images/icon_connect.png" alt="연결 표시 아이콘" />
      </div>
      <div class="status-bar__icon">
        <img src="../assets/images/icon_wifi.png" alt="와이파이 아이콘" />
      </div>
      <div class="status-bar__icon status-bar__icon--battery">
        <img src="../assets/images/icon_battery.png" alt="배터리 아이콘" />
      </div>

    </div>
  </div>
</template>

<script>
import baseTime from '@/components/BaseTime.vue';

export default {
  name: 'statusBar',
  components: {
    baseTime,
  },
  props: {
    tabLabel: {
      type: String,
      default: '',
    }
  },
}
</script>
<style lang="scss">
  .status-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 2rem;
    &__iconbox {
      display: flex;
      align-items: center;
      gap: 1rem;
    }
    &__icon {
      > img {
        width: 4.5rem;
        height: auto;
        object-fit: contain;
      }
      &--battery {
        > img {
          width: 6rem;
          height: auto;
        }
      }
    }
  }

</style>

