
import {Vue,Component, Prop} from 'vue-property-decorator'
import Render from './index.html'
@Render
@Component({})
export default class Topbar extends Vue{
  get message():string{
      return 'COTATION'
  }
  mounted(){
    
  }
}


