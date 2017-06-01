var express = require('express');
var app = express();
app.set("view engine", "ejs");
app.set("views", "view");
app.use(express.static("dist"));
var PORT = 3000;
app.listen(PORT, ()=>console.log("Server is starting on PORT : " + PORT));
app.get("/", (req, res)=>res.render("home"));
