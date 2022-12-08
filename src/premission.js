import { router } from "./router";
import { useCookies } from '@vueuse/integrations/useCookies'
import store from '@/store'
let hasGetInfo = false


const cookie = useCookies()
//全局路由前置守卫
router.beforeEach(async(to, from) => {
    //获取用户token信息
    const token = cookie.get('admin-token')
    // 检查用户是否已登录 && ❗️ 避免无限重定向
    if (!token && to.path !== '/login') {
        // 将用户重定向到登录页面
        return { path: '/login' }
    }
    //如果登陆后再访问登陆页面，重定向到首页
    else if (token && to.path=='/login') return {path:'/'}

    //如果用户登陆了，就把用户的登陆信息存储在vuex当中
    if(token && !hasGetInfo){
    await store.dispatch("getinfo")
    //    console.log(res)
        
        hasGetInfo = true

    }
})