<template>
    <h1 class="text-2xl font-bold mb-4 text-center text-blue-600">Đánh Giá & Góp Ý</h1>
  
    <div class="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-6">
      <!-- Danh sách góp ý và phản hồi -->
      <div v-for="feedback in feedbacks" :key="feedback.feedbackId" class="mb-6 p-4 bg-gray-50 rounded-lg shadow">
        <h2 class="text-xl font-bold text-gray-800 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.174c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.967c.3.921-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.176 0l-3.38 2.455c-.784.57-1.838-.197-1.539-1.118l1.286-3.967a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.174a1 1 0 00.95-.69l1.286-3.967z" />
          </svg>
          {{ feedback.title }}
        </h2>
        <p class="text-gray-700 mt-1">{{ feedback.content }}</p>
        <p class="text-sm text-gray-500 mt-1">Ngày: {{ feedback.date }}</p>
  
        <!-- Phản hồi liên quan -->
        <div v-for="response in responses.filter(r => r.feedbackId === feedback.feedbackId)" :key="response.responseId" class="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
          <p class="text-gray-800 font-semibold">Phản hồi:</p>
          <p class="text-gray-700">{{ response.content }}</p>
          <p class="text-sm text-gray-500">Ngày: {{ response.date }}</p>
        </div>
      </div>
  
      <!-- Nút hiển thị biểu mẫu góp ý -->
      <button @click="showForm = !showForm" class="bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 transition-transform">
        {{ showForm ? 'Ẩn Biểu Mẫu' : 'Gửi Góp Ý' }}
      </button>
  
      <!-- Biểu mẫu góp ý dưới dạng modal -->
      <div v-if="showForm" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div class="bg-white p-8 rounded-lg shadow-lg w-[500px]">
          <h2 class="text-2xl font-bold text-center mb-4">Biểu Mẫu Góp Ý</h2>
          <input v-model="newFeedback.title" type="text" placeholder="Tiêu đề" class="w-full p-3 mb-3 border rounded focus:ring-2 focus:ring-blue-300" />
          <textarea v-model="newFeedback.content" rows="5" placeholder="Nội dung góp ý" class="w-full p-3 mb-3 border rounded focus:ring-2 focus:ring-blue-300"></textarea>
          <div class="flex justify-between">
            <button @click="submitFeedback" class="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">Gửi</button>
            <button @click="showForm = false" class="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">Hủy</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  
  const showForm = ref(false);
  
  const feedbacks = ref([
    { feedbackId: 1, title: 'Cải thiện giao diện', content: 'Giao diện nên có thêm chế độ tối.', date: '2025-02-25' },
    { feedbackId: 2, title: 'Tăng tốc độ tải trang', content: 'Trang tải hơi chậm vào giờ cao điểm.', date: '2025-02-24' }
  ]);
  
  const responses = ref([
    { responseId: 1, feedbackId: 1, content: 'Chúng tôi sẽ xem xét và cập nhật trong phiên bản tới.', date: '2025-02-25' },
    { responseId: 2, feedbackId: 1, content: 'Chúng tôi đã hoàn tất bản cập nhật.', date: '2025-02-25' },
    { responseId: 3, feedbackId: 2, content: 'Đội ngũ kỹ thuật đang tối ưu hóa tốc độ tải trang.', date: '2025-02-24' },
  ]);
  
  const newFeedback = ref({ title: '', content: '' });
  
  const submitFeedback = () => {
    if (newFeedback.value.title && newFeedback.value.content) {
      feedbacks.value.push({
        feedbackId: feedbacks.value.length + 1,
        ...newFeedback.value,
        date: new Date().toISOString().split('T')[0]
      });
      newFeedback.value = { title: '', content: '' };
      showForm.value = false;
      alert('Góp ý đã được gửi. Cảm ơn bạn!');
    } else {
      alert('Vui lòng điền đầy đủ thông tin.');
    }
  };
  </script>
  
  <style scoped>
  .border-dashed {
    border-style: dashed;
  }
  </style>
  