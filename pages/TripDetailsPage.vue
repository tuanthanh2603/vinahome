<template>
  <div class="min-h-screen bg-gray-100 mx-[10%] my-[3%] p-4">
    <!-- Header -->
    <div class="bg-white py-8 px-10 shadow-md">
      <div class="flex justify-between items-center">
        <div>
          <h1 class="text-3xl font-bold">
            {{ search.from }} → {{ search.to }}
          </h1>
          <p class="text-lg text-gray-600">
            {{ formattedDate }} | {{ search.seats }} ghế
          </p>
        </div>
        <button class="bg-blue-500 text-white px-6 py-4 rounded-lg text-lg font-medium" @click="toggleSearchForm">
          {{ showSearchForm ? "Ẩn" : "Thay Đổi" }}
        </button>
      </div>
    </div>

    <!-- Search Form -->
    <div v-if="showSearchForm" class="bg-white mt-[1%] p-8 rounded-lg shadow-md">
      <form class="grid grid-cols-2 gap-6">
        <div>
          <label class="block text-lg font-medium text-gray-700">From</label>
          <input v-model="tempSearch.from" type="text" class="form-input text-lg" />
        </div>
        <div>
          <label class="block text-lg font-medium text-gray-700">To</label>
          <input v-model="tempSearch.to" type="text" class="form-input text-lg" />
        </div>
        <div>
          <label class="block text-lg font-medium text-gray-700">Departure Date</label>
          <input v-model="tempSearch.date" type="date" class="form-input text-lg" />
        </div>
        <div>
          <label class="block text-lg font-medium text-gray-700">No. of Seats</label>
          <input v-model="tempSearch.seats" type="number" class="form-input text-lg" />
        </div>
      </form>
      <div class="mt-6 flex justify-end">
        <button @click="applySearch" class="bg-orange-500 text-white px-8 py-3 rounded-lg text-lg">
          Apply
        </button>
      </div>
    </div>

    <!-- Filters -->
    <div class="flex mt-8">
      <!-- Sidebar Filters -->
      <div class="w-1/4 bg-white p-6 rounded-lg shadow-md">
        <h2 class="text-xl font-semibold mb-6">Filter Results</h2>
        <button class="text-blue-500 text-lg mb-6" @click="resetFilters">
          Reset filter
        </button>

        <!-- Danh mục bộ lọc -->
        <div v-for="(options, key) in filters" :key="key" class="mb-6">
          <button @click="toggleDropdown(key)"
            class="flex justify-between items-center w-full text-lg font-medium text-gray-700 bg-gray-100 px-4 py-3 rounded-md">
            {{ key }}
            <svg class="w-5 h-5 transform transition-transform duration-300" :class="{ 'rotate-180': isOpen[key] }"
              fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>

          <div class="overflow-hidden transition-all duration-300 ease-in-out"
            :class="isOpen[key] ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'">
            <div class="mt-3 p-3 border rounded-lg bg-gray-50">
              <div v-for="option in options" :key="option" class="mt-3 flex items-center">
                <input type="checkbox" :id="option" :value="option" v-model="selectedFilters[key]"
                  class="mr-3 accent-blue-500 w-5 h-5" />
                <label :for="option" class="text-lg text-gray-600">{{ option }}</label>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Ticket List -->
      <div class="w-3/4 ml-6">
        <div v-for="ticket in filteredTickets" :key="ticket.id" class="bg-white mb-8 p-8 rounded-lg shadow-md">
          <div class="flex justify-between items-start">
            <!-- Left Section -->
            <div class="w-2/3">
              <h3 class="text-2xl font-bold text-gray-800">{{ ticket.company }}</h3>
              <p class="text-lg text-gray-600 mb-3">
                {{ ticket.departure }} → {{ ticket.arrival }}
              </p>
              <p class="text-lg text-gray-500 mb-3">Duration: {{ ticket.duration }}</p>
              <p class="text-lg text-gray-500">Seats: {{ ticket.seats }}</p>
            </div>

            <!-- Right Section -->
            <div class="w-1/3 text-right">
              <p class="text-2xl font-bold text-orange-500">{{ ticket.price }} VND</p>
              <p class="text-lg text-gray-500">/pax</p>
              <button class="mt-5 bg-blue-500 text-white px-8 py-3 rounded-lg text-lg hover:bg-blue-600 transition">
                Book Now
              </button>
            </div>
          </div>

          <!-- Tab Section -->
          <el-tabs type="card">
            <el-tab-pane label="Đặc điểm" name="features">
              <div class="flex items-center gap-6">
                <!-- Features -->
                <div class="flex-1">
                  <h4 class="text-lg font-semibold text-gray-700 mb-3">Fleet Specification</h4>
                  <ul class="text-lg text-gray-600">
                    <li>Bus Type: {{ ticket.busType }}</li>
                    <li>Seats: {{ ticket.totalSeats }}</li>
                    <li>Seat Layout: {{ ticket.seatLayout }}</li>
                    <li>Facilities: {{ ticket.facilities.join(', ') }}</li>
                  </ul>
                </div>

                <!-- Policy -->
                <div class="flex-1">
                  <h4 class="text-lg font-semibold text-gray-700 mb-3">Refund & Policy</h4>
                  <ul class="text-lg text-gray-600">
                    <li>Reschedule: {{ ticket.reschedulePolicy }}</li>
                    <li>Refund: {{ ticket.refundPolicy }}</li>
                  </ul>
                </div>

                <!-- Image -->
                <div class="w-1/3">
                  <img :src="ticket.image" alt="Bus image" class="w-full h-72 object-cover rounded-lg"/>
                </div>
              </div>
            </el-tab-pane>
            <el-tab-pane label="Tuyến" name="route"> </el-tab-pane>
            <el-tab-pane label="Vé" name="ticket"> </el-tab-pane>
          </el-tabs>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";

const showSearchForm = ref(false);
const toggleSearchForm = () => {
  showSearchForm.value = !showSearchForm.value;
};

const search = ref({ from: "Ho Chi Minh City", to: "Da Lat", date: "2025-02-04", seats: 1 });
const tempSearch = ref({ ...search.value });

const formattedDate = computed(() => {
  const date = new Date(search.value.date);
  return date.toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" });
});

const applySearch = () => {
  search.value = { ...tempSearch.value };
  showSearchForm.value = false;
};

const filters = ref({
  "Chọn điểm lên": ["VP Tân Bình", "Bến xe miền đông"],
  "Chọn điểm đến": ["Đà Lạt Center", "Phương Trang Office"],
  "Giờ khởi hành": ["Sáng", "Chiều", "Tối"],
  "Thời gian đến": ["Sáng", "Chiều", "Tối"],
  "Cơ sở vật chất": ["WiFi", "Nước", "Ghế ngả","Máy lạnh","Cổng sạc"],
  "Sắp xếp chỗ ngồi": ["Ghế ngủ", "Ghế ngồi"],
});

// Trạng thái mở/đóng của từng phần bộ lọc
const isOpen = ref(
  Object.fromEntries(Object.keys(filters.value).map((key) => [key, false]))
);

// Trạng thái bộ lọc đã chọn
const selectedFilters = ref(
  Object.fromEntries(Object.keys(filters.value).map((key) => [key, [] as string[]]))
);


// Hàm mở/đóng dropdown
const toggleDropdown = (key: string | number) => {
  isOpen.value[key] = !isOpen.value[key];
};

// Hàm reset bộ lọc
const resetFilters = () => {
  Object.keys(selectedFilters.value).forEach((key) => {
    selectedFilters.value[key] = [];
  });
};

// Hàm filter card
const filteredTickets = computed(() => {
  return tickets.value.filter(ticket => {
    return Object.keys(selectedFilters.value).every((filterKey) => {
      const selectedValues = selectedFilters.value[filterKey] ?? [];
      if (!selectedValues.length) return true;

      if (filterKey === "Cơ sở vật chất") {
        return selectedValues.every(facility => ticket.facilities.includes(facility));
      }
      if (filterKey === "Chọn điểm lên") {
        return selectedValues.includes(ticket.pickupPoint);
      }
      if (filterKey === "Chọn điểm đến") {
        return selectedValues.includes(ticket.dropoffPoint);
      }

      return selectedValues.includes(ticket[filterKey as keyof typeof ticket] as string);
    });
  });
});



const tickets = ref([
  {
    id: 1,
    company: "Dien Linh Limousine",
    departure: "00:00",
    arrival: "07:10",
    duration: "7h 10m",
    price: "275,400",
    seats: 36,
    busType: "Limousine 36 Beds",
    totalSeats: 36,
    seatLayout: "2-2",
    facilities: ["WiFi", "Ghế ngả"],
    pickupPoint: "VP Tân Bình",
    dropoffPoint: "Đà Lạt Center",
    reschedulePolicy: "Not Available",
    refundPolicy: "Non Refundable",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS93cI8ferYisAqC0khpCrusVmONrvbZ83U6Q&s",
  },
  {
    id: 2,
    company: "Viet Tien Bus",
    departure: "08:30",
    arrival: "15:30",
    duration: "7h 0m",
    price: "320,000",
    seats: 40,
    busType: "Standard 40 Seats",
    totalSeats: 40,
    seatLayout: "2-2",
    facilities: ["Máy lạnh", "Cổng sạc", "Nước"],
    pickupPoint: "Bến xe miền đông",
    dropoffPoint: "Đà Lạt Center",
    reschedulePolicy: "Available",
    refundPolicy: "Non Refundable",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu_KEtnh7oIR0Sqs8JrS7sP7q4a2CKUr9IGQ&s",
  },
  {
    id: 3,
    company: "Mai Linh Express",
    departure: "09:00",
    arrival: "16:15",
    duration: "7h 15m",
    price: "350,000",
    seats: 45,
    busType: "Luxury 45 seats",
    totalSeats: 45,
    seatLayout: "2-2",
    facilities: ["WiFi", "Nước", "Ghế ngả"],
    pickupPoint: "VP Tân Bình",
    dropoffPoint: "Đà Lạt Center",
    reschedulePolicy: "Available with fee",
    refundPolicy: "Non Refundable",
    image: "https://product.hstatic.net/200000230193/product/z3994388647966_b41e035fb13ced818071216f85762938_2721e9830ec2419fa3752e5e189dea92_master.jpg",
  },
  {
    id: 4,
    company: "Futa Bus",
    departure: "10:15",
    arrival: "17:30",
    duration: "7h 15m",
    price: "280,000",
    seats: 50,
    busType: "Standard 50 seats",
    totalSeats: 50,
    seatLayout: "2-2",
    facilities: ["Máy lạnh"],
    pickupPoint: "Bến xe miền đông",
    dropoffPoint: "Phương Trang Office",
    reschedulePolicy: "Available",
    refundPolicy: "Non Refundable",
    image: "https://drive.gianhangvn.com/image/bang-gia-xe-khach-thaco-thang-11-2024-2749060j30270x16.jpg",
  },
  {
    id: 5,
    company: "Thanh Buoi Bus",
    departure: "11:30",
    arrival: "18:30",
    duration: "7h 0m",
    price: "295,000",
    seats: 30,
    busType: "VIP 30 seats",
    totalSeats: 30,
    seatLayout: "1-1",
    facilities: ["WiFi", "Nước"],
    pickupPoint: "VP Tân Bình",
    dropoffPoint: "Phương Trang Office",
    reschedulePolicy: "Not Available",
    refundPolicy: "Non Refundable",
    image: "https://motortrip.vn/wp-content/uploads/2022/08/xe-khach-ha-noi-my-tho-tien-giang-4.jpg",
  },
  {
    id: 6,
    company: "Kumho Samco",
    departure: "12:00",
    arrival: "19:10",
    duration: "7h 10m",
    price: "275,000",
    seats: 40,
    busType: "Standard 40 seats",
    totalSeats: 40,
    seatLayout: "2-2",
    facilities: [ "Cổng sạc"],
    pickupPoint: "Bến xe miền đông",
    dropoffPoint: "Đà Lạt Center",
    reschedulePolicy: "Available with fee",
    refundPolicy: "Non Refundable",
    image: "https://hyundaimiennam.com/wp-content/uploads/2023/12/Xe-Khach-Hyundai-County-29-cho.jpg",
  },
  {
    id: 7,
    company: "Phuong Trang Bus",
    departure: "13:30",
    arrival: "20:30",
    duration: "7h 0m",
    price: "290,000",
    seats: 48,
    busType: "Luxury 48 seats",
    totalSeats: 48,
    seatLayout: "2-2",
    facilities: ["WiFi", "Nước", "Ghế ngả","Cổng sạc"],
    pickupPoint: "VP Tân Bình",
    dropoffPoint: "Phương Trang Office",
    reschedulePolicy: "Available",
    refundPolicy: "Non Refundable",
    image: "https://cdn.xanhsm.com/2024/12/4d78572c-nha-xe-dung-le-thumb.jpg",
  },
]);


// Watch để log kết quả mỗi khi `filteredTickets` thay đổi
watchEffect(() => {
  console.log("Danh sách vé sau khi lọc:", filteredTickets.value);
});
</script>

<style >
.el-tabs__header {
  display: flex;
  margin-top: 1%;
  flex-direction: column; 
  align-items: flex-start; 
  width: auto; 
}
</style>