const express = require('express')
app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config();
mongoose.connect(process.env.DB_CONNECT,{ useNewUrlParser: true ,useUnifiedTopology: true })
        .then(()=>console.log('Database connected'))
        .catch(err=>console.log(`Error: ${err}`))

app.use(express.json())

const authRoutes = require('./routes/auth')
const postRoutes = require('./routes/posts')

app.use('/api/posts',postRoutes)
app.use('/api/user/',authRoutes)



// app.use('/',(req,res)=>{
//     res.send('Hello mundo')
// })

const PORT = process.env.PORT || 5000
app.listen(PORT,()=>console.log(`App running on port ${PORT}`))