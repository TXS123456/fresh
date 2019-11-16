<template>
  <div>
    <div class="pulp-content" v-for="(item,index) in fishlist" :key="index">
      <div class="pic">
        <img :src="item.imgUrl" />
        <div class="hours">{{item.sendDate}}</div>
      </div>
      <div class="zi">
        <p>{{item.name}}({{item.cityName}}发货)</p>
        <span>
          已售:{{item.saledQty}}
          <b>{{item.specName}}{{item.grade}}</b>
        </span>
        <div class="price">
          <em>￥{{item.unitPrice}}/{{item.unitName}}</em>
          <div class="shop">
            <i class="iconfont">&#xe502;</i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Vuex from "vuex";
export default {
  name: "fish",
  created() {
    this.getHomefish();
  },
  computed: {
    ...Vuex.mapState({
      fishlist: state => state.Home.fishlist
    })
  },
  methods: {
    ...Vuex.mapActions({
      getHomefish: "Home/getactionsfish"
    })
  }
};
</script>
<style scoped lang="scss">
.pulp-content {
  width: 100%;
  height: 2.84rem;
  display: flex;
  justify-content: space-between;
  .pic {
    position: relative;
    img {
      width: 2.2rem;
      height: 2.2rem;
    }
    .hours {
      text-align: center;
      font-size: 0.2rem;
      height: 0.44rem;
      position: absolute;
      top: 4px;
      left: 0;
      color: #fff;
      line-height: 0.44rem;
      border-top-right-radius: 0.22rem;
      border-bottom-right-radius: 0.22rem;
      background-image: -webkit-linear-gradient(left, #66bdf8, #0091f3);
      background-image: linear-gradient(90deg, #66bdf8, #0091f3);
      min-width: 0.8rem;
      font-weight: 600;
    }
  }
  .zi {
    p {
      width: 4.5rem;
      margin-right: 0.3rem;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      margin-bottom: 0.3rem;
    }
    span {
      b {
        margin-left: 0.2rem;
      }
    }
  }
  .price {
    margin-top: 0.6rem;
    display: flex;
    justify-content: space-between;
    em {
      font-size: 0.3rem;
      font-weight: 600;
    }
    .shop {
      width:0.9rem;
      height:0.6rem;
      border:1px solid blue;
      text-align: center;
      border-radius:0.3rem; 
      i {
        font-size: 0.6rem;
        margin-right: 0.2rem;
      }
    }
  }
}
</style>
