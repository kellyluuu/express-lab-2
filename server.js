const express = require('express')
const app = express()

//Greetings

app.get("/greeting",(req,res)=>{
    res.send(`Hello Stranger`)
})

app.get("/greeting/:name",(req,res)=>{
    res.send(`${req.params.name}! It's so great to see you!`)
})

//Tip Calculator
app.get("/tip/:total/:tipPercentage",(req, res)=>{
    res.send(`Tip Amount = $${parseInt(req.params.total)*parseInt(req.params.tipPercentage)*.01}`)
})

//Magic 8 Ball
const resArray = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]
let answer = resArray[Math.floor(Math.random() * resArray.length)];

app.get("/magic/:question",(req,res)=>{
    res.send(`<html>
        <body>
            <h1>${answer}</h1>
            <input type="text
        </body>
    </html>`)
})


app.listen(3001,()=>{
    console.log('express-lab live on server 3001')
})
