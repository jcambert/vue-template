
import { Module, VuexModule,Mutation,Action,getModule} from 'vuex-module-decorators'
import store from '..'

export interface IAppState {
    title: string;
    
  }


@Module({ dynamic: true, name:'app',store:store})
export class ApplicationStore extends VuexModule implements IAppState{
    title=""

    @Mutation
    TITLE_CHANGE( value: string) {
        this.title = value;
    }

    @Action({ commit: 'TITLE_CHANGE' })
    settitle(value: string):string {
        return value
    }
    
  
   
}
const ApplicationModule = getModule(ApplicationStore);
export default ApplicationModule