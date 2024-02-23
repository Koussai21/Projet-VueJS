<template>
  <div>
    <h1>{{ msg }}</h1>
    <p>Bienvenue sur notre site ! Nous sommes fiers de vous offrir une plateforme qui excelle dans la gestion et l'envoi de mails. Explorez toutes les fonctionnalités et n'hésitez pas à nous contacter si vous avez des questions.</p>
    <!-- Ajoutez d'autres éléments ou fonctionnalités selon vos besoins -->
  </div>
</template>

<script>
import { store } from '../lib/store'

export default {
  data() {
    return {
      msg: "Bienvenue sur notre site !",
    };
  },
  computed: {
    username() {
      return this.$route.params.username
    },
  },
  methods: {
    goToDashboard() {
      if (store.isAuthenticated) {
        this.$router.push('/dashboard')
      } else {
        this.$router.push('/login')
      }
    },
  },
}
</script>

<style scoped>
.button-column {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}
</style>
