new Vue({
        el: '#exercise3',
        data: {
            value: 0
        },
        computed: {
            result: function() {
                return this.value == 37 ? 'Done' : 'Not there yet';
            }
        },
        // the computed method doesn't get called all the time
        watch: {

            // watching result method
            result: function() {
                let vm = this; //binding "this"
                setTimeout(function() {
                    vm.value = 0;
                }, 5000)
            }
        }
        // watch is reacted on property change
    });