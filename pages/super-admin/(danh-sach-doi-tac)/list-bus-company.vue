<script setup lang="ts">
import {ElMessage} from "element-plus";

definePageMeta({
  layout: 'superadmin'
});

import { computed, ref } from 'vue'
import type {CompanyType} from "~/types/CompanyType";
import {createCompanyAPI} from "~/api/companyAPI";



const search = ref('')
const filterTableData = computed(() =>
    tableData.value.filter(
        (data) =>
            !search.value ||
            data.companyName.toLowerCase().includes(search.value.toLowerCase()) ||
            data.phoneNumber.toLowerCase().includes(search.value.toLowerCase())
    )
);


const tableData = ref<CompanyType[]>([
  {
    id: 1,
    companyName: "Công ty A",
    phoneNumber: "0397892603",
    address: "HCM",
    status: true,
    createdAt: "2016-05-03",
    note: "",
  },
  {
    id: 2,
    companyName: "Công ty B",
    phoneNumber: "0975123456",
    address: "HN",
    status: false,
    createdAt: "2020-10-15",
    note: "",
  },
]);

const dialogVisible = ref(false)
const isEdit = ref(false);

const form = ref<CompanyType>({
  id: 0,
  companyName: "",
  phoneNumber: "",
  address: "",
  status: false,
  createdAt: "",
  note: "",
});




const handleAddNew = () => {
  isEdit.value = false;
  form.value = {
    id: 0,
    companyName: "",
    phoneNumber: "",
    address: "",
    status: false,
    note: "",
    createdAt: new Date().toISOString().split("T")[0], // Lấy ngày hiện tại
  };
  dialogVisible.value = true;
};

const handleEdit = (index: number, row: CompanyType) => {
  isEdit.value = true;
  dialogVisible.value = true;

  // Gán dữ liệu vào form để chỉnh sửa
  form.value = { ...row };
};

const formRef = ref();

const rules = {
  companyName: [{ required: true, message: "Vui lòng nhập tên nhà xe", trigger: "blur" }],
  phoneNumber: [{ required: true, message: "Vui lòng nhập số điện thoại", trigger: "blur" }],
  address: [{ required: true, message: "Vui lòng nhập địa chỉ", trigger: "blur" }],
};

const submitForm = () => {
  formRef.value?.validate(async (valid: boolean) => {
    if (valid) {
      if (isEdit.value) {
        ElMessage.success("Cập nhật nhà xe thành công!");
      } else {
        await createCompanyAPI(form.value);
        console.log(form.value);
        ElMessage.success("Thêm nhà xe thành công!");
      }
      dialogVisible.value = false;
    } else {
      ElMessage.error("Vui lòng nhập đầy đủ thông tin!");
    }
  });
};
</script>

<template>
  <section class="mx-auto p-4">
    <div class="flex justify-between items-center">
      <h3 class="text-lg font-semibold">Danh sách nhà xe</h3>
      <el-button type="primary" @click="handleAddNew">Thêm nhà xe</el-button>
    </div>
    <el-table :data="filterTableData" style="width: 100%">
      <el-table-column label="STT" width="60">
        <template #default="{ row, $index }">
          {{ $index + 1 }}
        </template>
      </el-table-column> 
      <el-table-column label="Tên nhà xe" prop="companyName" />
      <el-table-column label="Số điện thoại" prop="phoneNumber" />
      <el-table-column label="Trạng thái" prop="status" />
      <el-table-column label="Địa chỉ" prop="address" />
      <el-table-column label="Ghi chú" prop="note" />
      <el-table-column label="Ngày tạo" prop="createdAt" />
      <el-table-column align="right">
        <template #header>
          <el-input v-model="search" size="small" placeholder="Tìm kiếm" />
        </template>
        <template #default="scope">
          <el-button size="small" @click="handleEdit(scope.$index, scope.row)">
            Edit
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </section>

  <el-dialog v-model="dialogVisible" width="500">
    <template #title>
      <span>{{ isEdit ? "Chỉnh sửa nhà xe" : "Thêm nhà xe mới" }}</span>
    </template>

    <!-- Form -->
    <el-form :model="form" :rules="rules" ref="formRef" label-width="120px">
      <el-form-item label="Tên nhà xe" prop="companyName">
        <el-input v-model="form.companyName" />
      </el-form-item>
      <el-form-item label="Số điện thoại" prop="phoneNumber">
        <el-input v-model="form.phoneNumber" />
      </el-form-item>
      <el-form-item label="Địa chỉ" prop="address">
        <el-input v-model="form.address" />
      </el-form-item>
      <el-form-item label="Ghi chú" prop="note">
        <el-input v-model="form.note" />
      </el-form-item>
      <el-form-item label="Trạng thái" prop="status">
        <el-switch v-model="form.status" />
      </el-form-item>
    </el-form>

    <!-- Footer -->
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="dialogVisible = false">Hủy</el-button>
        <el-button type="primary" @click="submitForm">
          {{ isEdit ? "Cập nhật" : "Thêm mới" }}
        </el-button>
      </div>
    </template>
  </el-dialog>

</template>

<style scoped>

</style>