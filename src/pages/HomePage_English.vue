<template>
  <q-page class="q-pa-none">
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
    <!-- Popular Destination Section with 4 Divs -->
    <div class="popular-destinations q-pa-md" style="min-height: 250px">
      <span class="text-white" v-scroll-fire="bounceImage">trigger</span>
      <div class="row q-col-gutter-md" v-if="showItems">
        <div
          v-for="(item, index) in destinationItems"
          :key="index"
          class="col-3 destination-item"
          ref="destinationDivs"
          :class="{
            'fade-up': index % 2 == 0,
            'fade-down': index % 2 != 0,
          }"
        >
          <div>
            <img :src="item.image" alt="destination" class="image-container" />
          </div>
          <div class="name">{{ item.name }}</div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      source: "",
      destination: "",
      busNumber: "",
      center: { lat: 18.621407276412643, lng: 73.91214447495325 },
      heroImages: ["src/assets/popular/lotus.jpg"],
      destinationItems: [
        {
          image: "src/assets/popular/indiagate.jpg",
          name: "INDIA GATE",
        },
        { image: "src/assets/popular/lotus.jpg", name: "LOTUS TEMPLE" },
        { image: "src/assets/popular/qutub.jpg", name: "QUTUB MINAR" },
        { image: "src/assets/popular/redfort.jpeg", name: "RED FORT" },
      ],
      activeClass: [],
      showItems: false,
    };
  },

  methods: {
    bounceImage() {
      console.log("firing on scroll");
      const that = this;
      setTimeout(() => {
        that.showItems = true;
      }, 500); // delay 500 ms to begin animation
    },
  },
});
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
  border-left: 10px solid #78b3ce;
  border-radius: 10px;
}
.search-btn {
  background-color: #78b3ce;
  color: white;
}
.destination-item {
  text-align: center;
}

.destination-item img {
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 10px;
}

.name {
  margin-top: 10px;
  font-size: 18px;
  font-weight: bold;
}

/* Fade Down Animation */
.fade-down {
  opacity: 1;
  transform: translateY(0);
}

/* Fade Up Animation */
.fade-up {
  opacity: 1;
  transform: translateY(0);
}

/* Make sure the divs start off-screen to create the fade effect */
.fade-down {
  animation: fadeDown 1s ease-out forwards;
}

.fade-up {
  animation: fadeUp 1s ease-out forwards;
}

@keyframes fadeDown {
  0% {
    opacity: 0;
    transform: translateY(-50px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeUp {
  0% {
    opacity: 0;
    transform: translateY(50px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
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
