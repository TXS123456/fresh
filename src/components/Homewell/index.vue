<template>
  <div class="well">
    <div class="product-limit">
      <span>猜你喜欢</span>
      <b>
        更多
        <i class="iconfont">&#xe61b;</i>
      </b>
    </div>
     <div class="swiper-container product-middle" ref="product_container">
      <div class="swiper-wrapper person-list">
        <div class="swiper-slide productlist">
          <div class="now">{{welllist.quoteList[0].sendDate}}</div>
          <img :src="welllist.quoteList[0].imgUrl" />
          <div class="Boutique">海外原包</div>
          <div class="productlist-price">
            <p>{{welllist.quoteList[0].name}}</p>
            <span>￥{{welllist.quoteList[0].unitPrice}}/{{welllist.quoteList[0].unitName}}</span>
          </div>
        </div>
        <div class="swiper-slide productlist">
          <div class="now">{{welllist.quoteList[1].sendDate}}</div>
          <img :src="welllist.quoteList[1].imgUrl" />
          <div class="Boutique">海外原包</div>
          <div class="productlist-price">
            <p>{{welllist.quoteList[1].name}}</p>
            <span>￥{{welllist.quoteList[1].unitPrice}}/{{welllist.quoteList[1].unitName}}</span>
          </div>
        </div>
        <div class="swiper-slide productlist">
          <div class="now">{{welllist.quoteList[2].sendDate}}</div>
          <img :src="welllist.quoteList[2].imgUrl" />
          <div class="Boutique">海外原包</div>
          <div class="productlist-price">
            <p>{{welllist.quoteList[2].name}}</p>
            <span>￥{{welllist.quoteList[2].unitPrice}}/{{welllist.quoteList[2].unitName}}</span>
          </div>
        </div>
        <div class="swiper-slide productlist">
          <div class="now">{{welllist.quoteList[3].sendDate}}</div>
          <img :src="welllist.quoteList[3].imgUrl" />
          <div class="Boutique">海外原包</div>
          <div class="productlist-price">
            <p>{{welllist.quoteList[3].name}}</p>
            <span>￥{{welllist.quoteList[3].unitPrice}}/{{welllist.quoteList[3].unitName}}</span>
          </div>
        </div>
        <div class="swiper-slide productlist">
          <div class="now">{{welllist.quoteList[4].sendDate}}</div>
          <img :src="welllist.quoteList[4].imgUrl" />
          <div class="Boutique">海外原包</div>
          <div class="productlist-price">
            <p>{{welllist.quoteList[4].name}}</p>
            <span>￥{{welllist.quoteList[4].unitPrice}}/{{welllist.quoteList[4].unitName}}</span>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
import Vuex from "vuex";
import Swiper from "swiper";
export default {
     name:"well",
     created () {
       this.getHomewell();
     },
     computed: {
       ...Vuex.mapState({
         welllist:state=>state.Home.welllist
       })
     },
     methods: {
       ...Vuex.mapActions({
          getHomewell:"Home/getactionsHomewell"
       })
     },
     updated() {
    if (!this.swiper) {
      (this.swiper = new Swiper(this.$refs.product_container)),
        {
         watchSlidesProgress : true,
        };
    }
  }
};
</script>
<style lang="scss" scoped>
.well {
  width: 100%;
  height: 5.28rem;
  .product-limit {
    width: 100%;
    height: 1.12rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  span {
    font-size: 0.42rem;
    font-weight: 900;
  }
  b {
    margin-right: 0.2rem;
  }
   .product-middle {
    .person-list {
      display: flex;
      .productlist {
        width: 2.76rem !important;
        height: 3.84rem;
        position: relative;
        margin-right:0.3rem; 
        .now {
          position: absolute;
          top: 0.1rem;
          left: 0.1rem;
          text-align: center;
          font-size: 0.3rem;
          height: 0.44rem;
          color: #fff;
          border-top-right-radius: 0.22rem;
          border-bottom-right-radius: 0.22rem;
          background-image: -webkit-linear-gradient(left, #66bdf8, #0091f3);
          background-image: linear-gradient(90deg, #66bdf8, #0091f3);
          min-width: 0.8rem;
          font-weight: 600;
        }
        img {
          width: 2.76rem;
          height: 2.76rem;
        }
        .Boutique {
          position: absolute;
          left: 0.3rem;
          bottom: 1.2rem;
        }
        .productlist-price {
          width: 2.76rem;
          height: 1.04rem;
          p {
            margin-left: 0.2rem;
          }
          span {
            font-size: 0.3rem;
            margin-left: 0.1rem;
            margin-top: 0.2rem;
          }
        }
      }
    }
  }
}
</style>

