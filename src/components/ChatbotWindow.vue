<template>
  <div class="chatbot">
    <div class="chat-window" v-if="isOpen">
      <div class="messages">
        <div v-for="(msg, index) in messages" :key="index" class="message">
          <span
            :class="{
              'user-message': msg.isUser,
              'bot-message': !msg.isUser,
            }"
          >
            {{ msg.text }}
          </span>
        </div>
      </div>
      <div class="input-container">
        <input
          v-model="userInput"
          @keyup.enter="sendMessage"
          placeholder="Type a message..."
        />
        <button @click="sendMessage">Send</button>
      </div>
    </div>
    <div class="chat-icon" @click="toggleChat">
      <img src="https://img.freepik.com/premium-vector/indian-women-namaste-hand-pose-with-hand-drawn-mandala_428817-1502.jpg" alt="Chatbot"/>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      isOpen: false,
      messages: [],
      userInput: "",
    };
  },
  methods: {
    sendMessage() {},
    toggleChat() {
      this.isOpen = !this.isOpen;
    },
  },
});
</script>
<style>
.chat-icon{
  display: flex;
  padding-left: 5px;
  height: 80px;
  width: 80px;
  border-radius: 50%;
}
</style>
