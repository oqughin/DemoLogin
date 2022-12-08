import { createStore} from 'vuex'
import { login,getInfo } from '../api/manager'
import { useCookies } from '@vueuse/integrations/useCookies'

const cookie = useCookies()

//创建store实例
 const store = createStore({
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
        },
        getinfo({commit}){
            return new Promise((resolve,reject)=>{
                getInfo()
                .then((res)=>{
                    this.commit("SET_USER",res.data.data)
                    resolve(res)
                })
            })
        },
    }
})

export default store