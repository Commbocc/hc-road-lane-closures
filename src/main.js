import { createApp } from 'vue'
import App from './App.vue'

export const app = createApp(App)

if (import.meta.env.DEV) app.mount('#app')
