<template>
  <ul class="list-group">
    <app-servers-list-item
      v-for="server in serversList"
      :index="server.id"
      :showFn="showFn"
    ></app-servers-list-item>
  </ul>
</template>

<script>
  import AppServersListItem from './AppServersListItem.vue';
  export default {
    props: {
      serversList: Array,
    },
    components: {
      'app-servers-list-item': AppServersListItem,
    },
  };
</script>
