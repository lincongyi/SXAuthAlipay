import { createApp } from 'vue'
import App from './index.vue'

import 'normalize.css/normalize.css'

import { Loading, Image as VanImage, Button } from 'vant'

import Vconsole from 'vconsole'

const vConsole = new Vconsole()

createApp(App)
  .use(Loading)
  .use(VanImage)
  .use(Button)
  .mount('#app')
