<template>
  <q-page class="q-pa-md">
    <div class="container">
      <!-- Feedbacks Section -->
      <pre style="text-align: left">{{ feedbacks }}</pre>
      <ul>
        <li v-for="feedback in feedbacks" :key="feedback.id">
          {{ feedback.suggestion }}
        </li>
      </ul>

      <!-- Header Section -->
      <div class="header">
        <div class="logo-placeholder">
          <h2>LOGO PLACEHOLDER</h2>
        </div>
        <h1>HELP US GET BETTER</h1>
        <p class="intro">Have some suggestions? Share with us your thoughts!</p>
        <p class="subtext">
          Fill in the details so that we can serve you better.
        </p>
      </div>

      <!-- Greeting -->
      <h2 v-if="name">HELLO, {{ name }}!</h2>

      <!-- Feedback Form -->
      <q-form @submit.prevent="submitForm">
        <div>
          <label for="name_input">Name <span class="required">*</span></label>
          <q-input
            id="name_input"
            v-model.lazy.trim="name"
            filled
            placeholder="Enter your name"
            required
          />
        </div>

        <div>
          <label for="email_input">Email <span class="required">*</span></label>
          <q-input
            id="email_input"
            v-model="email"
            filled
            type="email"
            placeholder="Enter your email"
            required
          />
        </div>

        <div>
          <label for="phone_input"
            >Phone Number <span class="required">*</span></label
          >
          <q-input
            id="phone_input"
            v-model="phone"
            filled
            type="number"
            placeholder="Enter your phone number"
            maxlength="10"
            minlength="10"
            required
          />
        </div>

        <div>
          <label for="suggestion_input"
            >Suggestion <span class="required">*</span></label
          >
          <q-input
            id="suggestion_input"
            v-model="suggestion"
            filled
            type="textarea"
            placeholder="Write your suggestion here"
            required
          />
        </div>

        <div>
          <label for="complaint">Got a complaint?</label>
          <q-checkbox id="complaint" v-model="complaint" />
        </div>

        <!-- Complaint Section -->
        <div v-if="complaint">
          <div>
            <label for="bus_no_input">Bus Route Number</label>
            <q-input
              id="bus_no_input"
              v-model="busNo"
              filled
              placeholder="Enter the bus route number"
            />
          </div>
          <div>
            <label for="journey_time_input">Time of Journey</label>
            <q-input
              id="journey_time_input"
              v-model="journeyTime"
              filled
              type="time"
            />
          </div>
          <div>
            <label for="complaint_details"
              >Complaint Details <span class="required">*</span></label
            >
            <q-input
              id="complaint_details"
              v-model="complaintDetails"
              filled
              type="textarea"
              placeholder="Describe your complaint here"
              required
            />
          </div>

          <div>
            <label>For customer care helpline, call at :</label>
            <br />
            <a href="tel:+9191123370373" class="phone-link">+91-11-23370373</a>
            <br />
            <a href="tel:+9191123370374" class="phone-link">+91-11-23370374</a>
            <br />
            <a href="tel:+918744073248" class="phone-link">+91-8744073248</a>
          </div>
        </div>

        <q-btn type="submit" label="Submit" color="primary" />
      </q-form>
    </div>

    <!-- Footer Section -->
    <footer class="footer">
      <p>
        <a href="https://www.google.com" class="help-link">Help and Support</a>
      </p>
      <p>&copy; Byte Knightz 2024</p>
    </footer>

    <h2>HOPE YOU HAVE A NICE DAY!</h2>
  </q-page>
</template>

<script>
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://codnrccajpjpchleelag.supabase.co";
const supabaseKey = "YOUR_SUPABASE_KEY";
const supabase = createClient(supabaseUrl, supabaseKey);

export default {
  data() {
    return {
      name: "",
      email: "",
      phone: "",
      suggestion: "",
      complaint: false,
      busNo: "",
      journeyTime: "",
      complaintDetails: "",
      feedbacks: [],
    };
  },
  mounted() {
    this.fetchFeedbacks();
  },
  methods: {
    async fetchFeedbacks() {
      const { data, error } = await supabase.from("feedback").select("*");
      if (error) {
        console.error("Error fetching feedbacks:", error);
      } else {
        this.feedbacks = data;
      }
    },
    async submitForm() {
      const feedback = {
        name: this.name,
        email: this.email,
        phone: this.phone,
        suggestion: this.suggestion,
        complaint: this.complaint,
        bus_no: this.busNo || null,
        journey_time: this.journeyTime || null,
        complaint_details: this.complaintDetails || null,
      };

      const { error } = await supabase.from("feedback").insert([feedback]);
      if (error) {
        console.error("Error submitting feedback:", error);
      } else {
        alert("Thank you for your feedback!");
        this.resetForm();
        this.fetchFeedbacks();
      }
    },
    resetForm() {
      this.name = "";
      this.email = "";
      this.phone = "";
      this.suggestion = "";
      this.complaint = false;
      this.busNo = "";
      this.journeyTime = "";
      this.complaintDetails = "";
    },
  },
};
</script>

<style scoped>
/* Original styles retained here */
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: "Arial", sans-serif;
}

.header {
  text-align: center;
  margin-bottom: 30px;
  padding-bottom: 20px;
  border-bottom: 2px solid #ddd;
}

.logo-placeholder {
  margin-bottom: 20px;
  font-size: 1.5rem;
  color: #555;
  font-weight: bold;
}

h1 {
  color: rgb(160, 88, 214);
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 10px;
  text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.1);
  transition: color 0.3s ease-in-out;
}

h1:hover {
  color: #ef325e;
}

.intro {
  font-size: 1.2rem;
  color: #555;
  margin-bottom: 5px;
}

.subtext {
  font-size: 1.1rem;
  color: #777;
}

form {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  background-color: #f8f8f8;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

div {
  margin-bottom: 20px;
}

label {
  font-weight: bold;
  color: #333;
}

.required {
  color: red;
  font-size: 1.2rem;
}

input,
textarea {
  width: 100%;
  padding: 12px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 6px;
  box-sizing: border-box;
}

textarea {
  height: 120px;
  resize: none;
}

button {
  padding: 14px;
  background-color: rgb(160, 88, 214);
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: rgb(130, 68, 174);
}

.phone-link {
  color: rgb(110, 126, 224);
  font-weight: bold;
  font-size: 1.2rem;
  text-decoration: none;
}

.phone-link:hover {
  text-decoration: underline;
}

.footer {
  text-align: center;
  margin-top: 40px;
  padding-top: 20px;
  border-top: 2px solid #ddd;
}

.help-link {
  color: rgb(160, 88, 214);
  text-decoration: none;
  font-size: 1.2rem;
}

.help-link:hover {
  text-decoration: underline;
}

h2 {
  color: rgb(70, 70, 70);
  text-align: center;
  margin-top: 30px;
}
</style>
