<template>
  <h1 class="text-2xl font-bold mb-4">Vé Của Tôi</h1>

  <div v-for="ticket in tickets" :key="ticket.code" class="p-6 bg-white rounded-lg shadow max-w-6xl mx-auto">
    <div class="flex flex-wrap justify-between items-start rounded-lg border border-gray-300 p-4 shadow-md overflow-hidden">
      <!-- Hình ảnh hành trình -->
      <div class="flex flex-col items-center mr-6">
        <div class="relative w-28 h-28 border border-gray-300 rounded-lg overflow-hidden">
          <img :src="ticket.image || defaultImage" alt="Hành trình" class="w-full h-full object-cover" />
        </div>
      </div>

      <!-- Thông tin vé -->
      <div class="flex-1 space-y-2">
        <p class="text-lg font-bold">Mã Vé: <span class="text-blue-600">{{ ticket.code }}</span></p>
        <p class="text-base text-gray-700">📍 Tuyến: <span class="font-medium">{{ ticket.departure }}</span><span
            class="mx-1">→</span><span class="font-medium">{{ ticket.destination }}</span></p>
        <p class="text-base text-gray-700">📅 Ngày Giờ: {{ ticket.date }} | {{ ticket.time }}</p>
        <p class="text-base text-gray-700">🚌 Số xe: <span class="font-medium">{{ ticket.busNumber }}</span></p>
        <p class="text-base text-gray-700">💺 Chỗ ngồi: <span class="font-semibold">{{ ticket.seat }}</span></p>
        <p class="text-base font-bold" :class="getStatusClass(ticket.status)">Trạng thái: {{ ticket.status }}</p>
      </div>

      <!-- QR Code và Nút Thao Tác -->
      <div class="flex flex-col items-center space-y-3">
        <div>
          <h2 class="text-base font-medium mb-1 text-center">QR Check-in</h2>
          <div class="w-28 h-28 border border-gray-300 p-1 rounded-lg">
            <img :src="ticket.qrCode" alt="QR Code" class="w-full h-full object-contain" />
          </div>
        </div>

        <!-- Nút Thao Tác (Nằm Cạnh Nhau) -->
        <div class="flex space-x-3">
          <button class="bg-red-500 text-white px-4 py-2 rounded-lg shadow hover:bg-red-600 text-base"
            @click="cancelTicket(ticket)">
            Hủy vé
          </button>
          <button class="bg-green-500 text-white px-4 py-2 rounded-lg shadow hover:bg-green-600 text-base"
            @click="downloadPDF(ticket)">
            Tải PDF
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const defaultImage = 'https://via.placeholder.com/150';

const tickets = ref([
  {
    code: 'VE123456',
    departure: 'Hà Nội',
    destination: 'Đà Nẵng',
    busNumber: '29B-12345', // ✅ Thêm số xe
    date: '2025-03-15',
    time: '08:00 AM',
    seat: '12A',
    status: 'Đã xác nhận',
    image: 'https://images.unsplash.com/photo-1558980664-10fe5f7c3601',
    qrCode: 'https://laptopdell.com.vn/wp-content/uploads/2022/08/ma-Qr-code-la-gi.jpg',
  },
  {
    code: 'VE654321',
    departure: 'Hồ Chí Minh',
    destination: 'Nha Trang',
    busNumber: '51C-67890', // ✅ Thêm số xe
    date: '2025-04-10',
    time: '01:30 PM',
    seat: '7B',
    status: 'Đang chờ',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438',
    qrCode: 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=VE654321',
  },
  {
    code: 'VE789012',
    departure: 'Hải Phòng',
    destination: 'Đà Lạt',
    busNumber: '16H-45678', // ✅ Thêm số xe
    date: '2025-05-20',
    time: '06:00 AM',
    seat: '3C',
    status: 'Đã hủy',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    qrCode: 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=VE789012',
  },
]);

const getStatusClass = (status: string) => {
  return {
    'text-green-500': status === 'Đã xác nhận',
    'text-yellow-500': status === 'Đang chờ',
    'text-red-500': status === 'Đã hủy',
  };
};

const cancelTicket = (ticket: any) => {
  if (ticket.status !== 'Đã hủy' && confirm(`Bạn có chắc muốn hủy vé ${ticket.code} không?`)) {
    ticket.status = 'Đã hủy';
  }
};

const downloadPDF = (ticket: any) => {
  alert(`Chức năng tải vé PDF cho vé ${ticket.code} đang được phát triển.`);
};
</script>

<style scoped></style>