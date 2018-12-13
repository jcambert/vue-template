import Vue from 'vue'
import VueRouter,{RouterOptions,RouterMode, RouteConfig} from 'vue-router'


import {MenuItem} from '../store/modules/sidebar'
import * as _ from 'lodash';


 
interface IDefaultRouteOption{
    name?:string
    url?:string

}
export class AppRouter{
    routes:RouteConfig[]=[]
    mode?:RouterMode
    constructor(options:any){
        if(options.mode)
            this.mode=options.mode as RouterMode;
    }
    get routeOptions():RouterOptions{
        return {
            mode:this.mode,
            routes:this.routes
        }
    }
    get router():VueRouter{
        Vue.use(VueRouter)
        return new VueRouter(this.routeOptions)
    }
    addDefaultRoute(option:IDefaultRouteOption){
        if(option.name)
            this.addRoute({name:'404',path:'*',redirect:{name:option.name}})
        else if(option.url)
            this.addRoute({name:'404',path:'*',redirect:option.url})
    }
    addRoute(route:RouteConfig){
        //console.dir(route)
        if(!route.name)
            throw new Error("route must contain a name")
        console.log('appRouter.addRoute',route)
        this.routes.push(route);
    }
    addRoutes(routes:RouteConfig[]){
        _.forEach(routes,route=>this.addRoute(route))
    }
    addChild(parentName:any,route:RouteConfig){
        console.log('appRouter.addChild',parentName,route)
        var idx = _.findIndex(this.routes,{name:parentName}) 
        console.log(idx)
        if(idx>-1){
            var res = this.routes[idx]
            if(res){
                if(!res.children)res.children=[]
                res.children.push(route)
            }
            console.log(res)
        }
        
    }
    addChilds(parentName:any,routes:RouteConfig[]){
        _.forEach(routes,route=>this.addChild(parentName,route))
    }
}

const appRouter = new AppRouter({mode:'hash'})


export default appRouter

