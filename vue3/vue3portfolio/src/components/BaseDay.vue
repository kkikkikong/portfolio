<template>
  <div class="base-day">{{ dayCont }}</div>
</template>

<script>

  export default {
    name: 'baseDay',
    props: {
    },
    data() {
      return {
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
        let month = now.getMonth();
        let date = now.getDate();
        let day = now.getDay();
        if (month < 10) {
          month = '0' + month;
        }
        if (date < 10) {
          date = '0' + date;
        }
        const daysOfWeek = ['일', '월', '화', '수', '목', '금', '토'];
        day = daysOfWeek[day];

        this.dayCont = month + '월 ' + date + '일 ' + day + '요일';
      },
    },
  };

</script>

<style lang="scss">

.base-day {
  color: #595959;
  font-size: 5rem;
  font-weight: 600;
  padding: 1rem 0 0 1rem;
}
</style>