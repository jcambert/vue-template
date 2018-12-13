
import Vue from 'vue'
import Vuetify from 'vuetify'
import { sync } from 'vuex-router-sync';
import * as numeral from 'numeral';

import store from './store'
import RouterModule,{RouterStore} from './store/modules/route'  
import appStore from './store/modules/app'
import App from './components/App'
import appRouter from "./routes";


import signalR from './realtime/signal'
import socket from './realtime/socket'
import Plugin from './plugins'
import intranet from './plugins/intranet'
import ping from './plugins/ping'

import { Message } from './realtime/socket/server/socketServer';
import VueRouter from 'vue-router';
import Home from './components/layout/home';

appStore.settitle("Intranet")

Vue.use(Vuetify)
//Vue.use(signalR,"http://localhost:63271/intranet")
//Vue.use(socket,"http://localhost:8081")
Vue.use(Plugin,intranet,ping)

Vue.filter("formatNumber", function (value:any) {
  //return numeral.format(value,v=>{ return 0}); // displaying other groupings/separators is possible, look at the docs
  return value
});
Vue.filter("formatPoints", function (value:any) {
  return value > 0 ? "+" + value : value; // displaying other groupings/separators is possible, look at the docs
});

Vue.mixin({
  methods: {
      routeToName(name) {
          this.$router.push({ name: name });
      },
      goBack() {
        window.history.length > 1
        ? this.$router.go(-1)
        : this.$router.push('/')
      }

  }
})

const router = appRouter.router
/*Vue.use(VueRouter)
const routes=[
  {
    path:'/',
    name:'home',
    component:Home
  },
  {
  path:'*',
  redirect:'/'
}]
const router = new VueRouter({routes})*/

console.log(router)
if(router) sync(store, router); 
//global.store=store

const vue=new Vue({
  el: '#app',
  router,
  store,
  components:{
    App,
  },
  render: h => h('App',{attrs:{start:100}}),
  created(){
    if(this.$signal)
      this.$signal.start().then(value=>console.log("SignalR started")).catch(err=>console.error(err));
    if(this.$socket)
      this.$socket.onMessage().subscribe((message: Message) => {
        console.log(message.content)
      });
  }
})
store.$vue = vue
console.log(router)
console.log(store)