import { createApp } from 'vue'
import App from './index.vue'

import 'normalize.css/normalize.css'

import {
  Button,
  Form,
  Field,
  CellGroup,
  Cell,
  RadioGroup,
  Radio,
  Picker,
  Popup,
  DatetimePicker,
  Divider,
  Switch
} from 'vant'

createApp(App)
  .use(Button)
  .use(Form)
  .use(Field)
  .use(CellGroup)
  .use(Cell)
  .use(Radio)
  .use(RadioGroup)
  .use(Picker)
  .use(Popup)
  .use(DatetimePicker)
  .use(Divider)
  .use(Switch)
  .mount('#app')
