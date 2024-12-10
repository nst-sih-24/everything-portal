<template>
  <q-page padding>
    <div class="dashboard-wrapper">
      <!-- Flex Container to hold both Route Info and Graphs -->
      <div class="row q-col-gutter-md q-mt-md route-container">
        <!-- Route Information Section -->
        <div class="col-4 route-info">
          <q-card bordered class="rounded-card light-theme-card">
            <q-card-section>
              <div class="text-h6">Route Information</div>

              <!-- Route No -->
              <div class="q-mt-md">
                <q-input v-model="routeNo" filled label="Route No" readonly />
              </div>

              <!-- Source -->
              <div class="q-mt-md">
                <q-input v-model="source" filled label="Source" readonly />
              </div>

              <!-- Destination -->
              <div class="q-mt-md">
                <q-input
                  v-model="destination"
                  filled
                  label="Destination"
                  readonly
                />
              </div>
            </q-card-section>
          </q-card>
        </div>

        <!-- Route Traffic & Bus Operations Section -->
        <div class="col-8 route-traffic">
          <q-card bordered class="rounded-card light-theme-card">
            <q-card-section>
              <div class="text-h6">Route Traffic & Bus Operations</div>

              <!-- Chart Container with Rotation Effect -->
              <div class="q-mt-md chart-container-wrapper">
                <!-- Both charts container (with rotate effect) -->
                <div
                  class="chart-container"
                  :class="{ 'chart-active': currentGraph === 'customer' }"
                >
                  <!-- Customer Traffic Chart -->
                  <canvas id="trafficChartCustomer"></canvas>
                </div>

                <div
                  class="chart-container"
                  :class="{ 'chart-active': currentGraph === 'bus' }"
                >
                  <!-- Buses Operated Chart -->
                  <canvas id="trafficChartBus"></canvas>
                </div>
              </div>

              <!-- Bus Operations Table -->
              <div v-show="currentGraph === 'bus'" class="bus-table-container">
                <table class="q-table q-table--dense q-table--bordered">
                  <thead>
                    <tr>
                      <th>Day</th>
                      <th>Bus Operated</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(day, index) in busData.labels" :key="index">
                      <td>{{ day }}</td>
                      <td>{{ busData.datasets[0].data[index] }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, onMounted, ref } from "vue";
import Chart from "chart.js/auto";

export default defineComponent({
  name: "RouteTrafficAnalysis",
  setup() {
    const routeNo = ref("101");
    const source = ref("City Center");
    const destination = ref("Airport");

    // State to track which graph is active
    const currentGraph = ref("customer");

    // Data for charts
    const customerTrafficData = ref({
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      datasets: [
        {
          label: "Customer Traffic",
          data: [100, 120, 150, 180, 200, 190, 250],
          backgroundColor: "rgba(75, 192, 192, 0.2)",
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 1,
          fill: true,
        },
      ],
    });

    const busData = ref({
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      datasets: [
        {
          label: "Buses Operated",
          data: [5, 6, 7, 8, 9, 7, 6],
          backgroundColor: "rgba(255, 99, 132, 0.2)",
          borderColor: "rgba(255, 99, 132, 1)",
          borderWidth: 1,
          fill: false,
        },
      ],
    });

    const chartInstances = ref({});

    // Create chart instance for customer traffic
    const createChart = (canvasId, chartData) => {
      return new Chart(document.getElementById(canvasId).getContext("2d"), {
        type: "line",
        data: chartData,
        options: {
          responsive: true,
          plugins: {
            legend: {
              display: true,
              position: "top",
            },
          },
          scales: {
            x: {
              beginAtZero: true,
            },
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    };

    // Create charts when mounted
    onMounted(() => {
      chartInstances.value.customer = createChart(
        "trafficChartCustomer",
        customerTrafficData.value
      );
      chartInstances.value.bus = createChart("trafficChartBus", busData.value);
    });

    // Toggle between graphs
    const toggleGraph = () => {
      currentGraph.value =
        currentGraph.value === "customer" ? "bus" : "customer";
    };

    return {
      routeNo,
      source,
      destination,
      currentGraph,
      toggleGraph,
      busData,
    };
  },
});
</script>

<style scoped>
.dashboard-wrapper {
  background-color: #f0ecec;
  padding: 16px;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(210, 48, 48, 0.1);
}

/* Container for both Route Info and Graph */
.route-container {
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  transition: transform 0.7s ease-in-out;
  height: 100%;
}

/* Styling for the Route Information Section */
.route-info {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%; /* Ensure it takes up the full height of the parent container */
}

/* Styling for the Route Traffic & Bus Operations Section */
.route-traffic {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%; /* Ensure it takes up the full height of the parent container */
}

/* Card Styling */
.light-theme-card {
  background-color: #f9f9f9;
  border: 1px solid #e0e0e0;
}

.rounded-card {
  border-radius: 12px;
}

.q-card-section {
  padding: 20px;
}

/* Chart Container Styling */
.chart-container-wrapper {
  position: relative;
  width: 100%;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.chart-container {
  position: absolute;
  width: 100%;
  height: 100%;
  transition: transform 1s ease-in-out;
  opacity: 0;
  visibility: hidden;
}

.chart-active {
  opacity: 1;
  visibility: visible;
  transform: rotateY(0deg);
}

.chart-container + .chart-container {
  transform: rotateY(180deg);
}

/* Bus Table Styling */
.bus-table-container {
  width: 100%;
  display: none;
}

.bus-table-active {
  display: block;
  transition: opacity 0.7s ease-in-out;
}

/* Table Styling */
.q-table th,
.q-table td {
  text-align: center;
}
</style>
