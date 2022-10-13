<template>
    <Header title="Everything Forum" />
    <Forum />
</template>

<script>
  import Header from './components/Header.vue'
  import Forum from './components/Forum.vue'

  export default {
    components: {
      Header,
      Forum,
    }
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Silkscreen&display=swap');
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Silkscreen', cursive;
  }
  #app{
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  body {
    background-color: rgb(49, 49, 49);
    color: rgba(235, 235, 235, 0.64);
  }
</style>
