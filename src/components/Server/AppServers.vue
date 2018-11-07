<template>
  <div class="row">
      <div class="col-xs-12 col-sm-6">
        <app-servers-list
          :serversList="serversList"
        ></app-servers-list>
      </div>

      <div class="col-xs-12 col-sm-6">
        <app-servers-detail
          :selectedServerId="selectedServerId"
          :serversList="serversList"
        ></app-servers-detail>
      </div>
    </div>
</template>

<script>
  import { eventBus } from '../../main';
  import AppServersList from './AppServersList.vue';
  import AppServersDetail from './AppServersDetail.vue';

  export default {
    data() {
      return {
        selectedServerId: null,
        serversList: [
          { id: 1, status: 'Normal' },
          { id: 2, status: 'Critical' },
          { id: 3, status: 'Unknown' },
          { id: 4, status: 'Normal' },
          { id: 5, status: 'Unknown' },
        ],
      };
    },
    components: {
      'app-servers-list': AppServersList,
      'app-servers-detail': AppServersDetail,
    },
    created() {
      eventBus.$on('selectedServerHasChange', (selectedServerId) => (
        this.selectedServerId = selectedServerId
      ));
    },
  };
</script>
