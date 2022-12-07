import { createStore, Store } from 'vuex'
import { useCookies } from '@vueuse/integrations/useCookies'
import { login } from '../api/manager'

const cookie = useCookies()

//创建store实例
export const store = createStore({
    state(){
        return {
            //用户信息
            user:{}
        }
    },
    mutations:{
        SET_USER(state,user){
            state.user = user
        }
    },
    actions:{
        //用户登陆
        login({commit},{username,password}){
            return new Promise((resolve,reject)=>{
                login(username,password)
                .then((res)=>{
                    cookie.set("admin-token",res.data.data.token)
                    resolve(res)
                })
            })
        }
    }
})