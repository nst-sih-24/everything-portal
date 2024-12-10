<template>
  <q-page>
    <h1>TIcket book krle bhadwe</h1>
    <div class="q-pa-md">
      <q-card>
        <q-card-section>
          <q-input
            v-model="fromBusStop"
            filled
            label="From"
            placeholder="From Bus-Stop"
          />
          <q-input
            v-model="toBusStop"
            filled
            label="To"
            placeholder="To Bus-Stop"
          />
          <q-input
            v-model="journeyDate"
            filled
            label="Journey Date"
            type="date"
          />

          <!-- Number of Passengers -->
          <q-row>
            <q-col :span="4">
              <q-input
                v-model="maleCount"
                filled
                label="Male Passengers"
                type="number"
                min="0"
              />
            </q-col>
            <q-col :span="4">
              <q-input
                v-model="femaleCount"
                filled
                label="Female Passengers"
                type="number"
                min="0"
              />
            </q-col>
            <q-col :span="4">
              <q-input
                v-model="childCount"
                filled
                label="Child Passengers"
                type="number"
                min="0"
              />
            </q-col>
          </q-row>

          <!-- Total Fare Calculation -->
          <q-separator />
          <q-card-section>
            <div>
              <p>Total Fare:</p>
              <p>
                <strong>{{ totalFare }}</strong>
              </p>
            </div>
          </q-card-section>

          <!-- Checkout Button -->
          <q-btn
            label="Pay Now"
            color="primary"
            class="full-width"
            @click="payNow"
          />
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script>
export default {
  name: "BusTicketBooking",
  data() {
    return {
      fromBusStop: "",
      toBusStop: "",
      journeyDate: "",
      maleCount: 0,
      femaleCount: 0,
      childCount: 0,
      adultFare: 10, // Fare for adults
      childFare: 5, // Fare for children
    };
  },
  computed: {
    totalFare() {
      // Calculate total fare based on number of passengers
      const totalAdults = this.maleCount + this.femaleCount;
      const totalChildren = this.childCount;

      return totalAdults * this.adultFare + totalChildren * this.childFare;
    },
  },
  methods: {
    payNow() {
      // Handle the payment logic here
      // For now, just show a simple alert
      alert(`Total Fare: ₹${this.totalFare}. Proceeding to payment...`);
    },
  },
};
</script>

<style scoped>
.q-page {
  padding: 20px;
}
.q-card {
  max-width: 600px;
  margin: auto;
}
</style>
