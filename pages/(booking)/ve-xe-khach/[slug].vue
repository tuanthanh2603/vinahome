<script setup lang="ts">

import SelectTrip_v2 from "~/components/select/SelectTrip_v2.vue";
import {Delete, LocationFilled, Place, Minus, Check, CaretRight} from "@element-plus/icons-vue";
const trips = [
  {
    id: 1,
    company: "Nhà xe A",
    departure: "Hồ Chí Minh",
    destination: "Đà Nẵng",
    time: "08:00 AM",
    price: "400.000 VND",
  },
  {
    id: 2,
    company: "Nhà xe B",
    departure: "Hà Nội",
    destination: "Huế",
    time: "10:30 AM",
    price: "350.000 VND",
  },
  {
    id: 3,
    company: "Nhà xe B",
    departure: "Hà Nội",
    destination: "Huế",
    time: "10:30 AM",
    price: "350.000 VND",
  },
  {
    id: 4,
    company: "Nhà xe B",
    departure: "Hà Nội",
    destination: "Huế",
    time: "10:30 AM",
    price: "350.000 VND",
  },
];
const valuePoint = ref(3);
const activeTabs = reactive<Record<number, number | null>>({});


const handleClick = (tripId: number, tab: { name: number }) => {
  if (activeTabs[tripId] === tab.name) {
    activeTabs[tripId] = null;
  } else {
    activeTabs[tripId] = tab.name;
  }
};

const checked1 = ref(true)
const checked2 = ref(false)
</script>

<template>
  <section class="container mx-auto mt-10 mb-16">
    <div class="flex justify-center items-center ">
      <SelectTrip_v2/>
    </div>
    <div class="mt-16">
      <el-row :gutter="20" class="mb-10">
        <el-col :span="7">
          <div class="p-4 bg-white rounded-2xl">
            <div class="flex justify-between items-center mb-5">
              <h2 class="text-lg">BỘ LỌC TÌM KIẾM</h2>
              <el-button type="danger" text>
                Bỏ lọc <el-icon class="el-icon--right"><Delete /></el-icon>
              </el-button>
            </div>

            <el-collapse accordion>
              <el-collapse-item title="Consistency" name="1">
                <template #title>
                <span class="font-semibold text-lg">
                  Giờ đi
                </span>
                </template>
                <div class="flex flex-col px-4">
                  <el-checkbox v-model="checked1" label="00:00 - 06:00" size="large" />
                  <el-checkbox v-model="checked2" label="06:00 - 12:00" size="large" />
                  <el-checkbox v-model="checked2" label="12:00 - 18:00" size="large" />
                  <el-checkbox v-model="checked2" label="18:00 - 24:00" size="large" />
                </div>
                <div>

                </div>
              </el-collapse-item>
              <el-collapse-item name="2">
                <template #title>
                  <span class="font-semibold text-lg">
                    Nhà xe
                  </span>
                </template>
                <div>

                </div>
              </el-collapse-item>
              <el-collapse-item  name="3">
                <template #title>
                  <span class="font-semibold text-lg">
                    Giá vé
                  </span>
                </template>

              </el-collapse-item>
              <el-collapse-item  name="4">
                <template #title>
                  <span class="font-semibold text-lg">
                    Loại xe
                  </span>
                </template>

              </el-collapse-item>
              <el-collapse-item  name="5">
                <template #title>
                  <span class="font-semibold text-lg">
                    Đánh giá
                  </span>
                </template>

              </el-collapse-item>
            </el-collapse>
          </div>
        </el-col>
        <el-col :span="17">
          <h2 class="text-lg font-semibold mb-4">Danh sách chuyến đi</h2>
          <div class="flex flex-col gap-4">
            <div v-for="trip in trips" :key="trip.id" class="trip-card rounded-2xl bg-white pt-4 pl-4 pr-4 pb-1">
              <div class="flex justify-between">
                <!-- Ảnh -->
                <div class="flex items-center gap-2 rounded overflow-hidden border border-gray-300 h-[140px] w-[200px]">
                  <img src="/static/a2.png" class="h-full w-full object-fill object-cover">
                </div>
                <!-- Thông tin chuyến đi -->
                <div class="w-full ml-4">
                  <div class="flex">
                    <div class="text-sm flex flex-col">
                      <div class="flex items-center gap-4">
                        <span class="text-[20px] font-semibold">{{ trip.company }}</span>
                        <div class="px-2 bg-[#0072bc] rounded-lg">
                          <el-rate v-model="valuePoint" disabled show-score text-color="#ff9900" score-template="{value}" />
                        </div>
                      </div>
                      <span class="text-[#909295] mt-2">Giường nằm 40 chỗ</span>
                    </div>
                    <div class="ml-auto flex flex-col text-right">
                      <span class="text-xl font-bold text-red-500">350.000đ</span>
                      <div class="flex gap-1">
                        <span class="line-through text-gray-500">300.000đ</span>
                        <div class="bg-red-500 px-[2px] rounded">
                          <span class="text-sm text-white items-center">-10%</span>
                        </div>
                      </div>

                    </div>
                  </div>

                  <div class="flex text-base font-medium my-1">
                    <div class="flex flex-col">
                      <div class="flex items-center gap-2">
                        <el-icon :style="{ color: 'red', fontSize: '1.5rem' }"><Place /></el-icon>
                        <span class="text-black text-xl w-16 text-center">16:00</span>
                        <el-icon style="color: #99a9bf"><CaretRight /></el-icon>
                        <span class="text-black text-md">Bến xe Miền Tây</span>
                      </div>
                      <div class="py-[1px] flex items-center gap-2">
                        <el-icon :style="{ fontSize: '1.5rem', transform: 'rotate(90deg)', color: '#909295' }"><Minus /></el-icon>
                        <span class="text-sm text-gray-500 mx-2">6h00</span>
                      </div>
                      <div class="flex items-center gap-2">
                        <el-icon :style="{ color: '#3B82F6', fontSize: '1.5rem' }"><LocationFilled /></el-icon>
                        <span class="text-black text-xl w-16 text-center">23:00</span>
                        <el-icon style="color: #99a9bf"><CaretRight /></el-icon>
                        <span class="text-black text-md">Bến xe Đà Lạt</span>
                      </div>
                    </div>
                    <div class="ml-5">
                      <ul>
                        <li>
                          <div class="flex items-center gap-2">
                            <el-icon style="color: #108AB1"><Check /></el-icon>
                            <span class="text-sm text-gray-500">Xác nhận tức thì</span>
                          </div>
                        </li>
                        <li>
                          <div class="flex items-center gap-2">
                            <el-icon style="color: #108AB1"><Check /></el-icon>
                            <span class="text-sm text-gray-500">Không cần thanh toán trước</span>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div class=" text-white px-3 py-1 rounded ml-auto flex items-end ">
                      <span class="text-amber-600 text-md">Còn 4 chỗ trống</span>
                    </div>



                  </div>
                </div>
              </div>

              <!-- Tabs -->
              <div class="relative">
                <el-divider style="margin: 2px" />
                <el-button type="primary" round class="absolute bottom-[-38px] right-0 z-10">
                  <span class="mx-2">Chọn chuyến</span>
                </el-button>

              </div>
              <el-tabs v-model="activeTabs[trip.id]" class="demo-tabs relative z-0" @tab-click="(tab: any): void => handleClick(trip.id, tab)">
                <el-tab-pane label="Chọn ghế" :name="1">Sơ đồ ghế</el-tab-pane>
                <el-tab-pane label="Lịch trình" :name="2">Lịch trình</el-tab-pane>
                <el-tab-pane label="Trung chuyển" :name="3">
                  <div class="p-4">
                    Đón/ trả tận nơi:

                    - Thời gian nhận khách : Trước 4 tiếng.
                    - Thời gian xe đón : Chuẩn bị trước 2 -3 tiếng, do mật độ giao thông trong thành phố và sẽ kết hợp đón nhiều điểm khác nhau nên thời gian đón cụ thể tài xế sẽ liên hệ hẹn giờ.
                    - Hẻm nhỏ xe không quay đầu được : Xe trung chuyển sẽ đón Khách đầu hẻm/ đầu đường.
                    - Khu vực có biển cấm dừng đỗ xe không đón được : Xe trung chuyển sẽ đón tại vị trí gần nhất có thể.
                    - Hành lý : Hành lý nhỏ gọn dưới 20 kg, không vận chuyển kèm động vật , thú cưng, không mang đồ có mùi, đồ chảy nước trên xe.nn
                  </div>
                </el-tab-pane>
                <el-tab-pane label="Chính sách" :name="4">Chính sách</el-tab-pane>
              </el-tabs>


            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </section>
</template>

<style>
.el-tabs__nav{
  float: left !important;
}
.el-tabs__nav-wrap:after{
  background-color: #fff !important;
}
.el-tabs__header{
  padding: 0 !important;
  margin: 0 !important;
}
.el-collapse-item__content {
  padding-bottom: 10px !important;
}
.el-checkbox.el-checkbox--large .el-checkbox__label{
  font-size: 15px !important;
}

</style>