// if (process.env.NODE_ENV !== "production") 
require("dotenv").config();



const express = require("express");
const router = require("./routes/index");
const bodyParser=require("body-parser")
const app = express();
const port = process.env.PORT || PORT;


app.use(bodyParser.json());
app.use(router);




app.listen(port, () => {
	console.log("server is listening on port", port);
});
