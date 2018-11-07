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
  import AppHeader from './components/Shared/AppHeader.vue';
  import AppFooter from './components/Shared/AppFooter.vue';
  import AppServers from './components/Server/AppServers.vue';

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
