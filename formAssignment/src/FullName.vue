<template>
  <div>
    <div class="form-group">
      <label for="firstName">First name</label>
        <input
          type="text"
          id="firstName"
          class="form-control"
          :value="firstName"
          @input="nameChange(true, $event)"
          >
    </div>
    <div class="form-group">
      <label for="lastName">Last name</label>
        <input
          type="text"
          id="lastName"
          class="form-control"
          :value="lastName"
          @input="nameChange(false, $event)"
          >
    </div>
  </div>
</template>

<script>
export default {
  props:['value'],
  methods: {
    nameChange(isFirst, event) {
      let name = "";
      if(isFirst){
        name = event.target.value + " " + this.lastName;
      }else{
        name = this.firstName + " " + event.target.value;
      }
      this.value = name;
      this.$emit('input', this.value)
    }
  },
  computed: {
    firstName() {
      console.log(this.value)
      return this.value.split(" ")[0]
    },
    lastName() {
      return this.value.split(" ")[1]
    }
  }
}
</script>

<style>

</style>

