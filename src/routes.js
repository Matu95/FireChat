import login from './components/login.vue'
import NewAcount from './components/newacount.vue'
import Home from './components/home.vue'
import Chats from './components/home/chats.vue'

export const routes = [
    {path: '/', component: login},
    {path: '/register', component: NewAcount},
    {path: '/home', component: Home},
    {path: '/chat', component: Chats},
    //{path: '/contacots', component: Contactos},
];