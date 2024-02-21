<template>
  <div>
    <h1>{{ msg }}</h1>
    
    
  </div>
</template>

<script>
import { store } from '../lib/store'


export default {
  computed: {
    username() {
      // We will see what `params` is shortly
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
