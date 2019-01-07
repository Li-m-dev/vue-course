new Vue({
  el: '#exercise',
  data: {
    effectClass: {
      highlight: false,
      shrink: true
    },
    userClass: '',

  },

  methods: {
    startEffect: function() {
      let vm = this;
      setInterval(function() {
        console.log('hit');
        vm.effectClass.highlight = !vm.effectClass.highlight;
        vm.effectClass.shrink = !vm.effectClass.shrink;
      }, 1000)
    }
  }
});
