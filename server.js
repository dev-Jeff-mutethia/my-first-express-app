const express = require('express');
const app = express();
const port = 3000
const path = require('path');

// Middleware to serve static files
app.use(express.static(path.join(__dirname, 'public')));

app.get('/patients', (req, res) => {
    res.send()
})

// app.app('/statics', express.static('public'));

app.listen(3000, () => {
    console.log(`app runnuning on: http://localhost:3000`);
});
