<template>
  <li
    class="list-group-item"
    @click="selectServer(index)"
  >
    Server #{{ index }}
  </li>
</template>

<script>
  import { eventBus } from '../main';
  export default {
    props: {
      index: Number
    },
    methods: {
      selectServer(index) {
        eventBus.selectServer(index);
      },
    }
  };
</script>
