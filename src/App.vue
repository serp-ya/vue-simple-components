<template>
  <div class="container">
    <app-header></app-header>
    <hr>
    <app-servers></app-servers>
    <hr>
    <app-footer></app-footer>
  </div>
</template>

<script>
  import AppHeader from './Shared/AppHeader.vue';
  import AppFooter from './Shared/AppFooter.vue';
  import AppServers from './Server/AppServers.vue';

  export default {
    components: {
      'app-header': AppHeader,
      'app-footer': AppFooter,
      'app-servers': AppServers,
    },
  };
</script>

<style>
</style>
