<script setup lang="ts">

</script>

<template>
  <el-container>
    <el-header class="sticky top-0 z-50 w-full">
      <Header />
    </el-header>
    <el-main>
      <slot />
    </el-main>
    <e-footer>
      <Footer />
    </e-footer>
  </el-container>
</template>

<style scoped></style>