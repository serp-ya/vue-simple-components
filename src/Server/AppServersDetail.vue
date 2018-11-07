<template>
  <div>
    <p v-if="!selectedServerId || serversList.length === 0">
      Server Details are currently not updated
    </p>
    
    <template v-else>
      <h3>Server ID: #{{ selectedServerData.id }}</h3>
      <p>Server status: {{ selectedServerData.status }}</p>
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
        const selectedServer = this.serversList.find(server => (
          server.id === this.selectedServerId
        ));

        if (selectedServer === undefined) {
          return {
            id: this.selectedServerId,
            status: 'Server not found',
          };
        }

        return selectedServer;
      },
    }
  };
</script>
