<template>
    <div class="f-header">
        <div class="top-icon">
            <el-icon :size="25" color="white" style="margin-right: 10px;"><Avatar /></el-icon>
            登陆演示系统
        </div>
        <div class="top-user-info">
            <el-avatar icon="el-icon-user-solid" size="small" shape="circle" src="https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTIpU1SaqhvxKzCGgFicVIvPfcLsZleQqt3epGHG7UbliauUV3gFia6Gl4Ab2ia3Y9DSKJe2ccbDerpyEg/132" fit="fill"></el-avatar>
            
            <el-dropdown :hide-on-click="false" @command="handleCommand">
    <span class="el-dropdown-link">{{$store.state.user.username}}<el-icon class="el-icon--right"><arrow-down /></el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item command="updateUserInfo">修改资料</el-dropdown-item>
        <el-dropdown-item command="logOut">退出系统</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
        </div>
    </div>
</template>

<script setup>
import { ElMessage } from 'element-plus'
import {logOut} from '@/api/manager.js'
import { useCookies } from '@vueuse/integrations/useCookies';
import { useRouter } from 'vue-router';

const router = useRouter()
const cookie = useCookies()
const userLogOut =()=>{
    logOut()
    .then((res)=>{
        cookie.remove("admin-token")
        router.push("/login")
    })
}

const handleCommand = (command) => {
  switch(command){
    case 'updateUserInfo':
        break;
    case 'logOut':
        userLogOut()

  }
}


</script>

<style>
.f-header{
    display: flex;
    position: fixed;
    height: 64px;

    top: 0;
    left: 0;
    padding: 0 20px;
    align-items: center;
    justify-content: space-between;
    right: 0;
    background: #3B82F6;
}
.top-icon{
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 1.25rem;
    width: 250px;
}
.top-user-info{
    display: flex;
    align-items: center;
    
}
.el-dropdown span{
    margin-left: 10px;
    color: white;
    display: flex;
    align-items: center;
}
</style>