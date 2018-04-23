<template>
  <div id="app">

    <v-header></v-header>

    <router-view/>
  </div>
</template>

<script>
import header from './components/vheader.vue';
export default {
  name: 'app',
  components: {
    'v-header': header
  }
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
