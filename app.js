const express = require('express')
const app = express()

app.get('/',(req,res)=>{

res.send("From hari")

})

app.listen(3000,()=>{

console.log("Hi From harikrishna")

})