import { createApp } from 'vue'
import App from './index.vue'

import 'normalize.css/normalize.css'

import { Button, Form, Field, CellGroup, NumberKeyboard, ActionSheet, Divider, Checkbox, Image as VanImage, Popup, DatetimePicker } from 'vant'

// import VConsole from 'vconsole'
// new VConsole()

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
  .use(Popup)
  .use(DatetimePicker)
  .mount('#app')
