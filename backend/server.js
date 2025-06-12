const express = require("express");
const app = express();
const connectDB =  require("./db/connection");
const cors = require("cors");
require('dotenv').config();




const notFoundMiddleware = require('./middleware/notfound');
const errorHandlerMiddleware =  require('./middleware/error-handler');

const testRouter = require('./routes/test');






/* middlewares */
app.use(express.json());
app.use(cors());

app.use('/api/v1/test',testRouter);





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



