import axios from "@/axios";

//用户登陆
export function login(username,password){
    return axios.post("/login",{
        username,
        password
    })
}

//获取用户信息及菜单列表
export function getInfo(){
    return axios.post("/getinfo")
}

//用户退出登陆
export function logOut(){
    return axios.post("/logout")
}