new Vue({
  el: '#exercise',
  data: {
    effectClass: {
      highlight: false,
      shrink: true
    },
    userClass: '',
    isVisible: true,
    myStyle: {
      width: '100px',
      height: '150px',
      backgroundColor: 'grey'
    },
    progressBar: {
      width: '0px',
      backgroundColor: 'red'
    }
  },

  methods: {
    startEffect: function() {
      var vm = this;
      setInterval(function() {
        console.log('hit');
        vm.effectClass.highlight = !vm.effectClass.highlight;
        vm.effectClass.shrink = !vm.effectClass.shrink;
      }, 1000)
    },
    startProgress: function() {
      var vm = this;
      var width = 0;
      setInterval(function() {
        width = width + 10;
        vm.progressBar.width = width + 'px';
      }, 1000)
    }
  }
});
