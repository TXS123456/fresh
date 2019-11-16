import Vue from 'vue'
import Router from 'vue-router'
import Home from './Home'
import Classify from './Classify'
import Reserve from './Reserve'
import Shoppcar from './Shoppcar'
import Mine from './Mine'
import Site from './Site'
Vue.use(Router)

export default new Router({
  routes: [
    //重定向
    {
      path:"/",
      redirect:"/home"
    },
    Home,
    Site,
    Classify,
    Reserve,
    Shoppcar,
    Mine,
    {
    path:"**",
    redirect:"/home"
  }
  ]
  
})
