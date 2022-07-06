import { createApp } from 'vue'
import App from './index.vue'

import 'normalize.css/normalize.css'

import { Loading, Image as VanImage } from 'vant'

import Vconsole from 'vconsole'

const vConsole = new Vconsole()

createApp(App)
  .use(Loading)
  .use(VanImage)
  .mount('#app')
