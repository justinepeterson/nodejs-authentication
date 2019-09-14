const express = require('express')
const authRoutes = require('./routes/auth')
const mongoose = require('mongoose')

const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/auth',{ useNewUrlParser: true ,useUnifiedTopology: true })
        .then(()=>console.log('Database connected'))
        .catch(err=>console.log(`Error: ${err}`))

app.use('/api/user/',authRoutes)


const PORT = process.env.PORT || 5000
app.listen(PORT,()=>console.log(`App running on port ${PORT}`))