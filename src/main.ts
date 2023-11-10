import 'element-plus/dist/index.css'
import registerIcons from './global/register-icons'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(registerIcons)
app.use(createPinia())
app.use(router)

app.mount('#app')
