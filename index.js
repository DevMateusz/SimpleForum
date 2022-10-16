const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
const path = require('path');
const serveStatic = require('serve-static');
const posts = require(path.join(__dirname, './routes/api/posts'));

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(serveStatic(__dirname + '/dist'));

app.use('/api/posts', posts);

// Handle production
const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});