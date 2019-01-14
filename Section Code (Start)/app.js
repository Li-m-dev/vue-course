// Vue.component('hello', {
//   template: '<h1>Hello again</h1>'
// });

// var vm1 = new Vue({
//   el: '#app1',
//   data: {
//     title: 'The VueJS Instance',
//     showParagraph: false
//   },
//   methods: {
//     show: function() {
//       this.showParagraph = true;
//       this.updateTitle('The VueJS Instance (Updated)');
//       console.log(this.$refs);
//       this.$refs.myButton.innerText = 'test';
//     },
//     updateTitle: function(title) {
//       this.title = title;
//     }
//   },
//   computed: {
//     lowercaseTitle: function() {
//       return this.title.toLowerCase();
//     }
//   },
//   watch: {
//     title: function(value) {
//       alert('Title changed, new value: ' + value);
//     }
//   }
// });

// // console.log(vm1);

// vm1.$refs.heading.innerText = 'something else'
// setTimeout(function() {
//   vm1.title = 'changed by timer';
//   vm1.show();
// }, 3000);

// // vm1.newProp = 'New!';
// // we can add new property like this, but we can not update it.
// // it doesn't have getters and setters.


// var vm2 = new Vue({
//   el: '#app2',
//   data: {
//     title: 'The Second VueJS Instance'
//   },
//   methods: {
//     onChange: function() {
//       vm1.title = 'Changed'
//     }
//   }
// })

// var vm3 = new Vue({
//   el: '.hello',
//   template: '<h1> Hello!</h1>'
// })

// vm3.$mount();
// document.getElementById('app3').appendChild(vm3.$el)

// console.log(vm3);

new Vue({
  el:'#app4',
  data: {
    title: 'the vue instance lifecycle'
  },
  beforeCreate: function() {
    console.log('beforeCreate: ');  
  },
  created: function() {
    console.log('created: ');
  },
  beforeMount: function(){
    console.log('beforeMount: ');
  },
  mounted: function(){
    console.log('mounted: ');
  },
  beforeUpdate: function(){
    console.log('beforeUpdate: ');
  },
  updated: function(){
    console.log('updated: ');
  },
  beforeDestroy: function(){
    console.log('beforeDestroy: ');
  },
  destroyed: function() {
    console.log('destroyed');
  },

  methods: {
    destroy: function() {
      this.$destroy();
    }
  }
})