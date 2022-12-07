<template>
    <el-row  class="login-container">
        <el-col :span="16" :offset="0" class="login-left-child">
            <div style="color:white"><h1>用户登陆演示系统</h1>
            <h3>学习vue3 + element plus 训练</h3></div>
        </el-col>
        <el-col :span="8" :offset="0" class="login-right-child">
            <!-- <div shadow="never" class="login-card"> -->
                <h1 style="text-align:center;">欢迎回来</h1>
                <el-form ref="formRef" :rules="rules" :model="form" class="forms">
                <el-form-item prop="username">
                    <el-input v-model="form.username" placeholder="请输入用户名">
                        <template #prefix>
                            <el-icon class="el-input__icon">
                                <User />
                            </el-icon>
                        </template>
                    </el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input type="password" v-model="form.password" placeholder="请输入密码" @keyup.enter="onSubmit" show-password>
                        <template #prefix>
                            <el-icon class="el-input__icon">
                                <Lock />
                            </el-icon>
                        </template>
                    </el-input>
                </el-form-item>
                <div class="form-btns">
                    <el-form-item>
                    <el-button round color="#3b82f6" style="width: 100px;"  type="primary" @click="onSubmit" >登陆</el-button>
                </el-form-item>
                <el-form-item>
                    <el-button round  type="warning" style="width: 100px;" >注册</el-button>
                </el-form-item>
                </div>
            </el-form>
            <!-- </div> -->
        </el-col>
    </el-row>
    
</template>

<script setup>
import { ref, reactive } from 'vue'
import {useStore} from 'vuex'
import {useRouter} from 'vue-router'
import { login } from '../api/manager';

const store = useStore()
const router = useRouter()
const formRef = ref(null)


const form = reactive({
    username: "",
    password: ""
})

//验证规则
const rules = {
    username: [{ required: true, message: '用户名不能为空', trigger: 'blur' }],
    password: [{ required: true, message: '密码不能为空', trigger: 'blur' }],
}

const onSubmit = ()=>{
    //表单验证
    formRef.value.validate((valid) => {
        if(valid){
            store.dispatch("login",form).then((e)=>{
        router.push("/")
    })
        }
    })
    
}

</script>

<style>
.login-container{
    background: #3B82F6;
    height: 100vh;
}
.login-left-child,.login-right-child{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;

}
.login-right-child{
    height: 100vh;
    background: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.login-card{
    border-radius: 5px;
    /* background:  #3B82F6; */
    width: 75%;
    height: 500px;
}
.forms{
    width: 250px;
}
.form-btns{
    width: 250px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>