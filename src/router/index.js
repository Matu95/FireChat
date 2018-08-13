import Login from '../components/auth/login.vue'
import Register from '../components/auth/register.vue'
import App from '../components/index.vue'
import Message from '../components/message/index.vue'

export const routes = [
    {
        path: '/', 
        component: Login
    },
    {
        path: '/register', 
        component: Register
    },
    // {
    //     path: '/home', 
    //     component: Home
    // },
    {
        path: '/app',
        name: 'Application',
        component: App,
        children: [
            {
                path: '/messages',
                name: 'Message',
                component: Message
            },
        ]
    }  
    //{path: '/contacots', component: Contactos},
];