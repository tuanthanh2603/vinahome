<template>
    <div class="page-container">
        <!-- Thanh tìm kiếm chuyến -->
        <el-row justify="center" class="p-4 search-bar-container">
            <el-card class="w-full max-w-5xl search-card">
              <div class="inner-border">
                <div class="search-body">
                  <el-row :gutter="10" align="middle" class="search-container">
                    <!-- Điểm đi & Điểm đến -->
                    <el-col :xs="24" :sm="12" :md="10" :lg="9" class="location-box">
                      <el-input v-model="from" placeholder="Hồ Chí Minh (SGN)" class="location-input" />
                      <el-button icon="el-icon-sort" circle class="swap-button" @click="swapLocations" />
                      <el-input v-model="to" placeholder="Quy Nhơn (UIH)" class="location-input" />
                    </el-col>
      
                    <!-- Ngày đi & Ngày về -->
                    <el-col :xs="24" :sm="12" :md="10" :lg="10">
                      <el-date-picker
                        v-model="dates"
                        type="daterange"
                        range-separator="-"
                        start-placeholder="08 tháng 04"
                        end-placeholder="10 tháng 04"
                        class="date-picker"
                      />
                    </el-col>
      
                    <!-- Nút Tìm kiếm -->
                    <el-col :xs="24" :sm="24" :md="4" :lg="3" class="search-button-container">
                      <el-button type="primary" class="search-button" @click="searchFlights">Tìm</el-button>
                    </el-col>
                  </el-row>
                </div>
              </div>
            </el-card>
          </el-row>
  
      <!-- Danh sách chuyến xe -->
      <div class="bus-list">
        <h2>Đề xuất chuyến xe tốt nhất cho bạn</h2>
        <div v-for="bus in sortedBuses" :key="bus.id" class="bus-card">
          <div class="bus-info">
            <h3>
              <img
                src="https://phanthietvn.com/wp-content/uploads/2016/03/xe-bus-5-sao-tu-tan-son-nhat-den-trung-tam-sai-gon-10.jpg"
                alt="Bus"
                class="bus-icon"
              />
              {{ bus.company }} - {{ bus.class }}
            </h3>
            <p class="time-info">
              <span><strong>Giờ khởi hành:</strong> {{ bus.departureTime }}</span>
              ➝
              <span><strong>Giờ đến:</strong> {{ bus.arrivalTime }}</span>
            </p>
            <p class="duration"><strong>Thời gian di chuyển:</strong> {{ bus.duration }}</p>
            <p class="dates">
              <strong>Ngày khởi hành:</strong> {{ bus.startDate }}
              <strong>Ngày kết thúc:</strong> {{ bus.endDate }}
            </p>
            <a href="#" class="details">Chi tiết chuyến xe</a>
          </div>
          <div class="bus-action">
            <p class="price">{{ bus.price }} VND</p>
            <button @click="selectBus(bus)" class="btn-select">Chọn</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "FlightSearchBar",
    data() {
      return {
        from: "Hồ Chí Minh (SGN)",
        to: "Quy Nhơn (UIH)",
        dates: [],
        buses: [
          {
            id: 1,
            company: "Mai Linh",
            class: "Giường nằm",
            departureTime: "08:00",
            arrivalTime: "14:00",
            duration: "06h 00p",
            price: 350000,
            startDate: "2025-02-10",
            endDate: "2025-02-10"
          },
          {
            id: 2,
            company: "Phương Trang",
            class: "Ghế ngồi",
            departureTime: "09:30",
            arrivalTime: "15:30",
            duration: "06h 00p",
            price: 320000,
            startDate: "2025-02-10",
            endDate: "2025-02-10"
          },
          {
            id: 3,
            company: "Vinasun",
            class: "Giường nằm",
            departureTime: "10:00",
            arrivalTime: "16:00",
            duration: "06h 00p",
            price: 300000,
            startDate: "2025-02-10",
            endDate: "2025-02-10"
          }
        ]
      };
    },
    computed: {
      sortedBuses() {
        return this.buses.sort((a, b) => a.price - b.price);
      }
    },
    methods: {
      swapLocations() {
        [this.from, this.to] = [this.to, this.from];
      },
      searchFlights() {
        console.log("Tìm chuyến bay từ", this.from, "đến", this.to, "vào", this.dates);
      },
      selectBus(bus) {
        alert(`Bạn đã chọn xe của ${bus.company} với giá ${bus.price} VND`);
      }
    }
  };
  </script>
  
  <style scoped>
  .page-container {
    padding: 1rem;
    background: #f9f9f9;
  }
  
  /* Khung ngoài màu xám */
  .search-card {
    background: #d3d3d3; /* Màu xám */
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  /* Khung bên trong */
  .inner-border {
    background: #e0e0e0;
    padding: 10px;
    border-radius: 6px;
  }
  
  /* Khung trong màu trắng */
  .search-body {
    background: white;
    border-radius: 8px;
    padding: 15px 20px;
  }
  
  .search-container {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }
  
  .location-box {
    display: flex;
    align-items: center;
  }
  
  .location-input {
    min-width: 120px;
  }
  
  .swap-button {
    background: #ddd;
    border-radius: 50%;
  }
  
  .search-button-container {
    display: flex;
    justify-content: flex-end;
  }
  
  .search-button {
    background: orange;
    color: white;
    font-weight: bold;
    padding: 10px;
    width: 100%;
  }
  
  .location-box {
    display: flex;
    align-items: center;
  }
  
  .location-input {
    min-width: 120px;
  }
  
  .swap-button {
    background: #ddd;
    border-radius: 50%;
  }
  
  .search-container > .el-col {
    padding: 0 5px; /* Khoảng cách giữa các phần tử */
  }
  
  .search-button-container {
    display: flex;
    justify-content: flex-end;
  }
  
  .search-button {
    background: orange;
    color: white;
    font-weight: bold;
    padding: 10px;
    width: 100%; /* Đảm bảo nút kéo dài toàn bộ cột khi xuống dòng */
  }
  
  /* Danh sách chuyến xe */
  .bus-list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
    background: #f5f5f5;
    border-radius: 8px;
  }
  
  .bus-card {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #ddd;
    background: white;
    padding: 1rem;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .bus-info {
    flex: 1;
  }
  
  .bus-icon {
    width: 24px;
    margin-right: 8px;
  }
  
  .time-info,
  .dates {
    font-size: 16px;
    color: #333;
  }
  
  .duration {
    font-size: 14px;
    color: #666;
  }
  
  .details {
    color: #007bff;
    text-decoration: none;
  }
  
  .bus-action {
    text-align: right;
  }
  
  .price {
    font-size: 18px;
    font-weight: bold;
    color: red;
  }
  
  .btn-select {
    background: orange;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    cursor: pointer;
  }
  
  @media (max-width: 768px) {
    .search-container {
      flex-direction: column;
    }
  
    .location-box {
      margin-bottom: 10px;
    }
  
    .search-button {
      width: 100%;
    }
  }
  </style>
  