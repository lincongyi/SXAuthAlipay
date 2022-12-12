import { createApp } from 'vue'
import App from './index.vue'

import 'normalize.css/normalize.css'

import { Button, Form, Field, CellGroup, RadioGroup, Radio, Picker, Popup, DatetimePicker, Divider } from 'vant'

createApp(App)
  .use(Button)
  .use(Form)
  .use(Field)
  .use(CellGroup)
  .use(Radio)
  .use(RadioGroup)
  .use(Picker)
  .use(Popup)
  .use(DatetimePicker)
  .use(Divider)
  .mount('#app')
