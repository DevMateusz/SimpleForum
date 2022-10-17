const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

// GET posts
router.get('/', async (req, res) => {
    const posts = await loadPostsCollection();
    res.send(await posts.find({}).toArray());
})

// ADD post
router.post('/', async (req, res) => {
    const posts = await loadPostsCollection();
    await posts.insertOne({
        title: req.body.title,
        text: req.body.text,
        createdAt: new Date()
    });

    res.status(201).send();
})

// DELETE post
router.delete('/:id', async (req, res) => {
        const posts = await loadPostsCollection();
        await posts.deleteOne({_id: new mongodb.ObjectId(req.params.id)});
        res.status(200).send({}); 
})

async function loadPostsCollection() {
    const client = await mongodb.MongoClient.connect('mongodb+srv://admin:DhENVq3kWj5niCNs@cluster0.7oh32bl.mongodb.net/?retryWrites=true&w=majority', {
        useNewUrlParser: true
    });

    return client.db('forum').collection('posts');
}

module.exports = router;