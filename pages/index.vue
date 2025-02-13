<script setup lang="ts">

import {Search} from "@element-plus/icons-vue";
import SelectTrip_v2 from "~/components/select/SelectTrip_v2.vue";

const radio1 = ref('New York')
</script>

<template>
<section class="container mx-auto">
  <div class="relative overflow-hidden from-white to-blue-50 px-8 py-16">
    <img src="/static/xe-khach/Star3.png"
         class="absolute top-10 left-20 h-6 w-6 " />
    <img src="/static/xe-khach/Star3.png"
         class="absolute top-16 right-32 h-6 w-6 " />
    <img src="/static/xe-khach/Star3.png"
         class="absolute bottom-20 left-1/4 h-10 w-10 " />
    <img src="/static/xe-khach/Star3.png"
         class="absolute top-5 right-10 h-8 w-8" />
    <img src="/static/xe-khach/Star3.png"
         class="absolute bottom-32 left-10 h-7 w-7" />
    <img src="/static/xe-khach/Star3.png"
         class="absolute bottom-5 right-1/3 h-9 w-9" />
    <div class="mx-auto flex max-w-7xl items-center justify-between">
      <div class="max-w-xl">
        <h1 class="mb-4 text-4xl font-bold leading-tight text-navy-900">
          Nền tảng <span class="text-blue-500">Đặt vé xe</span> nhanh nhất Việt Nam
        </h1>
        <p class="text-base text-gray-600">
          Cam kết hoàn 150% nếu nhà xe không cung cấp dịch vụ vận chuyển (*)
        </p>
      </div>
      <div class="relative ml-8 w-[500px] h-[300px]">
        <img src="/static/xe-khach/Ellipse152.png"
             class="fixed left-[70%] top-[40%] -translate-y-1/2 w-[600px] opacity-70 z-0" />
        <img src="/static/xe-khach/Container.png" class="absolute left-[1%] top-[40%] transform-translate-y-1/2 w-full" />
        <img src="/static/xe-khach/bus.png" class="relative w-full drop-shadow-lg z-10" />
      </div>
    </div>
  </div>

</section>
<section class="container mx-auto px-24">
  <el-radio-group v-model="radio1" size="large" class="flex gap-x-4">
    <el-radio-button value="New York">
      <template #default>
        <div class="flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="w-4 h-4" fill="currentColor">
            <path d="M288 0C422.4 0 512 35.2 512 80l0 16 0 32c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32l0 160c0 17.7-14.3 32-32 32l0 32c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-32-192 0 0 32c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-32c-17.7 0-32-14.3-32-32l0-160c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32c0 0 0 0 0 0l0-32s0 0 0 0l0-16C64 35.2 153.6 0 288 0zM128 160l0 96c0 17.7 14.3 32 32 32l112 0 0-160-112 0c-17.7 0-32 14.3-32 32zM304 288l112 0c17.7 0 32-14.3 32-32l0-96c0-17.7-14.3-32-32-32l-112 0 0 160zM144 400a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm288 0a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM384 80c0-8.8-7.2-16-16-16L208 64c-8.8 0-16 7.2-16 16s7.2 16 16 16l160 0c8.8 0 16-7.2 16-16z"/>
          </svg>
          <span>Vé xe khách</span>
        </div>
      </template>
    </el-radio-button>

    <el-radio-button value="2">
      <template #default>
        <div class="flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" class="w-4 h-4" fill="currentColor">
            <!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
            <path d="M381 114.9L186.1 41.8c-16.7-6.2-35.2-5.3-51.1 2.7L89.1 67.4C78 73 77.2 88.5 87.6 95.2l146.9 94.5L136 240 77.8 214.1c-8.7-3.9-18.8-3.7-27.3 .6L18.3 230.8c-9.3 4.7-11.8 16.8-5 24.7l73.1 85.3c6.1 7.1 15 11.2 24.3 11.2l137.7 0c5 0 9.9-1.2 14.3-3.4L535.6 212.2c46.5-23.3 82.5-63.3 100.8-112C645.9 75 627.2 48 600.2 48l-57.4 0c-20.2 0-40.2 4.8-58.2 14L381 114.9zM0 480c0 17.7 14.3 32 32 32l576 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 448c-17.7 0-32 14.3-32 32z"/>
          </svg>
          <span>Vé máy bay</span>
        </div>
      </template>
    </el-radio-button>
    <el-radio-button value="3">
      <template #default>
        <div class="flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-4 h-4" fill="currentColor">
            <!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
            <path d="M0 32C0 14.3 14.3 0 32 0L480 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l0 384c17.7 0 32 14.3 32 32s-14.3 32-32 32l-176 0 0-48c0-26.5-21.5-48-48-48s-48 21.5-48 48l0 48L32 512c-17.7 0-32-14.3-32-32s14.3-32 32-32L32 64C14.3 64 0 49.7 0 32zm96 80l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zM240 96c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zm112 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zM112 192c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zm112 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zM328 384c13.3 0 24.3-10.9 21-23.8c-10.6-41.5-48.2-72.2-93-72.2s-82.5 30.7-93 72.2c-3.3 12.8 7.8 23.8 21 23.8l144 0z"/>
          </svg>
          <span>Khách sạn</span>
        </div>
      </template>
    </el-radio-button>
    <el-radio-button value="4">
      <template #default>
        <div class="flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" class="w-4 h-4" fill="currentColor">
            <!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
            <path d="M200 0c-30.6 0-56 54.7-56 86.1l0 106.5L7.8 274.3C2.9 277.2 0 282.4 0 288l0 64c0 5.1 2.4 9.8 6.4 12.8s9.3 3.9 14.1 2.5l123.4-37 0 81.2-50 40c-3.8 3-6 7.6-6 12.5l0 32c0 5.1 2.5 10 6.6 13s9.5 3.8 14.4 2.2L200 480.9 290.4 511c-1.6-4.7-2.4-9.8-2.4-15l0-32.6c-18.2-10.5-30.7-29.7-31.9-51.8l-.1-.1 0-3.5 0-82.5L256 184l0-1.1s0 0 0 0l0-96.9C256 54.7 231.5 0 200 0zm88 176l0 224c0 20.9 13.4 38.7 32 45.3l0 42.7c0 13.3 10.7 24 24 24l16 0c13.3 0 24-10.7 24-24l0-40 160 0 0 40c0 13.3 10.7 24 24 24l16 0c13.3 0 24-10.7 24-24l0-42.7c18.6-6.6 32-24.4 32-45.3l0-224c0-26.5-21.5-48-48-48l-256 0c-26.5 0-48 21.5-48 48zm79.8 78.7c3.3-8.7 11.2-14.7 20.5-14.7l151.4 0c9.2 0 17.2 6 20.5 14.7L576 304l-224 0 15.8-49.3zM568 352a24 24 0 1 1 0 48 24 24 0 1 1 0-48zM336 376a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z"/>
          </svg>
          <span>Đưa đón sân bay</span>
        </div>
      </template>
    </el-radio-button>
    <el-radio-button value="5">
      <template #default>
        <div class="flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-4 h-4" fill="currentColor">
            <!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
            <path d="M192 0c-17.7 0-32 14.3-32 32l0 32 0 .2c-38.6 2.2-72.3 27.3-85.2 64.1L39.6 228.8C16.4 238.4 0 261.3 0 288L0 432l0 48c0 17.7 14.3 32 32 32l32 0c17.7 0 32-14.3 32-32l0-48 320 0 0 48c0 17.7 14.3 32 32 32l32 0c17.7 0 32-14.3 32-32l0-48 0-144c0-26.7-16.4-49.6-39.6-59.2L437.2 128.3c-12.9-36.8-46.6-62-85.2-64.1l0-.2 0-32c0-17.7-14.3-32-32-32L192 0zM165.4 128l181.2 0c13.6 0 25.7 8.6 30.2 21.4L402.9 224l-293.8 0 26.1-74.6c4.5-12.8 16.6-21.4 30.2-21.4zM96 288a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm288 32a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/>
          </svg>
          <span>Cho thuê xe</span>
        </div>
      </template>
    </el-radio-button>
    <el-radio-button value="6">
      <template #default>
        <div class="flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-4 h-4" fill="currentColor">
            <!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
            <path d="M383.5 192c.3-5.3 .5-10.6 .5-16c0-51-15.9-96-40.2-127.6C319.5 16.9 288.2 0 256 0s-63.5 16.9-87.8 48.4C143.9 80 128 125 128 176c0 5.4 .2 10.7 .5 16L240 192l0 128-32 0c-7 0-13.7 1.5-19.7 4.2L68.2 192l28.3 0c-.3-5.3-.5-10.6-.5-16c0-64 22.2-121.2 57.1-159.3C62 49.3 18.6 122.6 4.2 173.6C1.5 183.1 9 192 18.9 192l6 0L165.2 346.3c-3.3 6.5-5.2 13.9-5.2 21.7l0 96c0 26.5 21.5 48 48 48l96 0c26.5 0 48-21.5 48-48l0-96c0-7.8-1.9-15.2-5.2-21.7L487.1 192l6 0c9.9 0 17.4-8.9 14.7-18.4C493.4 122.6 450 49.3 358.9 16.7C393.8 54.8 416 112.1 416 176c0 5.4-.2 10.7-.5 16l28.3 0L323.7 324.2c-6-2.7-12.7-4.2-19.7-4.2l-32 0 0-128 111.5 0z"/>
          </svg>
          <span>Hoạt động & Vui chơi</span>
        </div>
      </template>
    </el-radio-button>
    <el-radio-button value="7">
      <template #default>
        <div class="flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-4 h-4" fill="currentColor">
            <!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
            <path d="M40 48C26.7 48 16 58.7 16 72l0 48c0 13.3 10.7 24 24 24l48 0c13.3 0 24-10.7 24-24l0-48c0-13.3-10.7-24-24-24L40 48zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L192 64zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-288 0zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-288 0zM16 232l0 48c0 13.3 10.7 24 24 24l48 0c13.3 0 24-10.7 24-24l0-48c0-13.3-10.7-24-24-24l-48 0c-13.3 0-24 10.7-24 24zM40 368c-13.3 0-24 10.7-24 24l0 48c0 13.3 10.7 24 24 24l48 0c13.3 0 24-10.7 24-24l0-48c0-13.3-10.7-24-24-24l-48 0z"/>
          </svg>
          <span>Xem thêm</span>
        </div>
      </template>
    </el-radio-button>
  </el-radio-group>

  <el-divider class=""/>
  <div class="flex justify-center items-center ">
    <SelectTrip_v2/>
  </div>

  <br><br><br> <br><br><br>
  <br><br><br>
  <br><br><br>
  <br><br><br>
  <br><br><br>







</section>

</template>

<style>
.el-radio-button:first-child .el-radio-button__inner{
  border-radius: 50px !important;
}
.el-radio-button__inner{
  border-radius: 50px !important;
  border: 1px solid #e5e7eb;
}
</style>