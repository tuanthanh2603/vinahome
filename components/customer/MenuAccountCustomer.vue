<template>
    <div class="w-full p-4 bg-white rounded-lg shadow">
        <ul>
            <li v-for="item in menuItems" :key="item.path" class="mb-4 flex items-center">
                <el-icon :class="isActive(item.path) ? 'text-blue-600' : 'text-gray-600'" class="mr-3">
                    <component :is="item.icon" />
                </el-icon>
                <router-link :to="item.path"
                    :class="isActive(item.path) ? 'text-blue-600 font-semibold' : 'text-gray-800'"
                    class="text-lg font-medium hover:text-yellow-500">
                    {{ item.label }}
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { User, Ticket, Discount, ChatDotRound, Bell } from '@element-plus/icons-vue';

const route = useRoute(); // Lấy thông tin route hiện tại
const menuItems = ref([
    { label: 'Thông tin cá nhân', path: '/tai-khoan/thong-tin', icon: User },
    { label: 'Thông tin vé của tôi', path: '/tai-khoan/ve-cua-toi', icon: Ticket }, // 🎟️ Biểu tượng vé
    { label: 'Ưu đãi', path: '/tai-khoan/uu-dai', icon: Discount }, // 🎁 Biểu tượng ưu đãi
    { label: 'Nhận xét', path: '/tai-khoan/nhan-xet', icon: ChatDotRound }, // 💬 Biểu tượng nhận xét
    { label: 'Thông báo của tôi', path: '/', icon: Bell }, // 🔔 Biểu tượng thông báo
]);
// Kiểm tra xem đường dẫn hiện tại có khớp với menu không
const isActive = (path: string) => route.path === path;
</script>

<style scoped></style>