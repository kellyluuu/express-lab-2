const express = require('express')
const app = express()

app.get("/greeting",(req,res)=>{
    res.send(`Hello Stranger`)
})

app.get("/greeting/:name",(req,res)=>{
    res.send(`${req.params.name}! It's so great to see you!`)
})

app.get("/tip/:total/:tipPercentage",(req, res)=>{
    res.send(`Tip Amount = $${parseInt(req.params.total)*parseInt(req.params.tipPercentage)*.01}`)
})




app.listen(3001,()=>{
    console.log('express-lab live on server 3001')
})
