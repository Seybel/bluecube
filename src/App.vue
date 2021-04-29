<template>
  <div id="app">
    <div class="md-layout">
      <Sidebar />
      <Home />
    <!-- <div class="md-layout-item">2</div>
    <div class="md-layout-item">3</div> -->
    </div>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar'
import Home from './components/Home'

export default {
  name: 'App',
  components: {
    Sidebar,
    Home
  }
}
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Material+Icons");
@import url('https://fonts.googleapis.com/css2?family=Martel+Sans&display=swap');

body {
  background: #fff;
}
#app {
  font-family: 'Martel Sans', sans-serif;
}
// .vl {
//   border-left: 6px solid green !important;
//   height: 500px !important;
// }
</style>
