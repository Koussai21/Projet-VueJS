<template>
  <div>
    <BaseLayout>
      <router-view/>
    </BaseLayout>
  </div>
</template>

<script>
import BaseLayout from './pages/BaseLayout.vue';


export default {
  name: 'App',
  components: {
    BaseLayout,

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>