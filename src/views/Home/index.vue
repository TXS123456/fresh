<template>
  <div id="home">
    <div class="search">
      <i class="iconfont" @click="handlesite">&#xe7ea;上海</i>
      <div class="input">
        <i class="iconfont">&#xe517;</i>
        <b>请搜索你感兴趣的商品</b>
      </div>
      <i class="iconfont">&#xe601;</i>
    </div>
    <Homebanner />
    <Homenotice />
    <Homeitem />
    <div class="bailing">
      <img src="@/assets/1.jpg" />
    </div>
    <Homeproduct />
    <Homewell />
    <Homepulp />
    <div class="menu">
      <div class="move" @click="handle">
       <span>全商部品</span>
        </div>
      </div>
      <div class="list" @click="handleov" ref="shop">
        <div class="move-list">
          <a>全商部品</a>
        </div>
        <div class="move-list">
          <a>海原外包</a>
        </div>
        <div class="move-list">
          <a>国精内品</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vuex from "vuex";
import Homebanner from "@/components/Homebanner";
import Homenotice from "@/components/Homenotice";
import Homeitem from "@/components/Homeitem";
import Homeproduct from "@/components/Homeproduct";
import Homewell from "@/components/Homewell";
import Homepulp from "@/components/Homepulp";
export default {
  name: "Home",
  components: {
    Homebanner,
    Homenotice,
    Homeitem,
    Homeproduct,
    Homewell,
    Homepulp
  },
  methods: {
    handle(){
     // console.log(111)
    },
    handleov() {
      // console.log(22);
      $(".list").addClass("animated fadeOutRight");
    },
    handlesite(){
     this.$router.push("/site")
    }
  }
};
</script>
<style scope lang="scss">
.search {
  width: 100%;
  height: 1.12rem;
  background: #fff;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 99;
  .iconfont {
    font-size: 0.3rem;
  }
  .input {
    width: 5rem;
    height: 0.8rem;
    display: flex;
    align-items: center;
    .iconfont {
      font-size: 0.3rem;
    }
    b {
      margin-left: 0.1rem;
      font-size: 0.3rem;
      color: #ccc;
    }
  }
}
.bailing {
  width: 100%;
  height: 1.62rem;
  img {
    width: 6.86rem;
    height: 1.62rem;
    margin: 0 auto;
  }
}
.move {
  position: fixed;
  z-index: 110;
  left: 7rem;
  bottom: 1.2rem;
  width:1rem;
  height:1rem;
  border-radius: 50%; 
  background-image: -webkit-linear-gradient(right, #66bdf8, #0091f3);
  background-image: linear-gradient(-90deg, #66bdf8, #0091f3);
  color: #fff;
  font-size: 0.28rem;
  padding: 0.1rem 0.22rem;
  box-sizing: border-box;
  line-height: 0.4rem;
  .move-list {
    width: 2.5rem;
    height: 1rem;
    margin-left: 0.8rem;
    a {
      display: block;
      width: 1rem;
      height: 1rem;
      border-radius: 50%;
      background-image: -webkit-linear-gradient(right, #66bdf8, #0091f3);
      background-image: linear-gradient(-90deg, #66bdf8, #0091f3);
      color: #fff;
      font-size: 0.28rem;
      padding: 5px 11px;
      box-sizing: border-box;
      line-height: 0.4rem;
      text-align: center;
    }
  }
}
.list {
  width: 100%;
  height: 1rem;
  position: fixed;
  z-index: 110;
  left: 0;
  right: 0;
  bottom: 0.92rem;
  height: 1.4rem;
  padding: 10px 0;
  box-sizing: border-box;
  background: hsla(0, 0%, 100%, 0.7);
  display: flex;
  justify-content: space-around;
  align-items: center;

  .move-list {
    width: 2.5rem;
    height: 1rem;
    margin-left: 0.8rem;
    a {
      display: block;
      width: 1rem;
      height: 1rem;
      border-radius: 50%;
      background-image: -webkit-linear-gradient(right, #66bdf8, #0091f3);
      background-image: linear-gradient(-90deg, #66bdf8, #0091f3);
      color: #fff;
      font-size: 0.28rem;
      padding: 5px 11px;
      box-sizing: border-box;
      line-height: 0.4rem;
      text-align: center;
    }
  }
}
</style>

