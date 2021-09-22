const express = require("express");
const app = express();


app.get("/", (req, res)=>{
    if(req.query.jwt){
        const jwt = req.query.jwt.split(".");
        res.send(
            `<div>${Buffer.from(jwt[0], 'base64').toString("ascii")}</div>
            <div>${Buffer.from(jwt[1], 'base64').toString("ascii")}</div>`
            )
    } else {
        res.send("input jwt in get request")
    }
    
})

app.listen(8080, ()=>{
    console.log("http://localhost:8080")
})