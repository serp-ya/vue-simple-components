<template>
  <div>
    <p v-if="!selectedServerId || serversList.length === 0">
      Server Details are currently not updated
    </p>
    
    <template v-else>
      <h3>Server ID: #{{ selectedServerData.id }}</h3>
      <p>Server status: {{ selectedServerData.status }}</p>
      <button @click="backToNormal">Back to Normal</button>
    </template>
  </div>
</template>

<script>
  export default {
    props: {
      selectedServerId: Number,
      serversList: {
        type: Array,
        default: () => ([]),
      },
    },
    computed: {
      selectedServerData() {
        const selectedServer = this.findCurrentServer();

        if (selectedServer === undefined) {
          return getNotFoundServer();
        }

        return selectedServer;
      },
    },
    methods: {
      backToNormal() {
        const selectedServer = this.findCurrentServer()
        
        if (selectedServer === undefined) {
          return getNotFoundServer();
        }
        
        selectedServer.status = 'Normal';
      },
      findCurrentServer() {
        return this.serversList.find(server => (
          server.id === this.selectedServerId
        ));
      },
      getNotFoundServer() {
        return {
          id: this.selectedServerId,
          status: 'Server not found',
        };
      }
    }
  };
</script>
