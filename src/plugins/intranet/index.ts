import {UiPlugin, RouterPlugin} from '..'
import Home from '../../components/layout/home';
import Sidebar from '../../components/layout/sidebar';
import Topbar from '../../components/layout/topbar';
import Commercial from '../../components/commercial';
import Cotation from '../../components/cotation';

const routes=[{
    path:'/',
    name:'home',
    components:{
      default:Home,
      sidebar:Sidebar,
      topbar:Topbar
    },
    children:[
        {
            path:'commercial/offres',
            name:'commercial.offre',
            component:Commercial
        },
        {
            path:'commercial/cotations',
            name:'commercial.cotation',
            component:Cotation
        }
    ]
  }]

  const menus=[
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
  
]

const plugin =new UiPlugin("intranet",menus,{routes: routes,default:{name:'home'}});
export default plugin