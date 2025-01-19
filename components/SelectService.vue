<script setup lang="ts">
import {MapLocation} from "@element-plus/icons-vue";
</script>

<template>
<section class="bg-[#ff2]">
  <el-tabs >
    <el-tab-pane>
      <template #label>
        <span class="custom-tabs-label ">
          <el-icon class="mr-2"><MapLocation /></el-icon>
          <span>Xe khách</span>
        </span>
      </template>
      Route
    </el-tab-pane>
    <el-tab-pane label="Khách sạn">Khách sạn</el-tab-pane>
    <el-tab-pane label="Thuê xe">Role</el-tab-pane>
  </el-tabs>
</section>
</template>

<style scoped>

</style>