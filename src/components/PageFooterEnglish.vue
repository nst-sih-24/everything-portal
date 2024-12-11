<template>
  <footer class="footer-container">
    <div class="contact-us">
      <h3 class="quick">Quick links</h3>
      <p>
        <router-link to="/help"> Helpline </router-link>
      </p>
      <p>
        <router-link to="/about"> About Us </router-link>
      </p>
      <p>
        <router-link to="/privacy">Privacy Policy</router-link>
      </p>
      <p>
        <router-link to="/"> Home </router-link>
      </p>
      <p>
        <router-link to="/feedback"> Feedback </router-link>
      </p>
    </div>

    <div class="contact-info">
      <h3>Contact Us</h3>
      <p>For inquiries, reach us at:</p>
      <p>Email: contact@dtc.com</p>
      <p>Phone: +91 123 456 7890</p>
    </div>

    <!-- Google Map Section in Footer -->
    <div class="map-box">
      <GoogleMap
        api-key="AIzaSyCX7YZQFXhOtlyC-El4uG9baq4qSY68MZg"
        style="width: 100%; height: 100%"
        :center="{
          lat: 28.6448,
          lng: 77.216721,
        }"
        :zoom="10"
      >
      </GoogleMap>
    </div>
  </footer>
  <div class="social-media">
    <q-btn round flat icon="fab fa-facebook" class="social-icon" size="md" />
    <q-btn round flat icon="fab fa-x-twitter" class="social-icon" size="md" />
    <q-btn round flat icon="fab fa-instagram" class="social-icon" size="md" />
    <q-btn round flat icon="fab fa-linkedin" class="social-icon" size="md" />
    <q-btn round flat icon="fab fa-youtube" class="social-icon" size="md" />
  </div>
</template>

<script setup>
import { GoogleMap } from "vue3-google-map";
</script>

<style scoped>
.footer-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 30px;
  background-color: #f96e2a;
  color: white;
  margin-top: 50px;
}
.contact-us,
.contact-info {
  flex: 1;
  padding: 20px;
}
.social-media {
  flex: 1;
  display: flex;
  background-color: #f95e2a;
  justify-content: center;
  gap: 10px;
  margin-top: 0;
  font-size: small;
}
.social-icon {
  font-size: 24px;
  color: white;
  transition: transform 0.3s ease;
}
.social-icon:hover {
  transform: scale(1.2);
}
.map-box {
  height: 250px;
  width: 300px;
  margin-top: 70px;
  margin-right: 30px;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2), 0 4px 8px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease;
}
.contact-us .quick {
  text-decoration: none;
}
</style>
