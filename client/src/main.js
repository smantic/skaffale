import { createApp } from 'vue'
import './style.css'
import 'primeflex/primeflex.css' 
import 'primeicons/primeicons.css'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import { createRouter, createWebHashHistory } from 'vue-router'
  
const routes = [ { path: '/', component: App } ]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

const app = createApp(App)
app.use(PrimeVue)
app.use(router)
app.mount('#app')