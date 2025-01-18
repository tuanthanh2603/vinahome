<script setup lang="ts">
// Script setup for future interactivity if needed
import {Headset, ArrowDown} from "@element-plus/icons-vue";
</script>

<template>
  <nav class="bg-[#0072bc] shadow-md h-16 w-full">
    <div class="container mx-auto flex items-center justify-between px-4 h-full">
    <!-- Logo Section -->
    <div class="flex items-center">
      <img
          src="/static/logo-2.png"
          alt="Logo"
          class="w-40"
      />
    </div>
      <ul class="flex space-x-2">
        <li>
          <el-button text class="button-link">Tra cứu vé</el-button>
        </li>
        <li>
          <el-button text class="button-link">Mở bán vé trên VinaHome</el-button>
        </li>
        <li>
          <el-dropdown>
            <el-button text class="button-link">
              Trở thành đối tác<el-icon class="el-icon--right"><ArrowDown /></el-icon>
            </el-button>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>Phần mềm quản lý nhà xe</el-dropdown-item>
                <el-dropdown-item>Phần mềm quản lý bán vé</el-dropdown-item>
                <el-dropdown-item>Phần mềm quản lý hàng hoá</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </li>
        <li>
          <el-button type="warning" :icon="Headset" plain>Hỗ trợ 24/7</el-button>
        </li>
        <li>
          <el-button type="primary" plain>Đăng nhập</el-button>
        </li>


      </ul>
    </div>
  </nav>
</template>

<style scoped>
.button-link{
  color: white;

}
.button-link:hover {
  color: black;
}
.el-button:focus-visible, .el-button.is-text:not(.is-disabled):focus-visible{
  outline: none;
}
</style>
