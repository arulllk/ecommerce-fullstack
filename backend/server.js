require('dotenv').config();
require('express-async-errors'); 

const express = require("express");
const app = express();
const connectDB =  require("./db/connection");
const cors = require("cors");




const upload = require('./middleware/fileUpload.middleware');
const notFoundMiddleware = require('./middleware/notfound');
const errorHandlerMiddleware =  require('./middleware/error-handler');

const testRouter = require('./routes/test');
const productRouter = require('./routes/product');






/* middlewares */
app.use(express.json());
app.use(cors());

app.use('/api/v1/test',testRouter);
app.use('/api/v1/product', upload.single('image'), productRouter)





/* error handlers */
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);


const port = process.env.PORT ? parseInt(process.env.PORT,10) : 4000;
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port,()=>{
            console.log(`Server is listening to the port ${port}`)
        })
    } catch (error) {
        console.log(error)
    }
}
start();



