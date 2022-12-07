<template>
    <div class="common-layout">
      <el-container>
        <el-header>
          <FHeader/>
        </el-header>
        <el-container>
          <el-aside><FAside/></el-aside>
          <el-main><FMain/></el-main>
        </el-container>
      </el-container>
    </div>
</template>
<script setup>
import FHeader  from '@/layouts/components/FHeader.vue'
import FMain  from '@/layouts/components/FMain.vue'
import FAside  from '@/layouts/components/FAside.vue'

</script>
<style>
.header{
    height: 250px;
}
</style>