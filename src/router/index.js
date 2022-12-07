import { createRouter, createWebHashHistory } from 'vue-router'
import { useCookies } from '@vueuse/integrations/useCookies'
import Login from '@/pages/Login.vue'
import Index from '@/layouts/Index.vue'
import NotFound from '@/pages/404.vue'

const cookie = useCookies()

const routes = [
    {
        path: '/login',
        component: Login,
        meta: {
            title: "登陆页"
        }
    },
    {
        path: '/',
        component: Index,
        meta: {
            title: "登陆页"
        }
    },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
]

export const router = createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: createWebHashHistory(),
    routes, // `routes: routes` 的缩写
})
