<template>
    <div class="item">
       <div class="item-middle">
         <ul>
             <li v-for="(item,index) in itemlist" :key="index">
                 <img :src="item.iconPath"/>
                 <span>{{item.name}}</span>
             </li>
         </ul>
       </div>
    </div>
</template>
<script>
import Vuex from "vuex"

export default {
    name:"item",
    created(){
      this.getHomeitem();
    },
    computed: {
        ...Vuex.mapState({
             itemlist: state=>state.Home.itemlist
        })
    },
    methods: {
        ...Vuex.mapActions({
            getHomeitem:"Home/getHomeactionsitem"
        })
    },
}
</script>
<style lang="scss" scoped>
    .item{
        width: 100%;
        height: 2rem;    
        .item-middle{
            width: 6.86rem;
            height: 1.8rem;
             margin:16px;
            ul{
                display: flex;
                li{
                    margin-left:0.45rem; 
                    margin-top:0.1rem;
                    img{
                        margin-bottom: 0.1rem;
                    }
                    span{
                        margin-left: 0.1rem;
                    }
                }
            }
        }
    }
</style>

