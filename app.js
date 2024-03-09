const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const multiparty = require('connect-multiparty')
const app = express()
app.use(express.json())
app.use(cors)
app.use('/storage' , express.static(__dirname+'/storage'))

var db = 'mongodb://127.0.0.1:27017/'+process.env.DATABASE_NAME
mongoose.connect(db)
.then(()=>console.log('mongodb connected successfully'))
.catch(()=>console.log('cannot connect to mongodb'))

app.get('/' , (req , res)=>res.send('Welcome to node js '))


require('./api')(app)
app.listen(process.env.PORT || 3000 , (err)=>{
    console.log("Server run sussessfuly on http://localhost:"+ (process.env.PORT || 3000))
})