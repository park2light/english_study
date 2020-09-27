const express = require('express')
const app = express()
const port = 5000
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://psh:psh1234@boilerplate.idmdn.mongodb.net/boilerplate?retryWrites=true&w=majority'
,{useNewUrlParser:true , useUnifiedTopology:true,useCreateIndex:true,useFindAndModify:false})
.then(()=> console.log('MongoDB Connected!!'))
.catch(err => console.log("MongoDB err"))

app.get('/',(req,res) => res.send("안녕~"))
app.listen(port,() => console.log(`connected ${port}`))