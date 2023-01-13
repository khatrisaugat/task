const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// connection configurations
app.listen(port, () => console.log("express server running on port 3000.."));
