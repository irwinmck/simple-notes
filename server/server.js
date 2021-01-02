require('dotenv').config();
const express = require('express');
const app = express();
const chalk = require('chalk');

app.get('/', (req, res) => {
    res.send('Hello World');
})

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(chalk.blue(`[server] Listening at: http://localhost:${port}`));
})