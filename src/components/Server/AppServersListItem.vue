<template>
  <li
    class="list-group-item"
    @click="selectServer"
  >
    Server #{{ id }}
  </li>
</template>

<script>
  import { eventBus } from '../../main';
  export default {
    props: {
      id: Number
    },
    methods: {
      selectServer() {
        eventBus.selectServer(this.id);
      },
    }
  };
</script>
