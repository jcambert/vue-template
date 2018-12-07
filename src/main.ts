import Vue from 'vue'
import Vuetify from 'vuetify'
import { sync } from 'vuex-router-sync';

import store from './store'
import appStore from './store/modules/app'
import App from './components/App'
import appRouter from './routes'

import signalR from './realtime/signal'
import socket from './realtime/socket'
import { Message } from './realtime/socket/server/socketServer';
appStore.settitle("Intranet")

Vue.use(Vuetify)
Vue.use(signalR,"http://localhost:63271/intranet")
Vue.use(socket,"http://localhost:8081")

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

sync(store, router); 
global.store=store

const vue=new Vue({
  el: '#app',
  router,
  store,
  components:{
    App,
  },
  render: h => h('App',{attrs:{start:100}}),
  created(){
    this.$signal.start().then(value=>console.log("SignalR started")).catch(err=>console.error(err));
    this.$socket.onMessage().subscribe((message: Message) => {
      console.log(message.content)
    });
  }
})
store.$vue = vue