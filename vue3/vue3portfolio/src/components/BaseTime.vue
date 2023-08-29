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
  color: #595959;
  font-size: 3.5rem;
  padding: 1rem 0 0 1rem;
}
</style>