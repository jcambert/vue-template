import Vue from 'vue'
import Vuex, { StoreOptions } from 'vuex'


import {IHomeState} from './modules/home'
import {ITopbarState} from './modules/topbar'
import {ISidebarState} from './modules/sidebar'
import { IRouterState } from './modules/route';
Vue.use(Vuex)

export interface IRootState {
    routee:IRouterState
    home: IHomeState,
    topbar:ITopbarState,
    sidebar:ISidebarState
  }




class EStore<S> extends Vuex.Store<S> {
    constructor(options: StoreOptions<S>){
        super(options)
    }
    public $vue?:Vue;
}

const store = new EStore<IRootState>({});
store.watch(state=>state.home,(value,old)=>{
    console.dir(value);
},{deep:true})
 export default store;