<template>
    <div class="col-xs-12 col-sm-6">
        <p v-if="!server">Please select a Server</p>
        <p v-else>Server# {{ server.id }} selected, Status: {{ server.status}}</p>
        <hr>
        <button @click="changeStatus">Update Status</button>
    </div>

</template>

<script>

    import {serverBus} from '../../main.js';

    export default{
        data() {
            return {
                server: null
            }
        },
        methods: {
            changeStatus() {
                this.server.status = 'Normal';
            }
        },
        created() {
            serverBus.$on('serverSelected', (server) => {
                this.server = server;
            } )
        }
    }
</script>

<style scoped>
    div {
        border: 1px solid red;
    }
</style>
