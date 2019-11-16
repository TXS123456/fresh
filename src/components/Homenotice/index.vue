<template>
<div>
  <div class="notice">
    <div class="notice-left">
      <p>极鲜</p>
      <div class="news">公告</div>
    </div>
    <div class="notice-middle">
      <div class="news_box">
        <div class="inner-container">
          <p class="text" v-for="(item,index) in newslist" :key="index">
              {{item.title}}
          </p>
        </div>
      </div>
    </div>
    <div class="notice-right">
       <span>更多 </span>
       <i class="iconfont">&#xe61b;</i>
    </div>
  </div>
</div>
</template>
<script>
import Vuex from "vuex";
export default {
  name: "notice",
  created() {
    this.getHomenotice();
  },
  computed: {
    ...Vuex.mapState({
      newslist: state => state.Home.newslist
    })
  },

  methods: {
    ...Vuex.mapActions({
      getHomenotice: "Home/getactionHomenotice"
    }),
  }
};
</script>

<style lang="scss" scoped>
.notice {
  width: 100%;
  height: 0.94rem;
  display: flex;
  .notice-left {
    width: 1.2rem;
    height: 0.64rem;
    margin-left: 0.3rem;
    padding-top: 0.1rem;
    .news {
      width: 0.56rem;
      height: 0.32rem;
      background: linear-gradient(90deg, #ff4081, #ff9800);
      margin-top: 0.1rem;
      color: #fff;
    }
  }
}
.notice-middle {
  width: 5.16rem;
  height: 0.94rem;
}
  .inner-container {
    animation: myMove 10s linear infinite;
    animation-fill-mode: forwards;
  }
  /*文字停顿滚动*/
  @keyframes myMove {
    0% {
    transform: translateY(0);
  }
  10% {
    transform: translateY(-30px);
  }
  20% {
    transform: translateY(-30px);
  }
  30% {
    transform: translateY(-60px);
  }
  40% {
    transform: translateY(-60px);
  }
  50% {
    transform: translateY(-90px);
  }
  60% {
    transform: translateY(-90px);
  }
  70% {
    transform: translateY(-120px);
  }
  80% {
    transform: translateY(-120px);
  }
  90% {
    transform: translateY(-150px);
  }
  100% {
    transform: translateY(-150px);
  }
  }

  .text {
    white-space: nowrap;
    overflow: hidden;
    font-size:26px;
  }

  .news_box {
    height:0.29rem;
    white-space: nowrap;
    overflow: hidden;
    margin-top: 0.2rem;
  }
.notice-right{
    width: 0.76rem;
    height: 100%;
    padding-top:0.3rem;
}
</style>

