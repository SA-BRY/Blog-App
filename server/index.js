const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose')
const cors = require('cors')
const router = require('./router/router')




mongoose.connect('mongodb://localhost:27017/Blog',{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log('mongoDb connected')
}).catch((err)=>{
    console.log(err)
})





app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())









app.use(router)



app.listen(port, () => console.log(`app listening on port ${port}!`))