<template>
  <div class="p-6 bg-white rounded-lg shadow max-w-5xl mx-auto">
    <div class="flex items-center mb-6">
      <img
        src="https://via.placeholder.com/100"
        alt="Profile Picture"
        class="rounded-full w-24 h-24 mr-6 border border-gray-300"
      />
      <button class="bg-blue-500 text-white px-4 py-2 rounded shadow font-medium text-lg">Cập nhật ảnh mới</button>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-8 items-center">
      <!-- Cột Trái -->
      <div class="space-y-6">
        <div>
          <label class="block text-lg font-medium mb-2">Họ và tên</label>
          <input type="text" class="w-5/6 border border-gray-300 rounded p-2 font-medium text-lg" placeholder="Khách hàng" />
        </div>
        <div>
          <label class="block text-lg font-medium mb-2">Ngày sinh</label>
          <input type="date" class="w-5/6 border border-gray-300 rounded p-2 font-medium text-lg" />
        </div>
        <div>
          <label class="block text-lg font-medium mb-2">Giới tính</label>
          <select class="w-5/6 border border-gray-300 rounded p-2 font-medium text-lg">
            <option value="male">Nam</option>
            <option value="female">Nữ</option>
            <option value="other">Khác</option>
          </select>
        </div>
      </div>
      <!-- Đường thẳng giữa hai cột -->
      <div class="w-px bg-gray-300 h-full mx-auto"></div>
      <!-- Cột Phải -->
      <div class="space-y-6">
        <div>
          <label class="block text-lg font-medium mb-2">Số điện thoại</label>
          <p class="w-3/4 border border-transparent rounded p-2 font-medium text-lg">***** *** 505</p>
        </div>
        <div>
          <label class="block text-lg font-medium mb-2">Email</label>
          <div class="flex items-center justify-between">
            <p class="w-3/4 border border-transparent rounded p-2 mr-2 font-medium text-lg">Email của bạn</p>
            <button class="text-blue-500 hover:underline font-medium text-lg">Cập nhật</button>
          </div>
        </div>
        <div>
          <label class="block text-lg font-medium mb-2">Mật khẩu</label>
          <div class="flex items-center justify-between">
            <span class="font-medium text-lg">Đổi mật khẩu</span>
            <button class="text-blue-500 hover:underline font-medium text-lg">Cập nhật</button>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-8 flex justify-end">
      <button class="bg-blue-500 text-white px-6 py-2 rounded shadow font-medium text-lg">Lưu thay đổi</button>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
