import {getHomebanner,getHomenotice,getHomeitem,getHomeproduct,
        getHomewell,getHomepulp,getHomelobsert,getHomecrab,
        getHomefish,getHomeshell,getHomemeat,getHomeelse} from "@/api/api.js";
export default{
    state:{
       banners:[],
       newslist:[],
       itemlist:[],
       productlimit:[],
       productlimit1:[],
       welllist:[],
       pulplist:[],
       lobsertlist:[],
       crablist:[],
       fishlist:[],
       shelllist:[],
       meatlist:[],
       elselist:[]
    },
    actions:{
        async getactionHomebanner({commit},params){
            let data = await getHomebanner();
             //console.log(data)
            commit("getmutationHomebanner",data.data.content)
        },
        async getactionHomenotice({commit},params){
            let data = await getHomenotice();
            //console.log(data)
            commit("getmutationHomenotice",data.data)
        },
        async getHomeactionsitem({commit},params){
            let data =await getHomeitem();
        
            commit("getmutationHomeitem",data.data)
        },
        async getactionsHomeproduct({commit},params){
            let data = await getHomeproduct();
            //console.log(data.data)
            commit("getmutationproduct",data.data)
        },
        async getactionsHomewell({commit},params){
            let data = await getHomewell();
            //console.log(data.data)
            commit("getmutationHomewell",data.data)
        },
        async getactionsHomepulp({commit},params){
            let data = await getHomepulp();
            commit("getmutationHomepulp",data.data) 
            console.log(data.data)
        },
        async getactionslobsert({commit},params){
            let data = await getHomelobsert();
            //console.log(data.data.quoteList)
            commit("getmutationHomelobsert",data.data.quoteList)
        },
        async getactionscrab({commit},params){
            let data = await getHomecrab();
            //console.log(data.data.quoteList)
            commit("getmutationHomecrab",data.data.quoteList)
        },
        async getactionsfish({commit},params){
            let data = await getHomefish();
            //console.log(data.data.quoteList)
            commit("getmutationHomefish",data.data.quoteList)
        },
        async getactionsshell({commit},params){
            let data = await getHomeshell();
            //console.log(data.data.quoteList)
            commit("getmutationHomeshell",data.data.quoteList)
        },
        async getactionsmeat({commit},params){
            let data = await getHomemeat();
            //console.log(data.data.quoteList)
            commit("getmutationHomemeat",data.data.quoteList)
        },
        async getactionselse({commit},params){
            let data = await getHomeelse();
            //console.log(data.data.quoteList)
            commit("getmutationHomeelse",data.data.quoteList)
        },
    },
    mutations:{
        getmutationHomebanner(state,params){
            state.banners = params 
        },
        getmutationHomenotice(state,params){
           state.newslist = params
        },
        getmutationHomeitem(state,params){
            state.itemlist = params
         },
         getmutationproduct(state,params){
          
          var arr=[];
          arr.push(params);
          for(var i=0;i<arr.length;i++){
              var res = arr[i]
              for(var j=0;j<res.length;j++){
                  //console.log(res[j])
                  state.productlimit=res[0];
                  state.productlimit1=res[1];
              }
          }
         },
         getmutationHomewell(state,params){
            state.welllist = params
         },
         getmutationHomepulp(state,params){
            state.pulplist= params
         },
         getmutationHomelobsert(state,params){
             state.lobsertlist = params
         },
         getmutationHomecrab(state,params){
            state.crablist = params
        },
        getmutationHomefish(state,params){
            state.fishlist = params
        },
        getmutationHomeshell(state,params){
            state.shelllist = params
        },
        getmutationHomemeat(state,params){
            state.meatlist = params
        },
        getmutationHomeelse(state,params){
            state.elselist = params
        },
    },
    namespaced:true
}