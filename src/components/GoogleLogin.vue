<template>
    <button @click="login">
        <span v-if="!this.$store.state.user">Sign In...</span>
        <span v-else>Welcome, {{ this.$store.state.user }}!</span>
    </button>
</template>

<script setup>
import { googleTokenLogin } from "vue3-google-login";

const login = async () => {
  try {
    const response = await googleTokenLogin();
    console.log("Handle the response", response);
    const idToken = response?.idToken;

    if (idToken) {
      await sendTokenToServer(idToken);
    }
  } catch (error) {
    console.error("Google Sign-In Error:", error);
  }
};

const sendTokenToServer = async (idToken) => {
  try {
    const serverResponse = await fetch("/verify-google-token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ idToken }),
    });

    const serverData = await serverResponse.json();
    console.log("Server Response:", serverData);
  } catch (error) {
    console.error("Error sending token to server:", error);
  }
};
</script>


