const express = require("express")
const app = express()
require("dotenv").config();
const PORT = process.env.PORT || 4000;

function keepalive(){
  app.get("/", (req, res) => {
    res.send("I am up!");
  })
  
  app.listen(PORT, ()=>{
    console.log(`Running on Port: ${PORT}`);
  })
}

module.exports = keepalive();
