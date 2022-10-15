<template>
    <div class="container">
        <p class="error" v-if="error">{{ error }}</p>
        <div class="posts-container">
            <Post v-for="post in posts" :key="post._id" :post="post" @delete-post="$emit('delete-post', post._id)"/>
        </div>
    </div>
</template>
    
<script>
import Post from './Post.vue';

export default {
    name: 'Posts',
    components: {
        Post,
    },
    props: {
        posts: Object,
        error: String,
    }
    
}
</script>

<style scoped>
    .posts-container{
        display: flex;
        flex-direction: column-reverse;
    }
</style>