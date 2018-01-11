import login from './components/login.vue'
import NewAcount from './components/newacount.vue'
import Home from './components/home.vue'

export const routes = [
    {path: '/', component: login},
    {path: '/register', component: NewAcount},
    {path: '/home', component: Home},
];