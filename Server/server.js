
// Async

const express = require('express');
const app = express();
const routes = require('./routes/routes')
const errorHandlerMiddleware = require('./middleware/error-handler')
const notFound = require('./middleware/not-found')
const connectDB = require('./db/connect')
if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}
const stripe = require("stripe")('sk_test_51LTmH2HKDFx0rty5D8k1K9teO4maftBr5sqjvBYy8lDkfswmowHH5chHeNrCyn0nFVzqQp37h66oTaSjkNipGYwF00LQawJsL2');



app.use(express.json());

app.get('/', (req,res)=>{
    res.send(`<h2>Store Api</h2><a href="/api/v1/products">Product Route</a>`)
})

app.use('/api/v1/', routes)


app.use(errorHandlerMiddleware);
app.use(notFound);

const port = process.env.PORT || 4000

const start = async ()=>{
try {
    // await connectDB(process.env.MONGO_URI)
    app.listen(port, console.log(`Sever is running on port ${port} `))
    
} catch (error) {
    console.log(error)
}
}

start()

