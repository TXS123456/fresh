<template>
  <div id="footer">
      <ul>
    <Router-link v-for="(item,index) in Tabbar" :key="index" tag="li" :to="item.path">
      <i class="iconfont" v-html="item.icon"></i>
      <span>{{item.title}}</span>
    </Router-link>
      </ul>
  </div>
</template>
<script>
export default {
  name: "tabbar",
  data() {
    return {
      Tabbar: [
        {
          title: "首页",
          path: "/home",
          icon: "&#xe505"
        },
        {
          title: "分类",
          path: "/classify",
          icon: "&#xe506"
        },
        {
          title: "我的预订",
          path: "/reserve",
          icon: "&#xe641"
        },
        {
          title: "购物车",
          path: "/shoppcar",
          icon: "&#xe502"
        },
        {
          title: "我的",
          path: "/mine",
          icon: "&#xe512"
        }
      ]
    };
  }
};
</script>

<style scoped lang="scss">
   $color:#0463de;
    #footer{
            width: 100%;
            height: 1rem;
            position:fixed;
            background: #fff;
            left:0;
            bottom:0;
            border-top: 1px solid #ccc;
            z-index:999;
            ul{
                width:100%;
                height:100%;
                display: flex;
                justify-content:space-around;
                align-items: center;
                li{
                    width: 100%;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    color: #333;
                    font-size: .3rem;
                } 
            }
    }
    #footer>ul>li>span{
        display: block;
        text-align: center;
        padding-top:.1rem;   
    }
    #footer>ul>li>i{
        font-size: .4rem;
        text-align: center;
    }
    #footer>ul .router-link-active{
        color:$color;
    }
</style>

