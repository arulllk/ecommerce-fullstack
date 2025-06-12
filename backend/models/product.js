const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title: { type:String,required:[true,'Please add title of your product'], minlength:5, maxlength:200 },
    category: {type:String, required:[true,'Please select the category of the product'], enum:['electronics','books','fashion','home']},
    mrp:{type:Number},
    sellingPrice:{type:Number,required:[true,'Please add selling price']},
    summary:{type:String},
    rating: { type:Number, default:0 },
    reviewsCount: {type:Number, default:0},
    image:{type:String, required:[true,'Please add image']},
    altText:{ type:String,required:[]}
},{timestamps:true})

module.exports = mongoose.Model('Product',productSchema);