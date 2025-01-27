<script setup lang="ts">
import { Message } from "@element-plus/icons-vue";
import SelectTrip from "~/components/SelectTrip.vue";
const routes = [
  {
    name: 'Tuyến Sài Gòn - Đà Lạt',
    price: '250,000',
    image: 'https://via.placeholder.com/480x150?text=Route+Image+1',
  },
  {
    name: 'Tuyến Hà Nội - Hải Phòng',
    price: '150,000',
    image: 'https://via.placeholder.com/480x150?text=Route+Image+2',
  },
  {
    name: 'Tuyến Huế - Quảng Nam',
    price: '200,000',
    image: 'https://via.placeholder.com/480x150?text=Route+Image+3',
  },
  {
    name: 'Tuyến Cần Thơ - Phú Quốc',
    price: '350,000',
    image: 'https://via.placeholder.com/480x150?text=Route+Image+4',
  },
  {
    name: 'Tuyến Đà Nẵng - Hội An',
    price: '180,000',
    image: 'https://via.placeholder.com/480x150?text=Route+Image+5',
  },
  {
    name: 'Tuyến Sài Gòn - Vũng Tàu',
    price: '220,000',
    image: 'https://via.placeholder.com/480x150?text=Route+Image+6',
  },
  {
    name: 'Tuyến Hà Nội - Sapa',
    price: '300,000',
    image: 'https://via.placeholder.com/480x150?text=Route+Image+7',
  },
  {
    name: 'Tuyến Nha Trang - Phan Thiết',
    price: '280,000',
    image: 'https://via.placeholder.com/480x150?text=Route+Image+8',
  },
];
function chunkArray(array: any[], size: number) {
  const chunked = [];
  for (let i = 0; i < array.length; i += size) {
    chunked.push(array.slice(i, i + size));
  }
  return chunked;
}

const chunkedRoutes = computed(() => chunkArray(routes, 4));
</script>

<template>
  <section class="relative flex flex-col justify-center items-center min-h-[600px] bg-red-200 w-full">
    <div class="bg-white custom-tabs rounded-lg py-3">
      <el-tabs class="">
        <el-tab-pane>
          <template #label>
            <span class="custom-tabs-label flex items-center space-x-2 mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill="currentColor" class="w-4 h-4">
                <path
                  d="M288 0C422.4 0 512 35.2 512 80l0 16 0 32c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32l0 160c0 17.7-14.3 32-32 32l0 32c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-32-192 0 0 32c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-32c-17.7 0-32-14.3-32-32l0-160c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32c0 0 0 0 0 0l0-32s0 0 0 0l0-16C64 35.2 153.6 0 288 0zM128 160l0 96c0 17.7 14.3 32 32 32l112 0 0-160-112 0c-17.7 0-32 14.3-32 32zM304 288l112 0c17.7 0 32-14.3 32-32l0-96c0-17.7-14.3-32-32-32l-112 0 0 160zM144 400a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm288 0a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM384 80c0-8.8-7.2-16-16-16L208 64c-8.8 0-16 7.2-16 16s7.2 16 16 16l160 0c8.8 0 16-7.2 16-16z" />
              </svg>
              <span class="text-[17px]">Xe khách</span>
            </span>
          </template>
          <SelectTrip />
        </el-tab-pane>

        <el-tab-pane>
          <template #label>
            <span class="custom-tabs-label flex items-center space-x-2 mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" fill="currentColor" class="w-4 h-4">
                <path
                  d="M312 32c-13.3 0-24 10.7-24 24s10.7 24 24 24l25.7 0 34.6 64-149.4 0-27.4-38C191 99.7 183.7 96 176 96l-56 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l43.7 0 22.1 30.7-26.6 53.1c-10-2.5-20.5-3.8-31.2-3.8C57.3 224 0 281.3 0 352s57.3 128 128 128c65.3 0 119.1-48.9 127-112l49 0c8.5 0 16.3-4.5 20.7-11.8l84.8-143.5 21.7 40.1C402.4 276.3 384 312 384 352c0 70.7 57.3 128 128 128s128-57.3 128-128s-57.3-128-128-128c-13.5 0-26.5 2.1-38.7 6L375.4 48.8C369.8 38.4 359 32 347.2 32L312 32zM458.6 303.7l32.3 59.7c6.3 11.7 20.9 16 32.5 9.7s16-20.9 9.7-32.5l-32.3-59.7c3.6-.6 7.4-.9 11.2-.9c39.8 0 72 32.2 72 72s-32.2 72-72 72s-72-32.2-72-72c0-18.6 7-35.5 18.6-48.3zM133.2 368l65 0c-7.3 32.1-36 56-70.2 56c-39.8 0-72-32.2-72-72s32.2-72 72-72c1.7 0 3.4 .1 5.1 .2l-24.2 48.5c-9 18.1 4.1 39.4 24.3 39.4zm33.7-48l50.7-101.3 72.9 101.2-.1 .1-123.5 0zm90.6-128l108.5 0L317 274.8 257.4 192z" />
              </svg>
              <span class="text-[17px]">Thuê xe</span>
            </span>
          </template>
        </el-tab-pane>

        <el-tab-pane>
          <template #label>
            <span class="custom-tabs-label flex items-center space-x-2 mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="currentColor" class="w-4 h-4">
                <path
                  d="M48 0C21.5 0 0 21.5 0 48L0 464c0 26.5 21.5 48 48 48l96 0 0-80c0-26.5 21.5-48 48-48s48 21.5 48 48l0 80 96 0c26.5 0 48-21.5 48-48l0-416c0-26.5-21.5-48-48-48L48 0zM64 240c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zm112-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zM80 96l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zM272 96l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16z" />
              </svg>
              <span class="text-[17px]">Khách sạn</span>
            </span>
          </template>
        </el-tab-pane>
      </el-tabs>
    </div>

    <div class="absolute bottom-0 w-[100%] text-center ">
      <div class=" bg-black bg-opacity-25">
        <el-row>
          <el-col :span="6">
            <div class="flex items-center space-x-2 justify-center py-5">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="h-6 w-6 fill-yellow-500">
                <path
                  d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
              </svg>
              <span class="text-white font-bold">Chắc chắn có chỗ</span>
            </div>

          </el-col>
          <el-col :span="6">
            <div class="flex items-center space-x-2 justify-center py-5">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="h-6 w-6 fill-yellow-500">
                <path
                  d="M256 48C141.1 48 48 141.1 48 256l0 40c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-40C0 114.6 114.6 0 256 0S512 114.6 512 256l0 144.1c0 48.6-39.4 88-88.1 88L313.6 488c-8.3 14.3-23.8 24-41.6 24l-32 0c-26.5 0-48-21.5-48-48s21.5-48 48-48l32 0c17.8 0 33.3 9.7 41.6 24l110.4 .1c22.1 0 40-17.9 40-40L464 256c0-114.9-93.1-208-208-208zM144 208l16 0c17.7 0 32 14.3 32 32l0 112c0 17.7-14.3 32-32 32l-16 0c-35.3 0-64-28.7-64-64l0-48c0-35.3 28.7-64 64-64zm224 0c35.3 0 64 28.7 64 64l0 48c0 35.3-28.7 64-64 64l-16 0c-17.7 0-32-14.3-32-32l0-112c0-17.7 14.3-32 32-32l16 0z" />
              </svg>
              <span class="text-white font-bold">Hỗ trợ 24/7</span>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="flex items-center space-x-2 justify-center py-5">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="h-6 w-6 fill-yellow-500">
                <path
                  d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM228 104c0-11-9-20-20-20s-20 9-20 20l0 14c-7.6 1.7-15.2 4.4-22.2 8.5c-13.9 8.3-25.9 22.8-25.8 43.9c.1 20.3 12 33.1 24.7 40.7c11 6.6 24.7 10.8 35.6 14l1.7 .5c12.6 3.8 21.8 6.8 28 10.7c5.1 3.2 5.8 5.4 5.9 8.2c.1 5-1.8 8-5.9 10.5c-5 3.1-12.9 5-21.4 4.7c-11.1-.4-21.5-3.9-35.1-8.5c-2.3-.8-4.7-1.6-7.2-2.4c-10.5-3.5-21.8 2.2-25.3 12.6s2.2 21.8 12.6 25.3c1.9 .6 4 1.3 6.1 2.1c0 0 0 0 0 0s0 0 0 0c8.3 2.9 17.9 6.2 28.2 8.4l0 14.6c0 11 9 20 20 20s20-9 20-20l0-13.8c8-1.7 16-4.5 23.2-9c14.3-8.9 25.1-24.1 24.8-45c-.3-20.3-11.7-33.4-24.6-41.6c-11.5-7.2-25.9-11.6-37.1-15l-.7-.2c-12.8-3.9-21.9-6.7-28.3-10.5c-5.2-3.1-5.3-4.9-5.3-6.7c0-3.7 1.4-6.5 6.2-9.3c5.4-3.2 13.6-5.1 21.5-5c9.6 .1 20.2 2.2 31.2 5.2c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-6.5-1.7-13.7-3.4-21.1-4.7l0-13.9z" />
              </svg>
              <span class="text-white font-bold">Nhiều ưu đãi</span>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="flex items-center space-x-2 justify-center py-5">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="h-6 w-6 fill-yellow-500">
                <path
                  d="M512 80c8.8 0 16 7.2 16 16l0 32L48 128l0-32c0-8.8 7.2-16 16-16l448 0zm16 144l0 192c0 8.8-7.2 16-16 16L64 432c-8.8 0-16-7.2-16-16l0-192 480 0zM64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l448 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zm56 304c-13.3 0-24 10.7-24 24s10.7 24 24 24l48 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-48 0zm128 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l112 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-112 0z" />
              </svg>
              <span class="text-white font-bold">Thanh toán đa dạng</span>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
  </section>
  <section class="mt-5 mb-10">
    <div class="container mx-auto px-4">
      <h2 class="text-center text-[24px] mb-4">Tuyến đường phổ biến</h2>

      <el-carousel indicator-position="outside">
        <el-carousel-item v-for="(slide, slideIndex) in chunkedRoutes" :key="'carousel-' + slideIndex" class="py-4">
          <el-row :gutter="20">
            <el-col v-for="(route, routeIndex) in slide" :key="'card-' + slideIndex + '-' + routeIndex" :span="6">
              <el-card
                class="max-w-[480px] mx-auto bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg hover:scale-105 transition-transform duration-300">
                <img src="https://f1e425bd6cd9ac6.cmccloud.com.vn/cms-tool/destination/images/24/img_hero.png"
                  alt="Route Image" class="w-full h-[150px] object-cover" />
                <div class="p-2 text-center">
                  <h3 class="text-[15px] font-bold">{{ route.name }}</h3>
                  <h4 class="text-[13px] mt-1">Từ {{ route.price }} VND</h4>
                  <el-button type="warning" class="w-full mt-3">Xem chi tiết</el-button>
                </div>

              </el-card>
            </el-col>
          </el-row>
        </el-carousel-item>
      </el-carousel>
    </div>
  </section>

  <section>
    <div class="container mx-auto px-4">
      <div class="flex items-center space-x-4">
        <img src="/static/question.png" alt="Question Icon" class="w-[40px]">
        <h3 class="text-[24px] font-bold">Lý do nên đặt chỗ với Vinahome?</h3>
      </div>

      <el-row class="mt-5 mb-5">
        <el-col :span="8">
          <div
            class="mx-10 flex justify-center items-center space-x-4 p-4 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200">
            <img src="/static/credit-card.png" alt="Icon" class="w-[50px] h-[50px]">
            <div>
              <h3 class="text-[16px] font-bold">Đáp ứng mọi nhu cầu của bạn</h3>
              <span class="text-gray-600">Thông tin chi tiết khác</span>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="mx-10 flex justify-center items-center space-x-4 p-4 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200">
            <img src="/static/cvv.png" alt="Icon" class="w-[50px] h-[50px]">
            <div>
              <h3 class="text-[16px] font-bold">Tuỳ chọn chỗ linh hoạt</h3>
              <span class="text-gray-600">Thông tin chi tiết khác</span>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="mx-10 flex justify-center items-center space-x-4 p-4 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200">
            <img src="/static/money-bag.png" alt="Icon" class="w-[50px] h-[50px]">
            <div>
              <h3 class="text-[16px] font-bold">Thanh toán an toàn và thuận tiện</h3>
              <span class="text-gray-600">Thông tin chi tiết khác</span>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </section>

  <section class="relative isolate overflow-hidden  py-16 sm:py-24 lg:py-32 border-t-[10px] border-gray-100">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
        <div class="max-w-xl lg:max-w-lg">
          <h2 class="text-4xl font-semibold tracking-tight text-[#0072bc]">
            Cập nhật ngay những mẹo du lịch mới nhất và ưu đãi hấp dẫn nhất
          </h2>
          <div class="mt-6 flex max-w-md gap-x-4">
            <label for="email-address" class="sr-only">Địa chỉ email</label>
            <el-input :prefix-icon="Message" style="width: 300px" placeholder="Nhập địa chỉ email của bạn" />
            <el-button type="primary" plain>Đăng ký nhận tin</el-button>
          </div>
        </div>
        <dl class="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
          <div class="flex flex-col items-start">
            <div class="flex items-center gap-x-4 rounded-md bg-white/5 p-2 ring-1 ring-white/10">
              <img src="/static/new-product.png" alt="No Spam" class="w-[50px]">
              <dt class="text-base font-semibold text-black">Bài viết hàng tuần</dt>
            </div>
            <dd class="mt-2 text-base text-gray-400">
              Nhận những thông tin hữu ích về du lịch và khám phá mỗi tuần.
            </dd>
          </div>

          <div class="flex flex-col items-start">
            <div class="flex items-center gap-x-4 rounded-md bg-white/5 p-2 ring-1 ring-white/10">
              <img src="/static/risk.png" alt="No Spam" class="w-[50px] h-[50px]">
              <dt class="text-base font-semibold text-black">Không spam</dt>
            </div>
            <dd class="mt-2 text-base text-gray-400">
              Chúng tôi chỉ gửi nội dung chất lượng, không làm phiền bạn với tin nhắn không mong muốn.
            </dd>
          </div>

        </dl>
      </div>
    </div>

  </section>


</template>

<style>
.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  margin: 0;
  text-align: center;
}


.el-carousel__container {
  height: 282px;
}

.el-card__body {
  padding: 0 !important;
}
</style>