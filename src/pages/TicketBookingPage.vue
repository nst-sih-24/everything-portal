<template>
  <q-page class="scrollable-page">
    <div class="q-pa-md">
      <!-- Booking Card -->
      <q-card class="q-ma-md" style="max-width: 600px; margin: auto; border-radius: 10px;">
        <q-card-section style="background-color:whitesmoke;">
          <p
            style="
              text-align: center;
              background-color:orange;
              height: 70px;
              font-size: 20px;
              color: white;
              padding-top: 10px;
              font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
              border-radius: 10px 10px 0 0;
            "
          >
            BOOKING TICKET
          </p>
          <div class="q-my-md q-gutter-md row no-wrap justify-center">
            <q-input
              v-model="fromBusStop"
              filled
              label="From"
              placeholder="From Bus-Stop"
              :error="fromBusStop === ''"
              :error-message="'Please enter a valid starting point'"
              style="width: 100%; max-width: 250px;"
            />
            <q-btn round flat icon="directions_bus" class="q-mx-sm" />
            <q-input
              v-model="toBusStop"
              filled
              label="To"
              placeholder="To Bus-Stop"
              :error="toBusStop === ''"
              :error-message="'Please enter a valid destination'"
              style="width: 100%; max-width: 250px;"
            />
          </div>
        </q-card-section>
        <q-card-section style="background-color:whitesmoke;">
          <q-input
            v-model="journeyDate"
            filled
            label="Journey Date"
            type="date"
            style="width: 100%;"
            :error="journeyDate === ''"
            :error-message="'Please select a journey date'"
          />

          <!-- Number of Passengers -->
           <div style="background-color: whitesmoke">No of Passenger</div>
          <q-row class="q-mt-md items-center">
            <q-col class="text-center">
              <div class="row justify-center items-center">
                <!-- Minus Button -->
                <q-btn
                  icon="remove"
                  color="primary"
                  flat
                  round
                  @click="decreasePassengers"
                  :disable="noofpassengers <= 1"
                  style="background-color: whitesmoke;"
                />

                <!-- Passenger Count -->
                <div class="q-mx-md text-h6">{{ noofpassengers }}</div>

                <!-- Plus Button -->
                <q-btn
                  icon="add"
                  color="primary"
                  flat
                  round
                  @click="increasePassengers"
                />
              </div>
            </q-col>
          </q-row>
        </q-card-section>

        <!-- Total Fare Calculation -->
        <q-separator />
        <q-card-section style="background-color: whitesmoke;">
          <div>
            <p><strong>Total Fare:</strong> ₹{{ totalFare }}</p>
          </div>
        </q-card-section>

        <!-- Checkout Button -->
        <q-card-actions align="center" style="background-color: whitesmoke;">
          <q-btn
            label="Pay Now"
            color="primary"
            @click="payNow"
            :disabled="!canSubmit"
            style="width: 150px; font-size: 16px; background-color: #00796b; border-radius: 5px;"
            outlined dense to="paymentgateway"
          />
        </q-card-actions>
      </q-card>

      <!-- Carousel Card for Interactive Experience -->
      <q-card class="q-ma-md q-mt-lg" style="max-width: 600px; margin: auto; border-radius: 10px; margin-top: 50px;">
        <q-card-section>
          <p
            style="
              text-align: center;
              background-color: #1b263b;
              height: 70px;
              font-size: 20px;
              color: white;
              padding-top: 10px;
              font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
              border-radius: 10px 10px 0 0;
            "
          >
            EXPLORE OUR SERVICES
          </p>

          <q-carousel
            v-model="slide"
            control-color="primary"
            animated
            class="q-mt-md"
            style="max-width: 100%; height: 300px;"
          >
            <q-carousel-slide
              v-for="(image, index) in images"
              :key="index"
              :name="index"
              :img-src="image"
              :alt="'Service Image ' + (index + 1)"
            />
          </q-carousel>
        </q-card-section>
      </q-card>

      <q-card class="q-ma-md q-mt-lg" style="max-width: 600px; margin: auto; border-radius: 10px; margin-top: 50px;">
        <q-card-section>
          <p
            style="
              text-align: center;
              background-color: #1b263b;
              height: 70px;
              font-size: 20px;
              color: white;
              padding-top: 10px;
              font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
              border-radius: 10px 10px 0 0;
            "
          >
          </p>

          <q-carousel
            v-model="slide"
            control-color="primary"
            animated
            class="q-mt-md"
            style="max-width: 100%; height: 300px;"
          >
            <q-carousel-slide
              v-for="(image, index) in images"
              :key="index"
              :name="index"
              :img-src="image"
              :alt="'Service Image ' + (index + 1)"
            />
          </q-carousel>
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
      noofpassengers: 1,
      fare: 10,
      slide: 0,
      images: [
        "src/assets/hero2.jpg",
        "src/assets/hero3.jpg",
        "src/assets/hero1.jpeg",
      ],
      currentYear: new Date().getFullYear(),
    };
  },
  computed: {
    totalFare() {
      return this.noofpassengers * this.fare;
    },
    canSubmit() {
      return (
        this.fromBusStop !== "" &&
        this.toBusStop !== "" &&
        this.journeyDate !== "" &&
        this.noofpassengers > 0
      );
    },
  },
  methods: {
    increasePassengers() {
      this.noofpassengers++;
    },
    decreasePassengers() {
      if (this.noofpassengers > 1) {
        this.noofpassengers--;
      }
    },
    payNow() {
      if (this.canSubmit) {
        alert(`Total Fare: ₹${this.totalFare}. Proceeding to payment...`);
      } else {
        alert("Please fill out all fields correctly.");
      }
    },
  },
};
</script>
<style scoped>
.q-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
}

.scrollable-page {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
}

.q-card {
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
}

.q-footer {
  padding-left: 15px;
  padding-right: 15px;
}

.q-toolbar {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.q-btn {
  transition: background-color 0.3s ease;
}

.q-btn:hover {
  background-color: #004d40;
}

.q-carousel {
  max-width: 100%;
  height: 300px;
}

.q-carousel-slide img {
  object-fit: cover;
}
</style>
