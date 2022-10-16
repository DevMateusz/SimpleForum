const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(bodyParser.json());
app.use(cors());

const posts = require('./routes/api/posts');

// Use Routes
app.use('/api/posts', posts);

// Serve static assets if in production
if(process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('client/dist'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'));
        const protocol = req.protocol;
        const host = req.hostname;
        const url = req.originalUrl;
        const port = process.env.PORT || PORT;

        const fullUrl = `${protocol}://${host}:${port}${url}`
    
        const responseString = `Full URL is: ${fullUrl}`;                       
        console.log(responseString);
        console.log(responseString);
        console.log(responseString);
        console.log(responseString);
        console.log(responseString);
        console.log('test');
        console.log('test');
        console.log('test');
        console.log('test');
        console.log('test');
    });
}

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});