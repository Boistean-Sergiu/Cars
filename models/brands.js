const mongoose = require('mongoose')

var  brandSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    sold: {
        type: Number,
        required: true
    },
    returned: {
        type: Number,
        required: true
    }
},{
    versionKey: false})

var Brands = module.exports = mongoose.model('Brand', brandSchema)

module.exports.getBrands = (callback, limit) =>{
    Brands.find(callback).limit(limit)
}

module.exports.addBrand = (brand, callback) =>{
    Brands.create(brand, callback)
}

module.exports.updateBrands = (id, brand,options, callback) =>{
    const query = { name: id}
    const update = {
        name : brand.name,
        country: brand.country,
        sold: brand.sold,
        returned: brand.returned
    }
    Brands.findOneAndUpdate(query, update, options, callback)
}

module.exports.deleteBrand = (brand, callback) =>{
    const query = {name: brand.name}
    Brands.remove(query, callback)
}