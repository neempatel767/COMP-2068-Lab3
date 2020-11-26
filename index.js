console.clear();

const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

const routes = require('./routes');
const router = routes(express.Router());
app.use(router);



// const { handle404s, errorHandler } = require('./errorHandling');
// app.use(handle404s);
// app.use(errorHandler);

app.listen(4000, () => console.log('Always watching... on port 4000!'));