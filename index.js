const express = require("express");
const path = require("path");

const app = express();


const port = 1234;

app.get('*', function(request, response) {
    response.status(400)
    response.send('400 Bad Request!');
});

app.listen(port, () => {
    console.log(`Sever running on port ${port}`);
});
