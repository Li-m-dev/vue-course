<template>
  <div>
    <h2>New</h2>
    <button @click="counter++">increase</button>
    <p>{{ counter }}</p>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      counter: 0
    }
  },
  destroyed() {
    console.log('destroyed!');
  },
  deactivated() {
    console.log('deactivated!');
  },
  activated() {
    console.log('activated!');
  }
}
</script>