const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const Customer = require('./models/Customer');

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI).then(()=>console.log('Mongodb connected')).catch((err)=>{ console.log(err)})

app.get('/api', async (req,res)=>{

    try {
        const response = await Customer.find();
        res.send(response);
    } catch (error) {
        res.send(error)
    }
    
})

app.post('/adduser',async (req,res)=>{

    try {
        const response = await Customer.create(req.body)
        res.json(response)
    } catch (error) {
        res.json(error)
        res.status(400)
    }
    
})
app.listen(process.env.PORT,()=>console.log('server is run on http://localhost:5050'))
