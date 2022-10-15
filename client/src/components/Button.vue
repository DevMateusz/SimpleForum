<template>
  <button @click="$emit('btn-click')">
    <h2>{{ text }}</h2>
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    text: String
  }
}
</script>

<style scoped>
  button{
    height: 50px;
    cursor: pointer;
  }
  h2{
    padding: 10px;
  }
</style>