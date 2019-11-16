<template>
  <div class="product">
    <div class="product-limit">
      <span>{{productlimit.actName}}</span>
      <b>
        更多
        <i class="iconfont">&#xe61b;</i>
      </b>
    </div>

    <div class="swiper-container product-middle" ref="product_container">
      <div class="swiper-wrapper person-list">
        <div class="swiper-slide productlist">
          <div class="now">{{productlimit.products[0].sendDate}}</div>
          <img :src="productlimit.products[0].imgUrl" />
          <div class="Boutique">国内精品</div>
          <div class="productlist-price">
            <p>{{productlimit.products[0].name}}</p>
            <span>￥{{productlimit.products[0].unitPrice}}/{{productlimit.products[0].unitName}}</span>
          </div>
        </div>
        <div class="swiper-slide productlist">
          <div class="now">{{productlimit.products[1].sendDate}}</div>
          <img :src="productlimit.products[1].imgUrl" />
          <div class="Boutique">国内精品</div>
          <div class="productlist-price">
            <p>{{productlimit.products[1].name}}</p>
            <span>￥{{productlimit.products[1].unitPrice}}/{{productlimit.products[1].unitName}}</span>
          </div>
        </div>
        <div class="swiper-slide productlist">
          <div class="now">{{productlimit.products[2].sendDate}}</div>
          <img :src="productlimit.products[2].imgUrl" />
          <div class="Boutique">国内精品</div>
          <div class="productlist-price">
            <p>{{productlimit.products[2].name}}</p>
            <span>￥{{productlimit.products[2].unitPrice}}/{{productlimit.products[2].unitName}}</span>
          </div>
        </div>
        <div class="swiper-slide productlist">
          <div class="now">{{productlimit.products[3].sendDate}}</div>
          <img :src="productlimit.products[3].imgUrl" />
          <div class="Boutique">国内精品</div>
          <div class="productlist-price">
            <p>{{productlimit.products[3].name}}</p>
            <span>￥{{productlimit.products[3].unitPrice}}/{{productlimit.products[3].unitName}}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- 好货限时抢 -->
    <div class="product-limit">
      <span>{{productlimit1.actName}}</span>
      <b>
        更多
        <i class="iconfont">&#xe61b;</i>
      </b>
    </div>
    <div class="swiper-container product-middle" ref="product_container">
      <div class="swiper-wrapper person-list">
        <div class="swiper-slide productlist">
          <div class="now">{{productlimit1.products[0].sendDate}}</div>
          <img :src="productlimit1.products[0].imgUrl" />
          <div class="Boutique">海外原包</div>
          <div class="productlist-price">
            <p>{{productlimit1.products[0].name}}</p>
            <span>￥{{productlimit1.products[0].unitPrice}}/{{productlimit1.products[0].unitName}}</span>
          </div>
        </div>
        <div class="swiper-slide productlist">
          <div class="now">{{productlimit1.products[1].sendDate}}</div>
          <img :src="productlimit1.products[1].imgUrl" />
          <div class="Boutique">海外原包</div>
          <div class="productlist-price">
            <p>{{productlimit1.products[1].name}}</p>
            <span>￥{{productlimit1.products[1].unitPrice}}/{{productlimit1.products[1].unitName}}</span>
          </div>
        </div>
        <div class="swiper-slide productlist">
          <div class="now">{{productlimit1.products[2].sendDate}}</div>
          <img :src="productlimit1.products[2].imgUrl" />
          <div class="Boutique">海外原包</div>
          <div class="productlist-price">
            <p>{{productlimit1.products[2].name}}</p>
            <span>￥{{productlimit1.products[2].unitPrice}}/{{productlimit1.products[2].unitName}}</span>
          </div>
        </div>
        <div class="swiper-slide productlist">
          <div class="now">{{productlimit1.products[3].sendDate}}</div>
          <img :src="productlimit1.products[3].imgUrl" />
          <div class="Boutique">海外原包</div>
          <div class="productlist-price">
            <p>{{productlimit1.products[3].name}}</p>
            <span>￥{{productlimit1.products[3].unitPrice}}/{{productlimit1.products[3].unitName}}</span>
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
  name: "product",
  created() {
    this.getHomeproduct();
  },
  computed: {
    ...Vuex.mapState({
      productlimit: state => state.Home.productlimit,
      productlimit1: state => state.Home.productlimit1
    })
  },
  methods: {
    ...Vuex.mapActions({
      getHomeproduct: "Home/getactionsHomeproduct"
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
.product {
  width: 100%;
  height:10.56rem;
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

