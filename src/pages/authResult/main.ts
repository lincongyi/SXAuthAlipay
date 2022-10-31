import { createApp } from 'vue'
import App from './index.vue'

import 'normalize.css/normalize.css'

import { Loading, Image as VanImage, Button } from 'vant'

<<<<<<< HEAD:src/pages/authResult/main.js
createApp(App)
  .use(Loading)
  .use(VanImage)
  .use(Button)
  .mount('#app')
=======
createApp(App).use(Loading).use(VanImage).use(Button).mount('#app')
>>>>>>> dev-ts:src/pages/authResult/main.ts
