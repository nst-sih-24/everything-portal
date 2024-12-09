<template>
<q-page>
    <div class="q-pa-md">

        <q-card>
            <q-card-section>

            <p style="text-align: center;background-color: #1b263b;height: 70px;font-size: 30px;color: white;padding-top: 10px;font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;">BOOKING TICKET</p>
            <div>
                <q-btn icon="location_on" style="margin-left: 98px;"> </q-btn>
                <q-btn icon="arrow_forward" style="margin-left:98px ;"> </q-btn>
                <q-btn icon="location_on" style="margin-left:98px ;"> </q-btn>
            </div>
            
                <div style="display:flex;">
                    <q-input filled v-model="fromBusStop" label="From" placeholder="From Bus-Stop" style="width: 250px; " />
                    <q-separator />
                    <div>
                        <q-btn round flat icon="directions_bus" style="margin-left: 10px;margin-right: 10px; " />
                        <q-separator />
                    </div>
                    <q-input filled v-model="toBusStop" label="To" placeholder="To Bus-Stop" style="width: 250px; " />
                </div>
            </q-card-section>
            <q-card-section>
                <q-input filled v-model="journeyDate" label="Journey Date" type="date" />

                <!-- Number of Passengers -->
                <q-row>
                    <q-col :span="4">
                        <q-input filled v-model="maleCount" label="Male Passengers" type="number" min="0" />
                    </q-col>
                    <q-col :span="4">
                        <q-input filled v-model="femaleCount" label="Female Passengers" type="number" min="0" />
                    </q-col>
                    <q-col :span="4">
                        <q-input filled v-model="childCount" label="Child Passengers" type="number" min="0" />
                    </q-col>
                </q-row>
            </q-card-section>
            <!-- Total Fare Calculation -->
            <q-separator />
            <q-card-section>
                <div>
                    <p>Total Fare:</p>
                    <p><strong>{{ totalFare }}</strong></p>
                </div>
            </q-card-section>

            <!-- Checkout Button -->
            <q-btn label="Pay Now" color="primary" class="full-width" @click="payNow" />
        </q-card>
    </div>
</q-page>
</template>

<script>
export default {
    name: "BusTicketBooking",
    data() {
        return {
            fromBusStop: '',
            toBusStop: '',
            journeyDate: '',
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
        }
    },
    methods: {
        payNow() {
            // Handle the payment logic here
            // For now, just show a simple alert
            alert('Total Fare: ₹${this.totalFare}.Proceeding to payment...');
        }
    }
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
