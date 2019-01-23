<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <br>
                <button 
                class="btn btn-primary"
                @click="selectedComponent='appBlue', color='blue'"
                >Load Blue Template</button>
                <button 
                class="btn btn-success"
                @click="selectedComponent = 'appGreen', color='green'"
                >Load Green Template</button>
                <button 
                class="btn btn-danger"
                @click="selectedComponent = 'appRed', color='red'"
                >Load Red Template</button>
                <hr>
                <!-- {{ selectedComponent }} -->
                <!-- <app-blue>
                    <h2 slot>I am blue </h2>
                </app-blue>
                <app-green>
                    <h2 slot>I am green </h2>
                </app-green>
                <app-red>
                    <h2 slot>I am red </h2>
                </app-red> -->
                <component :is="selectedComponent">
                    <p>This is {{ color }}</p>
                </component>
            </div>
        </div>
    </div>
</template>

<script>
    import Blue from './components/Blue.vue';
    import Green from './components/Green.vue';
    import Red from './components/Red.vue';

    export default {
        data() {
            return{
                selectedComponent:'appBlue',
                color: 'blue'
            }
        },
        components: {
            appBlue: Blue,
            appGreen: Green,
            appRed: Red
        }
    }
</script>

<style>
</style>
