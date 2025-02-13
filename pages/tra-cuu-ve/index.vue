<script setup lang="ts"></script>

<template>
  <div class="container my-[60px] space-y-6 text-foreground">
    <p>
      <NuxtLink to="/">Trang chủ</NuxtLink> >
      <span class="underline decoration-primary">Tra cứu vé xe</span>
    </p>
    <div class="mx-auto border border-black/20 rounded-2xl p-3 mt-4 w-fit">
      <h6>Tra cứu thông tin đặt vé</h6>
      <p class="text-xs opacity-50">
        Vui lòng nhập mã vé và số điện thoại của bạn để xem thông tin vé của bạn
      </p>
      <div class="flex gap-6 mt-4">
        <div class="flex-1 space-y-0.5">
          <label for="">Mã vé xe</label>
          <input
            type="text"
            placeholder="Nhập mã vé xe"
            class="px-6 py-2 border border-black/20 rounded w-80 focus-within:outline-none"
          />
        </div>
        <div class="flex-1 space-y-0.5">
          <label for="">Số điện thoại</label>
          <input
            type="text"
            placeholder="Nhập số điện thoại"
            class="px-6 py-2 border border-black/20 rounded w-80 focus-within:outline-none"
          />
        </div>
      </div>
      <button
        class="bg-primary px-8 py-2 mt-4 block ml-auto hover:bg-primary-600 transition-colors duration-300 rounded"
      >
        Tra cứu
      </button>
    </div>
  </div>
</template>

<style scoped></style>
