<script setup lang="ts">
import { ref } from 'vue';
const trips = ref([
  { id: 1, company: "Phương Hồng Linh", departureTime: "08:00", price: 150000 },
  { id: 2, company: "Futa Bus", departureTime: "12:30", price: 160000 },
  { id: 3, company: "Mai Linh", departureTime: "20:45", price: 155000 },
  { id: 4, company: "Thanh Buýt", departureTime: "22:15", price: 170000 },
  { id: 1, company: "Phương Hồng Linh", departureTime: "08:00", price: 150000 },
  { id: 2, company: "Futa Bus", departureTime: "12:30", price: 160000 },
  { id: 3, company: "Mai Linh", departureTime: "20:45", price: 155000 },
  { id: 4, company: "Thanh Buýt", departureTime: "22:15", price: 170000 }
]);

</script>

<template>

<section class="section-list-trip bg-gray-100">
    <el-row :gutter="20" >
      <el-col :span="8">
        <el-affix :offset="80" class="w-full">
        <div class="wrapper-list-trip flex   text-white  m-4 rounded-lg">

          <div class="bg-white w-full h-screen shadow-lg rounded-lg p-1 box-short ml-auto">
            <h2 class="text-lg font-semibold mb-4 text-black mt-5 ml-5">BỘ LỌC TÌM KIẾM</h2>

            <!-- Giờ đi -->
            <div class="mb-4 px-5 w-full ">
              <el-collapse v-model="activeNames" @change="handleChange" accordion>
                <el-collapse-item  name="1">
                  <template #title>
                    <span class="font-semibold text-[15px]">Giờ đi</span>
                  </template>
                  <div>
                    Consistent with real life: in line with the process and logic of real
                    life, and comply with languages and habits that the users are used to;
                  </div>
                  <div>
                    Consistent within interface: all elements should be consistent, such
                    as: design style, icons and texts, position of elements, etc.
                  </div>
                </el-collapse-item>
                <el-collapse-item title="Loại xe" name="2">
                  <div>
                    Operation feedback: enable the users to clearly perceive their
                    operations by style updates and interactive effects;
                  </div>
                  <div>
                    Visual feedback: reflect current state by updating or rearranging
                    elements of the page.
                  </div>
                </el-collapse-item>
                <el-collapse-item title="Efficiency" name="3">
                  <div>
                    Simplify the process: keep operating process simple and intuitive;
                  </div>
                  <div>
                    Definite and clear: enunciate your intentions clearly so that the
                    users can quickly understand and make decisions;
                  </div>
                  <div>
                    Easy to identify: the interface should be straightforward, which helps
                    the users to identify and frees them from memorizing and recalling.
                  </div>
                </el-collapse-item>
                <el-collapse-item title="Controllability" name="4">
                  <div>
                    Decision making: giving advices about operations is acceptable, but do
                    not make decisions for the users;
                  </div>
                  <div>
                    Controlled consequences: users should be granted the freedom to
                    operate, including canceling, aborting or terminating current
                    operation.
                  </div>
                </el-collapse-item>
              </el-collapse>
            </div>
          </div>
        </div>
        </el-affix>
      </el-col>
      <el-col :span="16">
        <div class=" p-4">
          <h2 class="text-lg font-semibold mb-4">Danh sách chuyến xe</h2>
          <div class="space-y-4">
            <div v-for="trip in trips" :key="trip.id" class="p-4 border rounded-lg shadow">
              <h3 class="text-xl font-bold">{{ trip.company }}</h3>
              <p>Giờ đi: <span class="font-medium">{{ trip.departureTime }}</span></p>
              <p>Giá vé: <span class="text-red-500 font-bold">{{ trip.price }} VNĐ</span></p>
              <button class="mt-2 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
                Đặt vé
              </button>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>

</section>
</template>



<style >
.section-list-trip{
  padding-left: 50px;
  padding-right: 50px;
}
.box-short {
  min-width: 250px;


}

.wrapper-list-trip{
  display: flex;

}
</style>