const express = require('express')
const app = express()
const mongoose = require('mongoose')

app.post('/patient', (req, res)=>{
    console.log(req.body)
    res.send(req.body)
})


mongoose.connect('mongodb+srv://admin:1111@databaseapi.ijixrhd.mongodb.net/Node-API?retryWrites=true&w=majority')
.then(() => {
    console.log('Connected to MongoDB database') 
    app.listen(3000, ()=>{
        console.log('Node API is running on port 3000')
    })
    
}).catch(() => {
    console.log(error)
})