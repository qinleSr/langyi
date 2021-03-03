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
  },
  mounted(){
	let start = window.location.href.lastIndexOf('/');
	let path = window.location.href.slice(start+1);
	this.activeIndex = path;
}
}
</script>
<style>

</style>
