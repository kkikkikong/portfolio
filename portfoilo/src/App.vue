<template>
  <router-view></router-view>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  data() {
    return {
    }
  },
}
</script>


<style>
  nav {
    padding: 30px;
    display: flex;
    gap: 30px;
    background-color: #C2B28F;
    justify-content: center;
  }

  nav a {
    font-size: 30px;
    color: #E4D8B4;
    text-decoration : none;
  }

  nav a.router-link-exact-active {
    color: #272324;
    font-weight: 700;
  }
</style>
