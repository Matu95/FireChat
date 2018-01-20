import Login from './components/login.vue'
import Register from './components/register.vue'
import Home from './components/home.vue'
import Chats from './components/home/chats.vue'

export const routes = [
    {path: '/', component: Login},
    {path: '/register', component: Register},
    {path: '/home', component: Home},
    {path: '/chat', component: Chats},
    //{path: '/contacots', component: Contactos},
];