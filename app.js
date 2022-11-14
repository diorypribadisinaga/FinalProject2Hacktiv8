if (process.env.NODE_ENV !== "production") require("dotenv").config();

const express = require("express");
const router = require("./routes/index");
const bodyParser=require("body-parser")
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(router);

app.listen(() => {
	console.log("server is listening on port");
});
