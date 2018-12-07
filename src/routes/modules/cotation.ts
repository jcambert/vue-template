import router from '..'
import Cotation from '../../components/cotation'
router.addChild('home',{
  path: 'cotation',
  name: 'commercial.cotation',
  component: Cotation
})