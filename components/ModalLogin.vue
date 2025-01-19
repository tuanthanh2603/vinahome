<script setup lang="ts">
import { defineProps, defineEmits } from "vue";

// Nhận trạng thái hiển thị từ component cha
defineProps({
  visible: {
    type: Boolean,
    required: true,
  },
});

// Phát sự kiện khi cần đóng modal
const emit = defineEmits(["update:visible"]);

// Hàm đóng modal
const closeModal = () => {
  emit("update:visible", false);
};
</script>

<template>
  <el-dialog
      v-model:visible="visible"
      :show-close="false"
      width="500"
      class="login-dialog"
  >
    <div>
      <h2 class="text-xl font-bold mb-4">Đăng nhập</h2>
      <form>
        <el-input placeholder="Tên đăng nhập" class="mb-4" />
        <el-input placeholder="Mật khẩu" type="password" class="mb-4" />
        <el-button type="primary" class="w-full">Đăng nhập</el-button>
      </form>
      <el-button class="mt-4 w-full" type="text" @click="closeModal">Đóng</el-button>
    </div>
  </el-dialog>
</template>

<style scoped>
.login-dialog {
  /* Tuỳ chỉnh giao diện nếu cần */
}
</style>
