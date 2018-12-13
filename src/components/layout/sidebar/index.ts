
import Vuex, { mapGetters, mapActions } from 'vuex';
import {Vue,Component, Prop,Model,} from 'vue-property-decorator'
import Render from './index.html'

import SidebarModule,{SidebarStore} from '../../../store/modules/sidebar'
import TopbarModule,{TopbarStore} from '../../../store/modules/topbar'
@Render
@Component({})
export default class Sidebar extends Vue{
    
    get topbar():TopbarStore{
      return TopbarModule 
    }
    get sidebar():SidebarStore{
      return SidebarModule
    }
   
    mounted(){
      /*this.sidebar.setMenuItems(
          [
            {
                icon: 'keyboard_arrow_up',
                iconalt: 'keyboard_arrow_down',
                text: 'Commercial',
                model: true,
                children: [
                    { icon: 'phone_forwarded', text: 'Offres de Prix',route_name:'commercial.offre' },
                    { icon: 'euro_symbol', text: 'Cotations',route_name:'commercial.cotation' }
                ]
            }
          
        ])*/
    }
}
