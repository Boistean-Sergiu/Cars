const Joi = require('joi')
const express = require('express')
const app = express()
const mongoose = require('mongoose')

app.use(express.json())

app.get('/',(req,res)=>{
    res.send('<h3>Please use the desire api in the address, like so: /3000/api/name_of_api .</h3>')
})

mongoose.connect('mongodb://localhost/Cars')
const db = mongoose.connection

Brand = require('./models/brands.js')

app.get('/all',(req,res)=>{    
    Brand.getBrands((err, brands) =>{
        if (err){
            throw err
        }
        res.json(brands)
    })
})

app.post('/api/brands',(req,res) => {
    const brand = req.body
    Brand.addBrand (brand, (err, brand) =>{
        if (err){
            throw err
        }
        res.json(brand)
    })
})

app.put('/api/modify/:_nume',(req,res) =>{
    var id = req.params._nume
    var brand = req.body
    Brand.updateBrands(id, brand, {},(err, brandi)=>{
        if (err){
            throw err
        }
        res.json(brandi)
    })
})

app.delete('/api/delete',(req,res)=>{
    var brandi = req.body
    Brand.deleteBrand(brandi,(err, brand) =>{
        if (err){
            throw err
        }
        res.json(brand)
    })
})

app.listen(3000)
console.log("Waiting on port 3000...")
