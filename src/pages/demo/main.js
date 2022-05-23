import { createApp } from 'vue'
import App from './index.vue'

import 'normalize.css/normalize.css'

import { Button, Form, Field, CellGroup, NumberKeyboard } from 'vant'

createApp(App)
  .use(Button)
  .use(Form)
  .use(Field)
  .use(CellGroup)
  .use(NumberKeyboard)
  .mount('#app')
