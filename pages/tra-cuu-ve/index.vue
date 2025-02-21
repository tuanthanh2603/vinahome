<script setup lang="ts">
import {lookUpTicketsList} from "~/mocks/tra-cuu";

const phoneRegex = new RegExp(
  /^(?:\+?\d{1,3}[-.\s]?)?(?:\(?\d{1,4}\)?[-.\s]?)?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/
);

const lookUpModel = reactive({
  orderCode: "",
  phoneNumber: "",
});

const resultTicket = ref("");

const onSubmit = () => {
  const { phoneNumber, orderCode } = lookUpModel;
  if (!!phoneNumber && !phoneRegex.test(phoneNumber)) {
    alert("Sai format số điện thoại");
    return;
  }

  let ticket;

  if (
    (ticket = lookUpTicketsList.find(
      (ticket) =>
        ticket.orderCode === orderCode || ticket.passenger.phone === phoneNumber
    ))
  ) {
    resultTicket.value = JSON.stringify(ticket);
  } else {
    alert("Không tìm được vé");
  }
};
</script>

<template>
  <div class="container my-[60px] space-y-6 text-foreground">
    <p>
      <NuxtLink to="/">Trang chủ</NuxtLink> >
      <span class="underline decoration-primary">Tra cứu vé xe</span>
    </p>
    <form
      class="mx-auto border border-black/20 rounded-2xl p-3 mt-4 w-fit"
      @submit.prevent="onSubmit"
    >
      <h6>Tra cứu thông tin đặt vé</h6>
      <p class="text-xs opacity-50">
        Vui lòng nhập mã vé hoặc số điện thoại của bạn để xem thông tin vé của
        bạn
      </p>
      <div class="flex gap-6 mt-4">
        <div class="flex-1 space-y-0.5">
          <label for="">Mã vé xe</label>
          <input
            type="text"
            placeholder="Nhập mã vé xe"
            class="px-6 py-2 border border-black/20 rounded w-80 focus-within:outline-none"
            v-model="lookUpModel.orderCode"
          />
        </div>
        <div class="flex-1 space-y-0.5">
          <label for="">Số điện thoại</label>
          <input
            type="text"
            placeholder="Nhập số điện thoại"
            class="px-6 py-2 border border-black/20 rounded w-80 focus-within:outline-none"
            v-model="lookUpModel.phoneNumber"
          />
        </div>
      </div>
      <button
        type="submit"
        class="bg-primary px-8 py-2 mt-4 block ml-auto hover:bg-primary-600 transition-colors duration-300 rounded"
      >
        Tra cứu
      </button>
    </form>
    {{ resultTicket }}
  </div>
</template>

<style scoped></style>
