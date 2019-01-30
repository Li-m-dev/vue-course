import Vue from 'vue'
import App from './App.vue'

Vue.directive('highlight', {
  bind(el, binding, vnode) {
    // el.style.backgroundColor = 'green';
    // el.style.backgroundColor = binding.value;
    var delay = 0;
    if(binding.modifiers['delayed']){
      delay = 3000;
    }
    setTimeout(()=>{
      if(binding.arg == 'background'){
        el.style.backgroundColor = binding.value;
      } else {
        el.style.color = binding.value;
      }
    }, delay)
  }
});
new Vue({
  el: '#app',
  render: h => h(App)
})

// bind(el,binding, vnode)  =>  once directive is attached
// inserted(el, binding, vnode) => inserted in parent node
// update(el, binding, vnode, oldVnode) => once component is updated(without children)
// componentUpdated(el,binding, vnode, oldVnode)  => once component is updated(with children)
// unbind(el, binding, vnode) => once directive is removed