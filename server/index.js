require('dotenv').config();
const Express = require('express');
const app = Express();

app.listen(process.env.SERVER_PORT, () => console.log(` server running on http://localhost:${process.env.SERVER_PORT}`));