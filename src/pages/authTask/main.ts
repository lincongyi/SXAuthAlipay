import { createApp } from 'vue'
import App from './index.vue'

import 'normalize.css/normalize.css'

import {
  Loading,
  Image as VanImage,
  Button,
  Icon,
  RadioGroup,
  CellGroup,
  Cell,
  Radio,
  Overlay,
  Divider
} from 'vant'

createApp(App)
  .use(Loading)
  .use(VanImage)
  .use(Button)
  .use(Icon)
  .use(RadioGroup)
  .use(CellGroup)
  .use(Cell)
  .use(Radio)
  .use(Overlay)
  .use(Divider)
  .mount('#app')
