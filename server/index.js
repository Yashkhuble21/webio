const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const User = require('./models/User');

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI).then(()=>console.log('Mongodb connected')).catch((err)=>{ console.log(err)})
app.get('/',async (req,res)=>{
    
    const response = await fetch('https://api.coingecko.com/api/v3/search/trending');
    send(response)
})
app.listen(9080,()=>console.log('server is run on http://localhost:9080'))
