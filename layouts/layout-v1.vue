<script setup lang="ts">

import MenuAccountCustomer from "~/components/customer/MenuAccountCustomer.vue";
</script>

<template>
  <div>
    <el-container>
      <el-aside width="200px">
        <MenuAccountCustomer/>
      </el-aside>
      <el-container>
        <el-main>
          <slot />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped>

</style>