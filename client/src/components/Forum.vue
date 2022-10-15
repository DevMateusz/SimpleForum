<template>
    <div class="forum">
        <div class="bottom-container">
            <h1>Latest Posts</h1>
        </div>
        <PostCreator @create-post="createPost" />
        <Posts :posts="posts" :error="error" @delete-post="deletePost" />
    </div>
</template>

<script>
import PostServices from '../PostsServices';
import PostCreator from './PostCreator.vue'
import Posts from './Posts.vue'

export default {
    name: 'Forum',
    components: {
        PostCreator,
        Posts,
    },
    data() {
        return {
            posts: [],
            error: '',
            title: '',
            text: '',
        }
    },
    async created() {
        try {
            this.posts = await PostServices.getPosts();
        } catch(err) {
            this.error = err.message;
        }
    },
    methods: {
        async createPost(title, text) {
            await PostServices.postPost(title, text)
            this.posts = await PostServices.getPosts();
        },
        async deletePost(id) {
            if(confirm('Are you sure?')) {
                await PostServices.deletePost(id);
                this.posts = await PostServices.getPosts();
            }
        }
    }
}
</script>

<style scoped>
.forum{
    border: 2px black solid;
    width: 660px;
    padding: 15px 40px;
    margin-bottom: 40px;
}
.bottom-container{
    display: flex;
    justify-content: space-between;
}
h1{
    margin-bottom: 20px;
    font-size: 34px;
}
</style>

<!-- pozycja przycisku do poprawy -->
<!-- pozycja daty postów do poprawy -->