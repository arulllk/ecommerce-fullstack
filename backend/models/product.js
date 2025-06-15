const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title: { 
        type:String,       
        required:[true,'Please add title of your product'],
        minlength:[5,'Title must be greater than 5 characters'], 
        maxlength:[200,'Tile must be less than 200 characters']
    },
    category: { 
        type:String, 
        required:[true,'Please select the category of the product'], 
        enum:['electronics','books','fashion','home']
    },
    mrp:{
        type:Number,
        required:[true,'Please  add mrp of your product']
    },
    sellingPrice:{
        type:Number,
        required:[true,'Please add selling price']
    },
    summary:{type:String},
    rating: { type:Number, default:0 },
    reviewsCount: {type:Number, default:0},
    image:{type:String, required:[true,'Please add image']},
    altText:{ type:String,required:[]},
    slug:{type:String,unique:true}
},{timestamps:true})

productSchema.pre('save',async function(next){ 
   
    if(!this.isModified('title')){
        return next();
    }
    const slugBase = this.title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
    let slug = slugBase;
    let suffix = 1
    while (await mongoose.models.Product.findOne({slug})) {
        slug = `${slugBase}-${suffix}`
        suffix++
    }
    this.slug = slug;
    next();
})

 

module.exports = mongoose.model('Product',productSchema);