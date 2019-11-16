<template>
  <div id="app">
    <keep-alive>
   <router-view/>
    </keep-alive>
     <Tabbar v-if="this.$route.meta.TabbarFlag"/>
  </div>
</template>
<script>
import Tabbar from "@/common/tabbar"
export default {
    name:"app",
    components:{
     Tabbar
    }
}
</script>

<style lang="scss">
 #app{
  width: 100%;
  height: 100%;
  overflow: auto;
  flex: 1;
}
</style>
