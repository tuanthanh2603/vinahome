<script setup lang="ts">
import {Headset, MapLocation} from "@element-plus/icons-vue";
</script>

<template>
  <!-- Bọc cả phần tử container và nút vào một div flex -->
  <div class="flex items-center px-5 py-2">
    <!-- Container chính với chiều cao h-20 -->
    <div class="h-16 border border-gray-200 rounded-lg flex items-center flex-1 ">
      <!-- Phần tử bên trái -->
      <div class="flex-1 border-r border-gray-200 flex justify-between w-[200px] items-center m-4">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="h-5 w-5 mr-2 icon-pointUp"><path d="M448 256A192 192 0 1 0 64 256a192 192 0 1 0 384 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 80a80 80 0 1 0 0-160 80 80 0 1 0 0 160zm0-224a144 144 0 1 1 0 288 144 144 0 1 1 0-288zM224 256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg>
        <div class="flex flex-col w-full m-2">
          <span class="text-[13px] text-gray-400">Nơi đi</span>
          <input type="text" class="w-full  rounded-md bg-transparent focus:outline-none"/>
        </div>
      </div>

      <div class="flex-1 border-r border-gray-200 flex justify-between w-[200px] items-center">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="h-5 w-5 mr-2 icon-pointDown"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>
        <div class="flex flex-col w-full m-2">
          <span class="text-[13px] text-gray-400">Nơi đến</span>
          <input type="text" class="w-full  rounded-md bg-transparent focus:outline-none"/>
        </div>
      </div>
      <div class="flex-1  flex justify-between w-[200px] items-center m-4">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="h-5 w-5 mr-2 icon-calendar"><path d="M128 0c17.7 0 32 14.3 32 32l0 32 128 0 0-32c0-17.7 14.3-32 32-32s32 14.3 32 32l0 32 48 0c26.5 0 48 21.5 48 48l0 48L0 160l0-48C0 85.5 21.5 64 48 64l48 0 0-32c0-17.7 14.3-32 32-32zM0 192l448 0 0 272c0 26.5-21.5 48-48 48L48 512c-26.5 0-48-21.5-48-48L0 192zm64 80l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm128 0l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zM64 400l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zm112 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16z"/></svg>
        <div class="flex flex-col w-full m-2">
          <span class="text-[13px] text-gray-400">Ngày đi</span>
          <input type="text" class="w-full  rounded-md bg-transparent focus:outline-none"/>
        </div>
      </div>
    </div>


    <button class="bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg ml-5 h-14 w-[150px]">
      Tìm kiếm
    </button>


  </div>
</template>






<style scoped>
.icon-calendar{
  fill: #0072bc;
}
.icon-pointDown{
  fill: #F04770;
}
.icon-pointUp{
  fill: #108AB1;
}
</style>