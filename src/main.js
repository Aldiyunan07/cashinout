import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import './index.css'


axios.interceptors.request.use((config) => {
    config.baseURL = 'http://localhost:8000/'
    config.withCredentials = true
    return config
})

store.dispatch('auth/me').then(() => {
    createApp(App).use(store).use(router).mount('#app')
})
