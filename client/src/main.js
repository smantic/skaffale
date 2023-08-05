import { createApp } from 'vue'
// import './style.css'
import 'primeflex/primeflex.css' 
import 'primeicons/primeicons.css'
import "primevue/resources/themes/lara-light-indigo/theme.css"
import App from './App.vue'
import PrimeVue from 'primevue/config'
import ToastService from 'primevue/toastservice'
import { routes } from './routes/routes.js'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes,
})

const app = createApp(App)
app.use(PrimeVue)
app.use(ToastService)
app.use(router)
app.mount('#app')