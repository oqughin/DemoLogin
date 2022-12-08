import axios  from "axios";
import { useCookies } from "@vueuse/integrations/useCookies";

const cookie = useCookies()
const service = axios.create({
    baseURL:"/api"
})

// 添加请求拦截器
service.interceptors.request.use(function (config) {

    //往header头自动添加token
    const token = cookie.get("admin-token")
    if(token){
        config.headers["token"] = token
    }
    // 在发送请求之前做些什么
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

export default service