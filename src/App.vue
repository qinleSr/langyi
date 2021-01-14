<template>
  <div id="app">
     <!-- <nav-bar/> -->
    <router-view/>
  </div>
</template>
<script>
import "element-ui/lib/theme-chalk/index.css";
import navBar from './components/navBar/navBar'
export default {
  name:'app',
  components:{
    navBar
  }
}
</script>
<style>
 
</style>
