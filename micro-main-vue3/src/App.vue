<template>
  <div class="nav" v-if="token">    
  <div class="menu">      
    <router-link to="/">Parent Home</router-link>    
  </div>    
  <div class="menu">      
    <router-link to="/about">Parent About</router-link>    
  </div>
    <!--- 新添加 --->
  <div class="menu">      
    <router-link to="/micro-app-vue2">Child Home</router-link>    
  </div>    
  <div class="menu">      
    <router-link to="/micro-app-vue2/about">Child About</router-link>    
  </div>
</div>

<div class="container">   
  <div class="header" v-if="token">Main Header</div>   
  <div class="router-view">      
    <router-view />      
    <!-- 新添加，微应用的容器 -->      
    <div id="micro-container"></div>   
  </div>
</div>
</template>

<script>
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  setup() {
    const store = useStore();
    return {
      token: computed(() => store.state.token),
      isMain: computed(() => Boolean(window.__POWERED_BY_QIANKUN__))
    };
  }
});
</script>

<style>
#app {
  display: flex;
  width: 100%;
  height: 100%;
}
.nav {
  width: 300px;
  height: 100%;
  border-right: 2px solid red;
}
.menu{
  width: 100%;
  background: gray;
  margin-bottom: 10px;
  height: 30px;
}
.menu > a {
  color: white;
}
.container{
  flex: 1;
}
.header{
  background: #ada5a5;
  width: 100%;
  height: 50px;
  color: white;
}
</style>
