const express = require("express");
const app = express();
const cookieParser = require('cookie-parser');
app.use(cookieParser());

app.get("/", (req, res)=>{
    res.cookie("authenticated", "1");
    res.send("hello world")
})

app.post("/cookie", (req, res)=>{
    res.json(req.cookies)
})

app.listen(8080, ()=>{
    console.log("server started")
})