const express = require("express")
const app = express()
const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send("I am up!");
})

app.listen(PORT, ()=>{
  console.log(`Running on Port: ${PORT}`);
})
