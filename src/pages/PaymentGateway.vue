<template>
    <q-page padding>
      <div class="row justify-center">
        <q-card class="q-pa-lg" style="max-width: 500px; width: 100%; border-radius: 15px;">
          <q-card-section class="bg-primary text-white" style="border-radius: 15px 15px 0 0;">
            <div class="text-h6 text-center">Payment Gateway</div>
            <div class="text-subtitle2 text-center q-mt-sm">Secure your booking</div>
          </q-card-section>
  
          <!-- Payment Options -->
          <q-tabs 
            v-model="activeTab" 
            class="q-mt-md q-mb-lg text-center" 
            active-color="primary" 
            indicator-color="secondary"
          >
            <q-tab name="card" label="Card Payment" />
            <q-tab name="upi" label="UPI Payment" />
          </q-tabs>
  
          <!-- Card Payment Section -->
          <q-tab-panel name="card">
            <q-card-section>
              <q-input 
                filled 
                v-model="cardNumber" 
                label="Card Number" 
                mask="#### #### #### ####"
                hint="Enter a 16-digit card number"
                max-length="19"
                clearable
                dense
              />
              <q-input 
                filled 
                v-model="cardHolderName" 
                label="Card Holder Name" 
                class="q-mt-md"
                hint="As printed on the card"
                clearable
                dense
              />
              <div class="row q-col-gutter-md q-mt-md">
                <q-col cols="6">
                  <q-input 
                    filled 
                    v-model="expiryDate" 
                    label="Expiry Date" 
                    mask="##/##"
                    hint="MM/YY"
                    clearable
                    dense
                  />
                </q-col>
                <q-col cols="6">
                  <q-input 
                    filled 
                    v-model="cvv" 
                    label="CVV" 
                    type="password" 
                    mask="###"
                    max-length="3"
                    clearable
                    dense
                  />
                </q-col>
              </div>
              <q-btn 
                label="Pay Now" 
                color="secondary" 
                class="q-mt-lg full-width"
                style="border-radius: 8px;
                color: blue;" 
                @click="processPayment('card')"
              />
            </q-card-section>
          </q-tab-panel>
  
          <!-- UPI Payment Section -->
          <q-tab-panel name="upi">
            <q-card-section>
              <q-input 
                filled 
                v-model="upiId" 
                label="UPI ID" 
                hint="Enter your UPI ID (e.g., user@upi)"
                class="q-mb-md"
                dense
                clearable
              />
              <div class="text-subtitle1 text-center q-mb-md">Or select a UPI app:</div>
              <div class="row justify-around">
                <q-btn 
                  flat 
                  class="q-pa-none"
                  @click="selectUPI('PhonePe')"
                >
                  <img src="https://www.pngitem.com/pimgs/m/3-38170_phonepe-logo-png-phone-pe-transparent-png.png" alt="PhonePe" class="upi-logo" />
                </q-btn>
                <q-btn 
                  flat 
                  class="q-pa-none"
                  @click="selectUPI('Google Pay')"
                >
                  <img src="https://www.cdnlogo.com/logos/g/93/google.svg" alt="Google Pay" class="upi-logo" />
                </q-btn>
                <q-btn 
                  flat 
                  class="q-pa-none"
                  @click="selectUPI('Paytm')"
                >
                  <img src="https://thepatriot.in/wp-content/uploads/2024/02/Paytm.jpg" alt="Paytm" class="upi-logo" />
                </q-btn>
              </div>
              <q-btn 
                label="Pay Now" 
                color="secondary" 
                class="q-mt-lg full-width"
                style="border-radius: 8px;" 
                @click="processPayment('upi')"
              />
            </q-card-section>
          </q-tab-panel>
  
          <!-- Payment Status -->
          <q-card-section v-if="paymentStatus" class="text-center q-mt-md">
            <q-icon 
              :name="paymentStatus === 'success' ? 'check_circle' : 'error'" 
              :color="paymentStatus === 'success' ? 'green' : 'red'" 
              size="50px" 
            />
            <div class="text-h6 q-mt-sm">
              {{ paymentStatus === 'success' ? 'Payment Successful!' : 'Payment Failed!' }}
            </div>
            <div v-if="paymentStatus === 'success'" class="text-subtitle1 q-mt-sm">
              Thank you for your payment.
            </div>
            <div v-else class="text-subtitle1 q-mt-sm">
              Please try again later.
            </div>
          </q-card-section>
        </q-card>
      </div>
    </q-page>
  </template>
  
  <script>
  export default {
    name: "PaymentGateway",
    data() {
      return {
        activeTab: "card", // Default tab
        // Card Payment Data
        cardNumber: "",
        cardHolderName: "",
        expiryDate: "",
        cvv: "",
        // UPI Payment Data
        upiId: "",
        selectedUPI: null,
        // Payment Status
        paymentStatus: null, // "success" or "failure"
      };
    },
    methods: {
      processPayment(method) {
        // Mock payment processing
        const isPaymentSuccessful = Math.random() > 0.5; // Randomize success or failure
        this.paymentStatus = isPaymentSuccessful ? "success" : "failure";
  
        console.log(
          `Payment Method: ${method}`,
          method === "card" ? this.cardNumber : this.upiId || this.selectedUPI
        );
  
        // Reset form after a delay
        setTimeout(() => {
          this.resetForm();
        }, 3000);
      },
      resetForm() {
        this.cardNumber = "";
        this.cardHolderName = "";
        this.expiryDate = "";
        this.cvv = "";
        this.upiId = "";
        this.selectedUPI = null;
        this.paymentStatus = null;
      },
      selectUPI(upiApp) {
        this.selectedUPI = upiApp;
        this.upiId = `${upiApp.toLowerCase()}@example`;
      },
    },
  };
  </script>
  
  <style scoped>
  /* Custom styles for the payment page */
  .text-center {
    text-align: center;
  }
  .q-card {
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }
  .upi-logo {
    height: 50px;
    width: 50px;
    border-radius: 8px;
    transition: transform 0.2s ease-in-out;
  }
  .upi-logo:hover {
    transform: scale(1.1);
  }
  </style>
  