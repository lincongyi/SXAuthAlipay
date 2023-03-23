import { createApp } from 'vue'
import App from './index.vue'

import 'normalize.css/normalize.css'

import { Loading } from 'vant'

createApp(App).use(Loading).mount('#app')
