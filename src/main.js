import { createApp } from 'vue'
import store from './store'
import App from './App.vue'
import socketPlugin from './plugins/socket'
import './index.css'

createApp(App)
  .use(store)
  .use(socketPlugin)
  .mount('#app')
