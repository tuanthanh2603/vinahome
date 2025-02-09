<script setup lang="ts">
import MenuAccountCustomer from "~/components/customer/MenuAccountCustomer.vue";
</script>

<template>
  <div>
    <el-container class="bg-gray-100  p-10">
      <el-container style="margin-left: 20%; margin-right: 20%;">
        <el-aside>
          <MenuAccountCustomer />
        </el-aside>
        <el-container  class=" p-5">
          <el-main>
            <slot />
          </el-main>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped></style>