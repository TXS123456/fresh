<template>
  <div class="pulp">
    <ul>
      <li>
        <div class="pulp-title">
          <p>{{pulplist[0].areaName}}</p>
          <span>
            更多
            <i class="iconfont">&#xe61b;</i>
          </span>
        </div>
        <Lobsert />
      </li>
       <li>
        <div class="pulp-title">
          <p>{{pulplist[1].areaName}}</p>
          <span>
            更多
            <i class="iconfont">&#xe61b;</i>
          </span>
        </div>
        <Crab/>
      </li>
      <li>
        <div class="pulp-title">
          <p>{{pulplist[2].areaName}}</p>
          <span>
            更多
            <i class="iconfont">&#xe61b;</i>
          </span>
        </div>
        <Fish/>
      </li>
       <li>
        <div class="pulp-title">
          <p>{{pulplist[3].areaName}}</p>
          <span>
            更多
            <i class="iconfont">&#xe61b;</i>
          </span>
        </div>
        <Shell/>
      </li>
      <li>
        <div class="pulp-title">
          <p>{{pulplist[4].areaName}}</p>
          <span>
            更多
            <i class="iconfont">&#xe61b;</i>
          </span>
        </div>
        <Meat/>
      </li>
      <li>
        <div class="pulp-title">
          <p>{{pulplist[5].areaName}}</p>
          <span>
            更多
            <i class="iconfont">&#xe61b;</i>
          </span>
        </div>
        <Else/>
      </li>
    </ul>
    <div class="foot"></div>
  </div>
</template>
<script>
import Vuex from "vuex";
import Lobsert from "../Homepulp/lobsert";
import Crab from '../Homepulp/Crab';
import Fish from '../Homepulp/fish';
import Shell from '../Homepulp/shell';
import Meat from '../Homepulp/meat';
import Else from '../Homepulp/else';
export default {
  name: "pulp",
  components: {
    Lobsert,
    Crab,
    Fish,
    Shell,
    Meat,
    Else
  },
  created() {
    this.getHomepulp();
  },
  computed: {
    ...Vuex.mapState({
      pulplist: state => state.Home.pulplist
    })
  },
  methods: {
    ...Vuex.mapActions({
      getHomepulp: "Home/getactionsHomepulp"
    })
  }
};
</script>
<style scoped lang="scss">
li {
  width: 100%;
  .pulp-title {
    width: 100%;
    height:0.96rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    p {
      font-size: 0.46rem;
      margin-left: 0.2rem;
      font-weight: 700;
    }
    span {
      margin-right: 0.2rem;
    }
  }
}
.foot{
  width: 100%;
  height:1rem ;
}
</style>


