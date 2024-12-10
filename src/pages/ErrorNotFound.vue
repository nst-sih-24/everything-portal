<template>
  <head>
    <link
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
      rel="stylesheet"
    />
  </head>
  <div
    class="fullscreen bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white text-center q-pa-md flex flex-center"
  >
    <div class="content">
      <div
        class="error-code"
        style="
          font-size: 30vh;
          font-weight: bold;
          letter-spacing: 10px;
          animation: pulse 1.5s infinite;
        "
      >
        <i class="fa fa-bus"></i>
        <!-- Bus Icon -->
      </div>

      <div
        class="text-h2"
        style="
          opacity: 0.7;
          font-style: italic;
          margin-top: -20px;
          animation: bounce 2s ease-in-out infinite;
        "
      >
        Oops. Nothing here...
      </div>

      <q-btn
        class="q-mt-xl q-pa-md"
        color="purple-800"
        text-color="purple-800"
        unelevated
        to="/"
        label="Go Home"
        no-caps
        style="border-radius: 30px; box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.3)"
        :style="buttonStyles"
      />
    </div>
  </div>
</template>

<script setup>
defineOptions({
  name: "ErrorNotFound",
});

// Button styles
const buttonStyles = {
  borderRadius: "30px",
  padding: "12px 30px",
  fontSize: "18px",
  fontWeight: "bold",
  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.3)",
  transition: "transform 0.3s ease",
};
</script>

<style scoped>
/* Overall page style */
.fullscreen {
  background: linear-gradient(90deg, #ff00a7, #9b4d96, #ff6a95);
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

/* Container style */
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  animation: fadeIn 1s ease-in-out;
}

/* Error code style */
.error-code {
  font-size: 30vh;
  font-weight: bold;
  text-shadow: 5px 5px 10px rgba(0, 0, 0, 0.4);
  letter-spacing: 10px;
  color: #fff;
  animation: pulse 1.5s infinite;
}

/* Text under the error code */
.text-h2 {
  opacity: 0.7;
  font-style: italic;
  font-size: 2rem;
  margin-top: -20px;
  color: #fff;
  animation: bounce 2s ease-in-out infinite;
}

/* Animation for bounce effect */
@keyframes bounce {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

/* Animation for pulsing effect */
@keyframes pulse {
  0%,
  100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.1);
    opacity: 0.7;
  }
}

/* Button hover effects */
.q-btn {
  border-radius: 30px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease;
}

.q-btn:hover {
  transform: scale(1.05);
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.2);
}

/* Responsive Design */
@media (max-width: 768px) {
  .fullscreen {
    background: linear-gradient(
      90deg,
      #ff007a,
      #d94e91,
      #ff6a95
    ); /* Adjust gradient for smaller screens */
    padding: 20px; /* Add padding for smaller screens */
  }

  .error-code {
    font-size: 20vh; /* Make the error code smaller on mobile */
    letter-spacing: 5px;
  }

  .text-h2 {
    font-size: 1.5rem; /* Smaller font size for smaller screens */
    margin-top: -10px;
  }

  .q-btn {
    font-size: 16px;
    padding: 10px 25px; /* Adjust button padding */
  }
}

/* Responsive for very small devices like phones in portrait mode */
@media (max-width: 480px) {
  .fullscreen {
    background: linear-gradient(90deg, #ff00a7, #9b4d96, #ff6a95);
    padding: 15px;
  }

  .error-code {
    font-size: 18vh; /* Further decrease the font size for very small screens */
    letter-spacing: 3px;
  }

  .text-h2 {
    font-size: 1.2rem; /* Even smaller font size */
    margin-top: -10px;
  }

  .q-btn {
    font-size: 14px;
    padding: 8px 20px; /* Adjust button padding */
  }
}
</style>
