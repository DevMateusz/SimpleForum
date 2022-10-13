<template>
    <div class="forum">
        <PostCreator />
        <Posts />
        <p>Hello test</p>
    </div>
</template>

<script>
import PostCreator from './PostCreator.vue'
import Posts from './Posts.vue'

export default {
    name: 'Forum',
    components: {
        PostCreator,
        Posts,
    }
}
</script>

<style scoped>
.forum{
    border: 2px black solid;
    width: 660px;
    
}
</style>