import { createApp } from 'vue'
import App from './index.vue'

import 'normalize.css/normalize.css'

import { Button, Form, Field, CellGroup, NumberKeyboard, ActionSheet, Divider, Checkbox, Image as VanImage } from 'vant'

createApp(App)
  .use(Button)
  .use(Form)
  .use(Field)
  .use(CellGroup)
  .use(NumberKeyboard)
  .use(ActionSheet)
  .use(Divider)
  .use(Checkbox)
  .use(VanImage)
  .mount('#app')
