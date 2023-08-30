<template>
  <div class="base-time">{{ timeCont }}</div>
</template>

<script>

  export default {
    name: 'baseTime',
    props: {
    },
    data() {
      return {
        timeCont: '',
      };
    },
    mounted() {
      this.updateTime();
      setInterval(this.updateTime, 1000);
    },
    methods: {
      updateTime() {
        const now = new Date();
        let hours = now.getHours();
        let minutes = now.getMinutes();
        if (hours > 12) {
          hours = hours - 12;
        }
        if (minutes < 10) {
          minutes = '0' + minutes;
        }
        this.timeCont = hours + ':' + minutes;
      },
    },
  };

</script>

<style lang="scss">

.base-time {
  color: #333;
  font-size: 4rem;
  font-weight: 500;
}
</style>