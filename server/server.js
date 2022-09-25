const express = require('express');
const routes = require("./routes")
const app = express();
app.use(routes);
const port = 3333;
app.listen(3333, () => {
    console.log(`😎 Backend started at http://localhost:${port} 🥳`)
});

