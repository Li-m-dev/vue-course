<template>
  <div class="row">
    <ServerList/>
    <ServerStatus/>
</div>
</template>
<script>
import ServerList from './ServerList.vue';
import ServerStatus from './ServerStatus.vue'
export default {
  components: {
    ServerList,
    ServerStatus
  }
}
</script>

