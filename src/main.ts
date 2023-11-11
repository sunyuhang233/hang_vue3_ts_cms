import 'normalize.css'
import '@/assets/css/index.scss'
import 'element-plus/dist/index.css'
import registerIcons from './global/register-icons'

import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import registerStore from './stores'

const app = createApp(App)
app.use(registerIcons)
app.use(registerStore)
app.use(router)

app.mount('#app')
