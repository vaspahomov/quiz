const express = require('express');
const path = require("path");
const app = express();


const rootDir = process.cwd();
app.use(express.static(path.join(rootDir, "static")));

app.get('/', function (req, res) {
    res.sendFile(path.join(rootDir, 'static/index.html'));
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
