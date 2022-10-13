<template>
    <div class="title">
        <h1>{{ title }}</h1>
    </div>
</template>

<script>
export default {
    name: 'Header',
    props: {
        title: String,
    }
}
</script>

<style scoped>
    .title{
        display: flex;
        justify-content: center;
        margin: 30px 0px;
    }
    h1{
        font-size: 50px;
        font-weight: bold;
        padding: 15px 40px;
        border: 2px black solid;
        width: 660px;
    }
</style>