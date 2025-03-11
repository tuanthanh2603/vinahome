<script setup lang="ts">
import MenuAccountCustomer from "~/components/customer/MenuAccountCustomer.vue";
</script>

<template>
  <div>
    <el-container class="bg-gray-100  p-10">
      <el-container style="margin-left: 15%; margin-right: 15%;">
        <el-aside>
          <MenuAccountCustomer />
        </el-aside>
        <el-container  class="pl-4">
          <el-main>
            <slot />
          </el-main>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped></style>