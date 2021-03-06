const express = require('express');
const routes = require('./routes.js');
const app = express();

app.use(express.json());
app.use(routes);


const port = process.env.PORT || 8082;
app.listen(port, () => {
    console.log('Server started on port '+port);
});