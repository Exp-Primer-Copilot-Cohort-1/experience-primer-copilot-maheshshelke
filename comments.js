
// Create web server application with express module and set port number to 3000 and start the server
const express = require('express');
const app = express();
const port = 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));
