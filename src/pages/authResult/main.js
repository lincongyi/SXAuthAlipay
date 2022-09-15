import { createApp } from 'vue'
import App from './index.vue'

import 'normalize.css/normalize.css'

import { Loading, Image as VanImage, Button } from 'vant'

createApp(App)
  .use(Loading)
  .use(VanImage)
  .use(Button)
  .mount('#app')
