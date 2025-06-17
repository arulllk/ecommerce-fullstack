const Product = require('../models/product');
const  { productSchema } =  require ('../validators/productValidator');
const { BadRequestError } = require('../errors');
const { uploadOnCloudinary } = require('../utils/cloudinary')


const createProduct = async(req,res,next) => {
    const { error  } = productSchema.validate(req.body,{abortEarly:false});
    if (error) {
        const formattedErrors = error.details.reduce((acc, curr) => {            
            const field = curr.path[0];
            acc[field] = curr.message;
            return acc;
        }, {});

        // Send it in your consistent format
        return res.status(400).json({
            status: 'Error',
            message: 'Validation Failed',
            errors: formattedErrors,
        });
    }
    if(!req.file) {
        throw new BadRequestError ('Image is missing', {'image':'Image is required'});        
    }    
    const imagePath = req.file.path;
    let cloudinaryResult;
    try {
        cloudinaryResult = await uploadOnCloudinary(imagePath,'Products')
        const  {  title,category, mrp, sellingPrice, summary, rating, reviewsCount, altText, slug }  = req.body;        
        const product = new Product({title,category, mrp, sellingPrice, summary, rating, reviewsCount, altText, slug, image:cloudinaryResult .secure_url});
        await product.save();
        res.status(201).json({
            "status":"Success",
            "message":"Product created successfully",
            "data":{
                product:product                
            }
        })
    } catch (error) {
        //delete the uploaded files if product dosent get save
        if(cloudinaryResult?.public_id){
            const cloudinary = require('cloudinary').v2;
            await cloudinary.uploader.destroy(cloudinaryResult.public_id);
        }
        next(error)
    }
}

const getAllProducts = async (req,res) => {
    const products = await Product.find({}).sort('createdAt');
    res.status(200).json({
        "status":"Success",
        "message":"Products retrived successfully",
        data:{
            products
        }
    })
}



module.exports = {createProduct ,getAllProducts };