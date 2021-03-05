<template>
  <div>
    <the-header></the-header>
    <main>
      <router-view/>
    </main>
    <the-footer></the-footer>
  </div>
</template>

<script>
import TheHeader from './TheHeader.vue'
import TheFooter from './TheFooter.vue'
export default {
  name: 'BaseLayout',
  components: {
    TheHeader,
    TheFooter,
  },
};
</script>

<style scoped>
main {
  flex: 1 0 auto;
}
</style>
