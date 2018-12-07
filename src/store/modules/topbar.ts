
import { Module, VuexModule,Mutation,Action,getModule} from 'vuex-module-decorators'
import store from '../'

export interface ITopbarState {
    drawer: boolean;
    
  }


@Module({ dynamic: true, name:'topbar',store:store})
 export class TopbarStore extends VuexModule {
    drawer=true

    @Mutation
    DRAWER_CHANGE( value: boolean) {
        this.drawer = value;
    }

    @Action({ commit: 'DRAWER_CHANGE' })
    drawerChange(value: boolean):boolean {
        return value
    }
    
  
   
}
const TopbarModule = getModule(TopbarStore);
export default TopbarModule