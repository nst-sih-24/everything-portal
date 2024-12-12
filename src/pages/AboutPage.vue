<template>
  <q-page class="q-pa-md about-us-page">
    <q-card flat bordered class="about-us-card animate__animated animate__fadeIn">
      <q-card-section class="title-section">
        <h1 class="animate__animated animate__zoomIn">About Byte Knight</h1>
      </q-card-section>

      <q-card-section class="team-section animate__animated animate__fadeInUp animate__delay-4s">
        <h2>Our Team</h2>
        <div class="team-grid">
          <div class="team-member" v-for="member in teamMembers" :key="member.name">
            <img :src="member.photo" :alt="member.name" class="team-photo" />
            <h3>{{ member.name }}</h3>
            <p>{{ member.role }}</p>
          </div>
        </div>
      </q-card-section>

      <q-card-section class="title-section">
        <h1 class="animate__animated animate__zoomIn">About Byte Knight</h1>
      </q-card-section>

      <q-card-section class="vision-mission-section animate__animated animate__fadeInUp animate__delay-1s">
        <h2>Problem-statement</h2>
        <p> Automated bus scheduling and route management system for Delhi transport corporation
        </p>
      </q-card-section>

      <q-card-section class="history-section animate__animated animate__fadeInUp animate__delay-2s">
        <h2>Navsmart</h2>
        <p>
          Navsmart is a smart solution for modernizing DTC’s bus fleet management. It streamlines route planning, crew scheduling, and cost management using AI, GIS, and real-time traffic data. With features like a chatbot for booking and real-time updates, Navsmart enhances operational efficiency and commuter experience.
        </p>
      </q-card-section>

      

      <!-- Team Members Section -->


    </q-card>
  </q-page>
</template>

<script>
export default {
  name: "AboutPage",
  data() {
    return {
      teamMembers: [
        {
          name: "Arohi Jadhav",
          role: "Frontend Developer",
          photo: "src/assets/popular/WhatsApp Image 2024-11-29 at 21.08.17.jpeg",
        },
        {
          name: "Roni Maity",
          role: "Frontend Developer",
          photo: "src/assets/popular/WhatsApp Image 2024-11-29 at 21.08.41.jpeg",
        },
        {
          name: "Deeptanu",
          role: "Frontend Developer",
          photo: "src/assets/popular/WhatsApp Image 2024-11-29 at 21.08.30.jpeg",
        },
        {
          name: "Oashe Mehta",
          role: "App Developer",
          photo: "src/assets/popular/WhatsApp Image 2024-11-29 at 21.11.12.jpeg",
        },
        {
          name: "Yuvraj",
          role: "Backend Developer",
          photo: "src/assets/popular/WhatsApp Image 2024-11-29 at 21.08.59.jpeg",
        },
        {
          name: "Sumit",
          role: "Backend Developer",
          photo: "src/assets/popular/WhatsApp Image 2024-11-29 at 21.09.45.jpeg",
        },
      ],
    };
  },
};
</script>

<style scoped>
@import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css";

.about-us-page {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f9f9f9;
}

.about-us-card {
  width: 100%;
  max-width: 1200px;
  margin: 0 1rem;
  background: #ffffff;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  border-radius: 16px;
  padding: 2rem;
}

.title-section h1 {
  text-align: center;
  color: #2d88ff;
  margin-bottom: 2rem;
  font-size: 3.5rem;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
}

h2 {
  text-align: center;
  color: #f95e2a;
  margin-bottom: 1rem;
  font-size: 2.5rem;
  font-weight: bold;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
}

p {
  color: #555;
  line-height: 1.8;
  margin-bottom: 1.5rem;
  text-align: justify;
  font-size: 1.2rem;
}

.team-section {
  margin-top: 2rem;
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.team-member {
  text-align: center;
}

.team-photo {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 1rem;
}

.team-member h3 {
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 0.5rem;
}

.team-member p {
  font-size: 1rem;
  color: #777;
}
</style>
