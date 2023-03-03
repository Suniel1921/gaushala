const { constants } = require('buffer');
const express = require ('express')
const app = express();

const port = 400;

app.get('/', (req, res)=>{
    res.send('iam ok ')
})

app.listen(port, (req, res)=>{
    console.log(`server is running `)
})