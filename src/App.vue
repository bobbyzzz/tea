<template>
  <div id="app">
    <headerNav></headerNav>
    <router-view></router-view>
    <myFooter></myFooter>
  </div>
</template>

<script>
import myFooter from './components/footer'
import headerNav from './components/headernav'
export default {
  name: 'app',
  components: {
    myFooter,
    headerNav
  }
}
</script>

<style>
@import './statics/css/base.css'
</style>
