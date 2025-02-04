<template>
  <div class="min-h-screen bg-gray-100 mx-[10%] my-[3%]">
    <!-- Header -->
    <div class="bg-white py-4 px-6 shadow-md">
      <div class="flex justify-between items-center">
        <div>
          <h1 class="text-lg font-semibold">
            {{ search.from }} → {{ search.to }}
          </h1>
          <p class="text-sm text-gray-500">
            {{ formattedDate }} | {{ search.seats }} seat{{ search.seats > 1 ? 's' : '' }}
          </p>
        </div>
        <button
          class="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm"
          @click="toggleSearchForm"
        >
          {{ showSearchForm ? "Hide Search" : "Change Search" }}
        </button>
      </div>
    </div>

    <!-- Search Form -->
    <div v-if="showSearchForm" class="bg-white mt-[3%] p-6 rounded-lg shadow-md">
      <form class="grid grid-cols-2 gap-4">
        <div>
          <label class="block text-sm font-medium text-gray-700">From</label>
          <input v-model="tempSearch.from" type="text" class="form-input" />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700">To</label>
          <input v-model="tempSearch.to" type="text" class="form-input" />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700">Departure Date</label>
          <input v-model="tempSearch.date" type="date" class="form-input" />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700">No. of Seats</label>
          <input v-model="tempSearch.seats" type="number" class="form-input" />
        </div>
      </form>
      <div class="mt-4 flex justify-end">
        <button @click="applySearch" class="bg-orange-500 text-white px-6 py-2 rounded-lg text-sm">
          Apply
        </button>
      </div>
    </div>

    <!-- Filters -->
    <div class="flex mt-[3%]">
      <div class="w-1/4 bg-white p-4 rounded-lg shadow-md">
        <h2 class="text-lg font-semibold mb-4">Filter Results</h2>
        <button class="text-blue-500 text-sm mb-4" @click="resetFilters">Reset filter</button>
        <div v-for="(options, key) in filters" :key="key" class="mb-6">
          <h3 class="text-sm font-medium text-gray-700">{{ key }}</h3>
          <div v-for="option in options" :key="option" class="mt-2">
            <input type="checkbox" :id="option" v-model="selectedFilters[key]" class="mr-2" />
            <label :for="option" class="text-sm text-gray-600">{{ option }}</label>
          </div>
        </div>
      </div>

      <!-- Ticket List -->
      <!-- Ticket List -->
      <div class="w-3/4 ml-4">
        <div
          v-for="ticket in tickets"
          :key="ticket.id"
          class="bg-white mb-[3%] p-4 rounded-lg shadow-md flex justify-between items-center"
        >
          <div>
            <h3 class="text-lg font-semibold">{{ ticket.company }}</h3>
            <p class="text-sm text-gray-500">
              {{ ticket.departure }} → {{ ticket.arrival }}
            </p>
            <p class="text-sm text-gray-500">Duration: {{ ticket.duration }}</p>
          </div>
          <div class="text-right">
            <p class="text-lg font-semibold text-orange-500">
              {{ ticket.price }} VND
            </p>
            <button class="mt-2 bg-blue-500 text-white px-4 py-2 rounded-lg text-sm">
              Book Now
            </button>
          </div>
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

const filters = ref<Record<string, string[]>>({
  "Select boarding point": ["VP Tan Binh", "Ben Xe Mien Dong"],
  "Select arrival point": ["Da Lat Center", "Phuong Trang Office"],
  "Departure Time": ["Morning", "Afternoon", "Evening"],
  "Arrival Time": ["Morning", "Afternoon", "Evening"],
  "Facilities": ["WiFi", "Water", "Recliner"],
  "Seat Arrangement": ["Sleeper", "Seater"],
});

const selectedFilters = ref<Record<string, string[]>>(
  Object.keys(filters.value).reduce((acc, key) => {
    acc[key] = [];
    return acc;
  }, {} as Record<string, string[]>)
);

const tickets = ref([
  { id: 1, company: "Dien Linh Limousine", departure: "18:30", arrival: "02:05 (+1d)", duration: "7h 35m", price: "275,400" },
  { id: 2, company: "Dien Linh Limousine", departure: "19:00", arrival: "02:35 (+1d)", duration: "7h 35m", price: "275,400" },
]);

const applySearch = () => {
  search.value = { ...tempSearch.value };
  showSearchForm.value = false;
};

const resetFilters = () => {
  Object.keys(selectedFilters.value).forEach((key) => {
    selectedFilters.value[key] = [];
  });
};
</script>

