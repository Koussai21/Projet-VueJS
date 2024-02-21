<template>
  <div>
    <BaseHeader />
    <slot></slot>
    <BaseFooter />
  </div>
</template>

<script>
import BaseHeader from '../components/BaseHeader.vue';
import BaseFooter from '../components/BaseFooter.vue';

export default {
  name: 'BaseLayout',
  components: {
    BaseHeader,
    BaseFooter
  }
}
</script>

<style>

</style>
