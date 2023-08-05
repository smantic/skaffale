import Libraries from '../components/Pages/Libraries/Libraries.vue'
import PageNotFound from '../components/Pages/PageNotFound/PageNotFound.vue'

export const routes = [ { path: '/', component: Libraries }, { path: '/:pathMatch(.*)*', component: PageNotFound } ]