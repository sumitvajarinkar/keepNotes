const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors');
const loginRouter = require('./Routes/apis/googleSigninRoute')
const port = process.env.PORT||5000
const app =express();

const uri = 'mongodb+srv://Print-X:Pass@123@cluster0.w844m.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose.connect(uri,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>{
    console.log('connected..');
})
.catch((err)=>{
    console.log(err);
})


app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors())

//routes
app.use('/googlelogin',loginRouter)
app.listen(port,()=>{
    console.log(`server is runnig at http://localhost:${port}`)
})