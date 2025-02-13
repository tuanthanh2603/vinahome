<script setup lang="ts">
const form = ref({
  name: "",
  phone: "",
  email: "",
  bus_company_name: "",
  address: "",
  consulting_content: "",
});

const errors = ref({
  name: false,
  phone: false,
  address: false
});

const validateField = (field: keyof typeof form.value) => {
  if (form.value[field] === '') {
    errors.value[field as keyof typeof errors.value] = true;
  } else {
    errors.value[field as keyof typeof errors.value] = false;
  }
};

// Create a reusable error message component
const ErrorMessage = (props: { show: boolean }) => {
  return props.show 
    ? h('span', { class: 'error-message' }, 'Hãy điền thông tin')
    : null;
};
</script>

<template>
  <div class="form-container">
    <form>
      <h1>Bắt đầu lấp đầy chỗ trống trên xe của bạn trên VinaHome</h1>

      <div class="box-container">
        <div class="input-container">
          <span>Họ và tên<span class="required">*</span></span>
          <el-input 
            v-model="form.name" 
            placeholder="" 
            @blur="validateField('name')"
          />
          <ErrorMessage :show="errors.name" />
        </div>

        <div class="input-container">
          <span>Số điện thoại<span class="required">*</span></span>
          <el-input 
            v-model="form.phone" 
            placeholder="" 
            @blur="validateField('phone')"
          />
          <ErrorMessage :show="errors.phone" />
        </div>
      </div>

      <div class="box-container">
        <div class="input-container">
          <span>Email</span>
          <el-input v-model="form.email" placeholder="" />
        </div>

        <div class="input-container">
          <span>Tên công ty</span>
          <el-input v-model="form.bus_company_name" placeholder="" />
        </div>
      </div>

      <div class="box-container">
        <div class="input-container">
          <span>Địa chỉ<span class="required">*</span></span>
          <el-input 
            v-model="form.address" 
            placeholder="" 
            @blur="validateField('address')"
          />
          <ErrorMessage :show="errors.address" />
        </div>
      </div>

      <div class="box-container">
        <div class="input-container">
          <span>Nội dung tư vấn</span>
          <el-input v-model="form.consulting_content" type="textarea" placeholder="" />
        </div>
      </div>

      <el-button type="primary" class="submit-button" >Đăng ký mở bán</el-button>
    </form>
  </div>
</template>

<style scoped>
  .form-container {
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  form {
    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    width: 100%;
    max-width: 450px;
  }

  h1 {
    font-size: 20px;
    font-weight: 600;
    text-align: center;
    
    @media (max-width: 768px) {
      font-size: 18px;
    }
  }

  .required {
    color: red;
  }

  .box-container {
    width: 100%;
    display: flex;
    gap: 20px;
    align-items: center;
    justify-content: center;
    
    @media (max-width: 768px) {
      flex-direction: column;
      gap: 10px;
    }
  }

  .input-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
  }

  .error-message {
    color: red;
    font-size: 12px;
    margin-top: 4px;
  }

  .submit-button {
    padding-left: 10px;
    padding-right: 10px;
  }
</style>
