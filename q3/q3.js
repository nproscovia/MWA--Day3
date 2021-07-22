const express = require("express")
require("dotenv").config();
const app = express()

app.set("port", process.env.Port);

const path = require("path");
const router = require("./api/routes")
require("./api/data/dbconnection.js").open();



app.use((req,res,next)=>{
    console.log(req.method, req.url);
    next();
})

app.use(express.static(process.env.PUBLIC_FOLDER));
app.use(express.urlencoded({extended: false}));
app.use(express.json)
app.use("/api", router);

const server = app.listen(process.env.PORT, function(){
    console.log("listening to port", server.address().port);
})