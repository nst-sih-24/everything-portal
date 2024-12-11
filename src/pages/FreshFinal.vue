<template>
  <q-page class="q-pa-none">
    <!-- Hero Image Section -->
    <div class="hero-image">
      <div
        class="image"
        v-for="(image, index) in heroImages"
        :key="index"
        :style="{ backgroundImage: 'url(' + image + ')' }"
      ></div>
    </div>
    <div class="search-container">
      <q-card>
        <q-item>
          <q-item-section>
            <q-input outlined dense v-model="source" placeholder="Source" />
          </q-item-section>
          <q-item-section side style="padding: 0">
            <q-btn flat round @click="swapLocations" icon="swap_horiz" />
          </q-item-section>
          <q-item-section>
            <q-input
              outlined
              dense
              v-model="destination"
              placeholder="Destination"
            />
          </q-item-section>
          <q-item-section>
            <q-input outlined dense v-model="busNumber" placeholder="Bus no." />
          </q-item-section>
          <q-item-section>
            <q-btn @click="searchBus" label="Search" class="search-btn" />
          </q-item-section>
        </q-item>
      </q-card>
    </div>
  </q-page>
  <footer class="footer-container">
      <div class="contact-us">
        <h3 class="quick">Quick links</h3>
        <p>
          <router-link to="Helpline No."> Helpline </router-link>
        </p>
        <p>
          <router-link to="About Us"> About Us </router-link>
        </p>
        <p>
          <router-link to="Privacy Policy">Privacy Policy</router-link>
        </p>
        <p>
          <router-link to="Home"> Home </router-link>
        </p>
        <p>
          <router-link to="Feedback"> Feedback </router-link>
        </p>
      </div>

      <div class="contact-info">
        <h3>Contact Us</h3>
        <p>For inquiries, reach us at:</p>
        <p>Email: contact@dtc.com</p>
        <p>Phone: +91 123 456 7890</p>
      </div>

      <div class="col-12 col-md-3" id="social-links-container"></div>

      <!-- Google Map Section in Footer -->
      <div class="map-box">
        <GoogleMap
          api-key="AIzaSyCX7YZQFXhOtlyC-El4uG9baq4qSY68MZg"
          style="width: 100%; height: 100%"
          :center="center"
          :zoom="17"
        >
          <GMapMarker
            :options="{
              position: center,
              title: 'Delhi, India',
            }"
          />
        </GoogleMap>
      </div>
    </footer>
    <div class="social-media">
        <q-btn round flat icon="fab fa-facebook" class="social-icon" size="md" />
        <q-btn round flat icon="fab fa-x-twitter" class="social-icon" size="md"/>
        <q-btn round flat icon="fab fa-instagram" class="social-icon" size="md"/>
        <q-btn round flat icon="fab fa-linkedin" class="social-icon" size="md"/>
        <q-btn round flat icon="fab fa-youtube" class="social-icon" size="md"/>
      </div>
</template>
<script>
import { GoogleMap, Marker as GMapMarker } from "vue3-google-map";
export default {
  data() {
    return {
      source: "",
      destination: "",
      busNumber: "",
      center: { lat: 18.621407276412643, lng:  73.91214447495325 },
      heroImages: ["src/assets/images/popular/lotus.jpg"],
    };
  },
  mounted() {},
  methods: {
    swapLocations() {
      let temp = this.source;
      this.source = this.destination;
      this.destination = temp;
    },
    searchBus() {
      console.log(
        "Searching buses from",
        this.source,
        "to",
        this.destination,
        "Bus Number:",
        this.busNumber
      );
    },
  },
  components: {
    GoogleMap,
    GMapMarker,
  },
};
</script>
<style scoped>
.hero-image {
  position: relative;
  width: 100%;
  height: 300px;
  overflow: hidden;
}
.image {
  position: absolute;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
}
.search-container {
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  gap: 20px;
  border-left: 10px solid #78B3CE;
  border-radius: 10px;
}
.search-btn {
  background-color: #78B3CE;
  color: white;
}
.footer-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 30px;
  background-color:#F96E2A;
  color: white;
  margin-top: 50px;
}
.contact-us,.contact-info {
  flex: 1;
  padding: 20px;
}
.social-media {
  flex: 1;
  display: flex;
  background-color: #f95e2a;
  justify-content: center;
  gap: 10px;
  margin-top:0;
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
.contact-us .quick{
  text-decoration: none;
}
</style>
