<template>
  <div class="row">
      <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
          <app-servers-list-item
            v-for="index in 5"
            :index="index"
          ></app-servers-list-item>
        </ul>
      </div>
      <div class="col-xs-12 col-sm-6">
        <p>Server Details are currently not updated</p>
      </div>
    </div>
</template>

<script>
  import AppServersListItem from './AppServersListItem.vue';
  export default {
    components: {
      'app-servers-list-item': AppServersListItem,
    }
  };
</script>
