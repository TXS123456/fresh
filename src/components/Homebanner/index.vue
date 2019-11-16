<template>
     <div class="banner">
      <div class="swiper-container banner-container" ref="banner_container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item,index) in banners" :key="index">
            <img :src="item.filePath" />
          </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination banner-pagination"></div>
      </div>
    </div>
 </template>
     
<script>
  
  import Vuex from "vuex";
  import Swiper from "swiper";
  import "swiper/dist/css/swiper.css"; 

export default {
  name: "Home",
  created() {
    this.getHomebanner()
  },
  computed: {
    ...Vuex.mapState({
      banners: state => state.Home.banners,
      
    }),
  },
  methods: {
    ...Vuex.mapActions({
      getHomebanner: "Home/getactionHomebanner",
    })
  },
  watch: {
    banners() {
      this.$nextTick(() => {
        new Swiper(this.$refs.banner_container, {
          loop: true,
          autoplay: {
            disableOnInteraction: false
          },
          pagination: {
            el: ".banner-pagination"
          }
        });
      });
    }
  },
  mounted() {}
};
</script>

<style scoped lang="scss">
.banner {
  width: 100%;
  height: 3.6rem;
  margin-top: 1.12rem;
}
</style>


