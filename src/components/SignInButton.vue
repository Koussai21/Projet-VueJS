<template>
    <button  @click="signIn">
        <span v-if="!this.$store.state.user">Sign In...</span>
        <span v-else>Welcome, {{ this.$store.state.user }}!</span>
    </button>
   
</template>

<script>
import { signInAndGetUser } from "../lib/microsoftGraph";
import { mapMutations } from "vuex";


export default {
  name: 'SignInButton',
  components: {
    
  },
  methods: {
    ...mapMutations (['setUser']),
  
    async signIn() {
      try {
        const user = await signInAndGetUser();
        this.setUser(user.account.name)
        console.log('Utilisateur connecté:', user.account.name);
      } catch (error) {
        console.error('Erreur de connexion:', error);
      }
    },
  },
};
        

</script>
