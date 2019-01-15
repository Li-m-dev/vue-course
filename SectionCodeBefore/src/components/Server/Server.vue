<template>

  <li 
  class="list-group-item"
  style="cusor: pointer"
  @click="serverSelected"
  >
      Server #{{ server.id }}
  </li>

</template>


<script>

import {serverBus} from '../../main.js';

export default {
  props: ['server'],
  methods: {
    serverSelected() {
      // console.log('test');
      serverBus.$emit('serverSelected', this.server)
    }
  }
}
</script>
