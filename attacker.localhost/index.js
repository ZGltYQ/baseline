const express = require("express");
const app = express();
const cookieParser = require('cookie-parser');
app.use(cookieParser());


app.get("/", (req, res)=>{
    res.sendFile(__dirname + "/index.html");
})

app.listen(3000, ()=>{
    console.log("server started")
})

