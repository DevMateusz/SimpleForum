<template>
  <div class="post">
    <div class="post-content">
      <h2>{{ post.title }}</h2>
      <h4>{{ post.text }}</h4>
      <h6>{{ `${post.createdAt.getDate()}/${post.createdAt.getMonth()}/${post.createdAt.getFullYear()}` }}</h6>
    </div>
    <div class="action-buttons">
      <i class="fa-solid fa-trash-can fa-2x" @click="$emit('delete-post', post._id)"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Post',
  props: {
    post: Object,
  },
  
}
</script>

<style scoped>
.post{
  padding: 10px 0px;
  border-top: 4px rgb(71, 71, 71) solid;;
  display: flex;
  justify-content: space-between;
}
.post-content{
  position: relative;
}
h6{
  position: absolute;
  top: 5px;
  left: 505px;
}
h4{
  padding: 10px 0px 10px 10px;
}
.action-buttons{
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
  margin: 0px 10px;
  cursor: pointer;
}
</style>