<template>
    <div class="creator-container">
        <Button text="Create Post" @btn-click="createPost" />
        <label for="title">Title</label>
        <input type="text" name="title"  v-model="title">
        <label for="text">Contents</label>
        <textarea name="text" v-model="text" cols="30" rows="7"></textarea>
    </div>
</template>

<script>
import Button from './Button.vue'

export default {
    name: 'PostCreator',
    components: {
        Button,
    },
    data() {
        return {
            title: '',
            text: '',
        }
    },
    methods: {
        createPost() {
            if (this.title != '' && this.text != '') {
                this.$emit('createPost', this.title, this.text)
                this.title = ''
                this.text = ''
            } else {
                alert('Fill title and text')
            }
        }
    }
}
</script>

<style scoped>
.creator-container{
    position: relative;
    display: flex;
    flex-direction: column;
    margin: 0px 0px 10px 0px;
}
input{
    margin-bottom: 20px;
    font-size: 20px;
}
label{
    font-size: 12px;
}
textarea{
    resize: none;
    margin-bottom: 20px;
}
Button{
    position: absolute;
    right: 0;
    top: -60px
}
</style>