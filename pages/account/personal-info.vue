<script setup lang="ts">
definePageMeta({
  layout: 'default'
});
import ContentAccountCustomer from "~/components/customer/ContentAccountCustomer.vue"
import {ElMessage, ElMessageBox, type UploadProps, type UploadUserFile} from 'element-plus'





const userData = ref({
  avatar: "https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png",
  fullName: "Nguyễn Văn A",
  birthDate: "2002/03/26",
  gender: 1,
  phone: "0123456789",
  email: "nguyenvana@example.com",
});
const fileList = ref<UploadUserFile[]>([]);
const handleAvatarUpload: UploadProps["onSuccess"] = (response, file) => {
  userData.value.avatar = URL.createObjectURL(file.raw as Blob);
};
const saveChanges = () => {
  console.log("Dữ liệu cập nhật:", userData.value);
};
</script>

<template>
  <NuxtLayout name="layout-v1">
<!--    <ContentAccountCustomer/>-->
    <h2 class="text-lg">Thông tin cá nhân</h2>
    <div class="bg-white rounded-lg w-full py-2">
      <div class="mx-5 my-5 flex items-center">
        <div class="flex flex-col w-full">
          <span class="text-sm font-semibold mb-2">Ảnh đại diện</span>
          <div class="flex items-center mb-6">
            <el-avatar :size="70" :src="userData.avatar" />
            <el-upload
                class="upload-demo mx-3"
                action="#"
                :auto-upload="false"
                :on-success="handleAvatarUpload"
                v-model:file-list="fileList"
            >
              <el-button type="info">
                <el-icon class="mr-1"><Upload /></el-icon> Cập nhật ảnh mới
              </el-button>
            </el-upload>
          </div>
          <div class="flex w-full">
            <div class="w-1/2 mr-2">
              <div class="flex flex-col w-full ">
                <span class="text-sm font-semibold mb-2">Họ và tên</span>
                <el-input v-model="userData.fullName" size="large"  placeholder="Họ và tên" />
              </div>
              <div class="flex flex-col w-full my-5">
                <span class="text-sm font-semibold mb-2">Ngày sinh</span>
                <el-date-picker
                    v-model="userData.birthDate"
                    type="date"
                    placeholder="Ngày sinh"
                    class="w-full"
                    size="large"
                />
              </div>
              <div class="flex flex-col w-full">
                <span class="text-sm font-semibold mb-2">Giới tính</span>
                <el-radio-group v-model="userData.gender">
                  <el-radio size="large" :value="1">Nam</el-radio>
                  <el-radio size="large" :value="2">Nữ</el-radio>
                  <el-radio size="large" :value="3">Khác</el-radio>
                </el-radio-group>
              </div>
            </div>
            <el-divider direction="vertical" class=""/>
            <div class="w-1/2 ml-2">
              <div class="flex flex-col w-full">
                <span class="text-sm font-semibold mb-2">Số điện thoại</span>
                <el-input v-model="userData.phone" size="large"  placeholder="Số điện thoại" />
              </div>
              <div class="flex flex-col w-full my-5">
                <span class="text-sm font-semibold mb-2">Email</span>
                <el-input v-model="userData.email" size="large"  placeholder="Email" />
              </div>
              <div class="flex flex-col w-full">
                <span class="text-sm font-semibold mb-2">Mật khẩu</span>
                <el-button type="warning" plain>Đổi mật khẩu</el-button>
              </div>
            </div>
          </div>
          <div class="mt-5">
            <el-button type="primary" size="large" class="w-[250px]" @click="saveChanges">Lưu thay đổi</el-button>
          </div>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<style>
.el-divider--vertical{
  height: 15em !important;
}
</style>