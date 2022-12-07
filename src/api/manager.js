import axios from "@/axios";

//用户登陆
export function login(username,password){
    return axios.post("/login",{
        username,
        password
    })
}