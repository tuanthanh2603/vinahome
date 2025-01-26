<script setup lang="ts">
import { ArrowRightBold, ArrowLeftBold } from "@element-plus/icons-vue";
const isActive = ref(false);

const valuePointDown = ref('')
const valuePointUp = ref('')
const options = [
  {
    value: 'Option1',
    label: 'Đà Lạt - Lâm Đồng',
  },
  {
    value: 'Option2',
    label: 'Buôn Ma Thuột - Đăk Lăk',
  },
  {
    value: 'Option3',
    label: 'Option3',
  },
  {
    value: 'Option4',
    label: 'Option4',
  },
  {
    value: 'Option5',
    label: 'Option5',
  },
]

const isActivePointUp = ref<boolean>(false);
const isActivePointDown = ref<boolean>(false);
const isCalendarVisible = ref<boolean>(false);

const togglePointUp = () => {
  isActivePointUp.value = !isActivePointUp.value;
  if (isActivePointUp.value) {
    isActivePointDown.value = false;
    isCalendarVisible.value = false;
  }
};

const togglePointDown = () => {
  isActivePointDown.value = !isActivePointDown.value;
  if (isActivePointDown.value) {
    isActivePointUp.value = false;
    isCalendarVisible.value = false;
  }
};

const toggleCalendar = () => {
  isCalendarVisible.value = !isCalendarVisible.value;
  if (isCalendarVisible.value) {
    isActivePointUp.value = false;
    isActivePointDown.value = false;
  }
};


const lunarMonths = [ 29, 30 ];

const getLunarDate = (year: number, month: number, day: number): string => {
  if (!day) {
    return '';
  }
  const totalDays = calculateDaysFromStartOfYear(year, month, day);
  let lunarMonth = 0;
  let lunarDay = totalDays + 1;

  while (lunarDay > lunarMonths[ lunarMonth % 2 ]) {
    lunarDay -= lunarMonths[ lunarMonth % 2 ];
    lunarMonth++;
  }

  return `${lunarDay}`;
};

// tổng số ngày từ đầu năm
const calculateDaysFromStartOfYear = (year: number, month: number, day: number): number => {
  let totalDays = 0;
  for (let i = 0; i < month - 1; i++) {
    totalDays += new Date(year, i + 1, 0).getDate(); // số ngày của từng tháng
  }
  totalDays += day;
  return totalDays;
};




const formattedDate = ref<string>('');

const selectedMonth = ref<number>(new Date().getMonth());
console.log('Tháng:', selectedMonth.value);
const selectedYear = ref<number>(new Date().getFullYear());
console.log('Năm:', selectedYear.value);
const monthNames = [ 'Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12' ];
const weekDays = [ 'T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN' ];
const daysInMonth = ref<{ day: number | null; lunar: string | null }[]>([]);
const daysInNextMonth = ref<{ day: number | null; lunar: string | null }[]>([]);

onMounted(() => {
  updateDaysInMonth();
  updateDaysInNextMonth();
  selectToday();
});



const prevMonth = () => {
  if (selectedMonth.value === 0) {
    selectedMonth.value = 11;
    selectedYear.value--;
  } else {
    selectedMonth.value--;
  }
  updateDaysInMonth();
  updateDaysInNextMonth();
};

const nextMonth = () => {
  if (selectedMonth.value === 11) {
    selectedMonth.value = 0;
    selectedYear.value++;
  } else {
    selectedMonth.value++;
  }
  updateDaysInMonth();
  updateDaysInNextMonth();
};

const updateDaysInMonth = () => {
  const year = selectedYear.value;
  const month = selectedMonth.value;
  const date = new Date(year, month, 1); // Ngày đầu tiên của tháng
  const days = [];
  let firstDayIndex = date.getDay(); // Lấy thứ trong tuần của ngày đầu tháng

  // Điều chỉnh firstDayIndex để phù hợp với thứ tự mới của weekDays
  firstDayIndex = (firstDayIndex + 6) % 7;

  // Thêm các ô trống trước ngày đầu tiên của tháng
  for (let i = 0; i < firstDayIndex; i++) {
    days.push({ day: null, lunar: null }); // Không tính lịch âm cho các ô trống
  }

  // Tính toán các ngày trong tháng
  while (date.getMonth() === month) {
    const day = date.getDate(); // Ngày dương lịch

    // Chỉ tính lịch âm nếu ngày hợp lệ
    const lunarDate = day ? getLunarDate(year, month + 1, day) : null;

    days.push({ day, lunar: lunarDate });
    date.setDate(day + 1); // Chuyển sang ngày tiếp theo
  }

  daysInMonth.value = days;
};
const updateDaysInNextMonth = () => {
  const year = selectedMonth.value === 11 ? selectedYear.value + 1 : selectedYear.value;
  const month = (selectedMonth.value + 1) % 12;
  const date = new Date(year, month, 1); // Ngày đầu tiên của tháng tiếp theo
  const days = [];
  let firstDayIndex = date.getDay(); // Lấy thứ trong tuần của ngày đầu tháng

  // Điều chỉnh firstDayIndex để phù hợp với thứ tự mới của weekDays
  firstDayIndex = (firstDayIndex + 6) % 7;

  // Thêm các ô trống trước ngày đầu tiên của tháng
  for (let i = 0; i < firstDayIndex; i++) {
    days.push({ day: null, lunar: null }); // Không tính lịch âm cho các ô trống
  }

  // Tính toán các ngày trong tháng
  while (date.getMonth() === month) {
    const day = date.getDate(); // Ngày dương lịch

    // Chỉ tính lịch âm nếu ngày hợp lệ
    const lunarDate = day ? getLunarDate(year, month + 1, day) : null;

    days.push({ day, lunar: lunarDate });
    date.setDate(day + 1); // Chuyển sang ngày tiếp theo
  }

  daysInNextMonth.value = days;
};



const selectDate = (day: number, isNextMonth: boolean = false) => {
  const year = isNextMonth && selectedMonth.value === 11 ? selectedYear.value + 1 : selectedYear.value;
  const month = isNextMonth ? (selectedMonth.value + 1) % 12 : selectedMonth.value;
  const date = new Date(year, month, day);
  formattedDate.value = date.toLocaleDateString();
  isCalendarVisible.value = false;
};

const isSelectedDay = (day: number, isNextMonth: boolean = false) => {
  const year = isNextMonth && selectedMonth.value === 11 ? selectedYear.value + 1 : selectedYear.value;
  const month = isNextMonth ? (selectedMonth.value + 1) % 12 : selectedMonth.value;
  const date = new Date(year, month, day);
  return formattedDate.value === date.toLocaleDateString();
};

const isPastDate = (day: number | null, isNextMonth: boolean = false) => {
  if (day === null) {
    return true; // Consider null days as past dates or handle as needed
  }

  const year = isNextMonth && selectedMonth.value === 11 ? selectedYear.value + 1 : selectedYear.value;
  const month = isNextMonth ? (selectedMonth.value + 1) % 12 : selectedMonth.value;
  const date = new Date(year, month, day);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return date < today;
};

const selectToday = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();
  const day = today.getDate();
  formattedDate.value = today.toLocaleDateString();
  selectedYear.value = year;
  selectedMonth.value = month;
  updateDaysInMonth();
  updateDaysInNextMonth();
};
const isToday = (day: number) => {
  const today = new Date();
  return (
    today.getDate() === day &&
    today.getMonth() === selectedMonth.value &&
    today.getFullYear() === selectedYear.value
  );
};





</script>

<!-- filepath: /Users/tuanthanh/Desktop/vinahome/components/SelectTrip.vue -->
<template>
  <div class="flex items-center px-5 py-2">
    <div class="h-16 border border-gray-200 rounded-lg flex items-center flex-1 relative">
      <div class="relative">

        <div class="flex-1 flex justify-between w-[220px] items-center cursor-pointer "
          :class="{ 'active-border-point-up': isActivePointUp }">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="ml-2 h-5 w-5 mr-2 icon-pointUp shrink-0">
            <path
              d="M448 256A192 192 0 1 0 64 256a192 192 0 1 0 384 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 80a80 80 0 1 0 0-160 80 80 0 1 0 0 160zm0-224a144 144 0 1 1 0 288 144 144 0 1 1 0-288zM224 256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
          </svg>
          <div class="flex flex-col w-full m-2 cursor-pointer">
            <div @click="togglePointUp" class="cursor-pointer">
              <span class="text-[13px] text-gray-400 mb-[2px]">Nơi đi</span>
              <input type="text" class="block bg-white text-[15px] outline-none" />
            </div>
          </div>

          <div v-if="isActivePointUp"
            class="absolute bg-white border border-gray-300 rounded-md shadow-md mt-[415px] p-4 w-[220px] z-10">
            <el-scrollbar height="300px">
              <p v-for="item in 20" :key="item" class="scrollbar-demo-item">{{ item }}</p>
            </el-scrollbar>
          </div>
        </div>

      </div>

      <div class="flex-1 border-gray-200 flex justify-between w-[220px] items-center"
        :class="{ 'active-border-point-down': isActivePointDown }">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="ml-2 h-5 w-5 mr-2 ml-2 icon-pointDown">
          <path
            d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
        </svg>
        <div class="flex flex-col w-full m-2">
          <div @click="togglePointDown" class="cursor-pointer">
            <span class="text-[13px] text-gray-400 mb-[2px]">Nơi đến</span>
            <input type="text" class="block bg-white text-[15px] outline-none" />
          </div>
        </div>
        <div v-if="isActivePointDown"
          class="absolute bg-white border border-gray-300 rounded-md shadow-md mt-[140px] p-4 w-[220px] z-10">
          aaaa
        </div>
      </div>

      <div class="flex-1 border-gray-200 flex justify-between w-[200px] items-center"
        :class="{ 'active-border-calendar ': isCalendarVisible }">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="h-5 w-5 mr-2 ml-5 icon-calendar">
          <path
            d="M128 0c17.7 0 32 14.3 32 32l0 32 128 0 0-32c0-17.7 14.3-32 32-32s32 14.3 32 32l0 32 48 0c26.5 0 48 21.5 48 48l0 48L0 160l0-48C0 85.5 21.5 64 48 64l48 0 0-32c0-17.7 14.3-32 32-32zM0 192l448 0 0 272c0 26.5-21.5 48-48 48L48 512c-26.5 0-48-21.5-48-48L0 192zm64 80l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm128 0l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zM64 400l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zm112 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16z" />
        </svg>

        <div class="flex flex-col w-full m-2">
          <div @click="toggleCalendar" class="cursor-pointer">
            <span class="block text-[13px] text-gray-400 mb-[2px]">Ngày đi</span>
            <div class="block bg-white text-[15px]">
              {{ formattedDate || 'Chọn ngày' }}
            </div>
          </div>

          <div v-if="isCalendarVisible"
            class="absolute bg-white border border-gray-300 rounded-md shadow-md mt-16 p-4 w-[814px] z-10 left-[-22px]">
            <div class="flex justify-between mb-2">
              <el-button @click="prevMonth" class="" :icon="ArrowLeftBold" circle />
              <div class="text-center font-semibold">
                <span class="text-[17px]">{{ monthNames[ selectedMonth ] }}, {{ selectedYear }}</span>
              </div>
              <div class="text-center font-semibold">
                <span class="text-[17px]">{{ monthNames[ (selectedMonth + 1) % 12 ] }}, {{ selectedMonth === 11 ?
                  selectedYear + 1 : selectedYear }}</span>
              </div>
              <el-button @click="nextMonth" class="" :icon="ArrowRightBold" circle />
            </div>

            <div class="flex gap-4">
              <div class="w-1/2">
                <div class="grid grid-cols-7 gap-2 text-center text-sm font-semibold border-b py-2">
                  <div v-for="(day, index) in weekDays" :key="index"
                    :class="index >= weekDays.length - 2 ? 'text-red-500' : ''">
                    {{ day }}
                  </div>
                </div>

                <div class="grid grid-cols-7 gap-2 mt-2">
                  <div v-for="(day, index) in daysInMonth" :key="index"
                    @click="day.day !== null && !isPastDate(day.day) && selectDate(day.day!)" :class="[
                      'text-center cursor-pointer',
                      day && day.day !== null && isSelectedDay(day.day) ? 'bg-yellow-500 text-black rounded py-[2px]' : '',
                      isPastDate(day.day) ? 'text-gray-400 cursor-not-allowed' : '',
                      day && day.day !== null && isToday(day.day) ? 'text-[#0072bc] rounded hover:bg-blue-100 hover:rounded hover:shadow' : '',
                      day && day.day !== null && !isSelectedDay(day.day) && !isToday(day.day) && !isPastDate(day.day) ? 'hover:bg-blue-100 hover:rounded hover:shadow' : ''
                    ]">
                    <span v-if="day.day">{{ day.day }}</span>
                    <br />
                    <small v-if="day.lunar" class="text-gray-500 block text-right mr-[5px] text-[11px] my-[2px]">
                      {{ day.lunar }}
                    </small>
                  </div>



                </div>

              </div>

              <div class="w-1/2">
                <div class="grid grid-cols-7 gap-2 text-center text-sm font-semibold border-b py-2">
                  <div v-for="(day, index) in weekDays" :key="index"
                    :class="index >= weekDays.length - 2 ? 'text-red-500' : ''">
                    {{ day }}
                  </div>
                </div>

                <div class="grid grid-cols-7 gap-2 mt-2">
                  <div v-for="(day, index) in daysInNextMonth" :key="index"
                    @click="day.day !== null && !isPastDate(day.day, true) && selectDate(day.day!, true)" :class="[
                      'text-center cursor-pointer',
                      day && day.day !== null && isSelectedDay(day.day, true) ? 'bg-yellow-500 text-black rounded py-[2px]' : '',
                      isPastDate(day.day, true) ? 'text-gray-400 cursor-not-allowed' : '',
                      day && day.day !== null && !isSelectedDay(day.day, true) && !isPastDate(day.day, true) ? 'hover:bg-blue-100 hover:rounded hover:shadow' : ''
                    ]">
                    <span v-if="day.day">{{ day.day }}</span>
                    <br />
                    <small v-if="day.lunar" class="text-gray-500 block text-right mr-[5px] text-[11px] my-[2px]">
                      {{ day.lunar }}
                    </small>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

      </div>
    </div>

    <button class="bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg ml-5 h-14 w-[150px]">
      Tìm kiếm
    </button>
  </div>
</template>

<style>
.icon-calendar {
  fill: #0072bc;
}

.icon-pointDown {
  fill: #F04770;
}

.icon-pointUp {
  fill: #108AB1;
}



.active-border-calendar {
  border-bottom: 3px solid #0072bc;
  border-bottom-right-radius: 6px;
  margin-top: 3px;
}

.border-calendar {
  border-bottom: 3px solid #0072bc;
  border-bottom-right-radius: 6px;
}

.active-border-point-up {
  border-bottom: 3px solid #0072bc;
  border-bottom-left-radius: 6px;
}

.active-border-point-down {
  border-bottom: 3px solid #0072bc;
}
</style>