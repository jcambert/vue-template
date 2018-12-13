import {UiPlugin, RouterPlugin} from '..'

import Player from '../../components/ping/player';

const routes=[
       {
            path:'ping/me',
            name:'ping.me',
            component:Player
        }
    ]

  const menus=[
    {
        icon: 'keyboard_arrow_up',
        iconalt: 'keyboard_arrow_down',
        text: 'Ping Application',
        //model: true,
        children: [
            { icon: 'phone_forwarded', text: 'Mon Espace',route_name:'ping.me' },
            { icon: 'euro_symbol', text: 'Mes Favoris',route_name:'ping.favorite' }
        ]
    },
    {
        icon: 'keyboard_arrow_up',
        iconalt: 'keyboard_arrow_down',
        text: 'Ping Rechercher',
        //model: true,
        children: [
            { icon: 'phone_forwarded', text: 'Joueurs',route_name:'ping.search.player' },
            { icon: 'euro_symbol', text: 'Clubs',route_name:'ping.search.club' },
            { icon: 'euro_symbol', text: 'Competitions',route_name:'ping.search.event' }
        ]
    },
    {
        icon: 'keyboard_arrow_up',
        iconalt: 'keyboard_arrow_down',
        text: 'Ping Aide',
        //model: true,
        children: [
            { icon: 'phone_forwarded', text: 'Calculateur',route_name:'ping.help.calculate' },
        ]
    },
    {
        icon: 'keyboard_arrow_up',
        iconalt: 'keyboard_arrow_down',
        text: 'Ping Rencontres',
        //model: true,
        children: [
            { icon: 'phone_forwarded', text: 'Joueurs',route_name:'ping.search.player' },
            { icon: 'euro_symbol', text: 'Clubs',route_name:'ping.search.club' },
            { icon: 'euro_symbol', text: 'Competitions',route_name:'ping.search.event' }
        ]
    }
  
]

const plugin =new UiPlugin("ping",menus,{routes: routes,parentName:'home'});
export default plugin