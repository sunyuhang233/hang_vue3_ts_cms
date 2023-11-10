import type { App } from '@vue/runtime-dom'
import { createPinia } from 'pinia'

const pinia = createPinia()

function registerStore(app: App) {
  app.use(pinia)
}

export default registerStore
