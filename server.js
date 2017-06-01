var express = require('express');
var app = express();
app.set("view engine", "ejs");
app.set("views", "view");
app.use(express.static("dist"));
var PORT = 3000;
app.listen(PORT, ()=>console.log("Server is starting on PORT : " + PORT));
app.get("/", (req, res)=>res.render("home"));

app.get("/listProduct", (req, res)=>{
    let rows = [];
    for (let i =0; i< 1000000; i++) {
        rows.push({
            id: i,
            task: 'Task ' + i,
            complete: 30,
            priority: 'Critical',
            issueType: 'Bug',
            startDate: '2017/12/12',
            completeDate: '2017/12/12'})
    }
    res.send(rows);
});