<template>
  <q-layout view="lHh Lpr lff">
    <!-- Page content -->
    <q-page-container>
      <q-page>
        <div class="flex-container">
          <!-- Vehicle Details Card -->
          <div class="vehicle-details-card">
            <h2 class="card-title">Vehicle Details</h2>

            <q-table
              :rows="vehicleData"
              :columns="columns"
              row-key="sno"
              class="vehicle-table"
            >
              <template #top-right>
                <q-btn
                  icon="refresh"
                  color="primary"
                  flat
                  class="refresh-btn"
                  @click="refreshData"
                />
              </template>
            </q-table>
          </div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from "vue";

// Define columns for the table
const columns = [
  { name: "sno", label: "S.No", align: "left", field: "sno" },
  {
    name: "vehicleNo",
    label: "Vehicle No.",
    align: "left",
    field: "vehicleNo",
  },
  {
    name: "typeOfVehicle",
    label: "Type of Vehicle",
    align: "left",
    field: "typeOfVehicle",
  },
  {
    name: "totalDistanceCovered",
    label: "Total Distance Covered (km)",
    align: "left",
    field: "totalDistanceCovered",
  },
  {
    name: "pocRegistration",
    label: "POC Registration",
    align: "left",
    field: "pocRegistration",
  },
  {
    name: "insuranceExpiry",
    label: "Insurance Expiry",
    align: "left",
    field: "insuranceExpiry",
  },
];

// Sample vehicle data
const vehicleData = ref([
  {
    sno: 1,
    vehicleNo: "DL1ABC1234",
    typeOfVehicle: "AC",
    totalDistanceCovered: 52345,
    pocRegistration: "POC-12345-2024",
    insuranceExpiry: "2025-10-01",
  },
  {
    sno: 2,
    vehicleNo: "DL2XYZ5678",
    typeOfVehicle: "Non-AC",
    totalDistanceCovered: 34567,
    pocRegistration: "POC-54321-2024",
    insuranceExpiry: "2025-07-15",
  },
  {
    sno: 3,
    vehicleNo: "DL3DEF4321",
    typeOfVehicle: "Electric",
    totalDistanceCovered: 12000,
    pocRegistration: "POC-67890-2024",
    insuranceExpiry: "2026-02-20",
  },
]);

const refreshData = () => {
  // Simulate refreshing or updating data
  console.log("Refreshing data...");
};
</script>

<style scoped>
/* Global Styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Inter", sans-serif; /* Elegant, professional font */
  background: #f0f2f5; /* Soft neutral background */
  color: #333;
}

/* Main Flex Container */
.flex-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 40px;
}

/* Vehicle Details Card */
.vehicle-details-card {
  background: #ffffff;
  padding: 24px;
  border-radius: 16px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1); /* Soft shadows */
  width: 100%;
  max-width: 900px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.vehicle-details-card:hover {
  transform: translateY(-3px); /* Subtle movement on hover */
  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.1); /* Slight shadow intensity on hover */
}

.card-title {
  font-size: 2rem;
  font-weight: 600;
  text-align: center;
  color: #333;
  margin-bottom: 24px;
  text-transform: uppercase;
  letter-spacing: 1px;
}

/* Table Styles */
.vehicle-table {
  border-radius: 16px;
  overflow: hidden;
}

.q-table {
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
}

/* Row styling */
.q-table__row {
  background-color: #ffffff;
  border-bottom: 1px solid #f0f0f0;
}

.q-table__row:hover {
  background-color: #f9f9f9; /* Light hover effect */
}

/* Column Header */
.q-table__header {
  background-color: #2196f3;
  color: white;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.q-btn {
  background-color: #2196f3;
  color: white;
  font-weight: 600;
  padding: 12px 24px;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.q-btn:hover {
  background-color: #1976d2;
  transform: translateY(-3px); /* Smooth lift effect */
}

/* Icon Styling */
.q-table__cell--left[data-col="typeOfVehicle"] {
  font-weight: bold;
}

.q-table__cell--left[data-col="typeOfVehicle"]:before {
  font-size: 1.2rem;
  margin-right: 12px;
  font-family: "FontAwesome";
}

/* Vehicle Type Icons */
.q-table__cell--left[data-col="typeOfVehicle"][data-row="AC"]:before {
  content: "\f0b2"; /* Air Conditioner Icon */
  color: #3f51b5; /* AC Blue */
}

.q-table__cell--left[data-col="typeOfVehicle"][data-row="Non-AC"]:before {
  content: "\f0b0"; /* Non-AC Icon */
  color: #9e9e9e; /* Neutral Gray */
}

.q-table__cell--left[data-col="typeOfVehicle"][data-row="Electric"]:before {
  content: "\f1e6"; /* Electric Vehicle Icon */
  color: #4caf50; /* Green */
}

/* Table Cell Customization */
.q-table__cell {
  font-size: 1rem;
  padding: 12px 16px;
}

/* Refresh Button Styling */
.refresh-btn {
  font-size: 1.2rem;
  background-color: #00c853;
  color: white;
  border-radius: 12px;
  padding: 10px 20px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.refresh-btn:hover {
  background-color: #00b34a;
  transform: translateY(-3px); /* Hover effect */
}

/* Responsive Design */
@media (max-width: 768px) {
  .vehicle-details-card {
    padding: 16px;
  }

  .card-title {
    font-size: 1.8rem;
  }

  .q-btn {
    font-size: 1rem;
  }

  .q-table {
    font-size: 0.9rem;
  }
}
</style>
