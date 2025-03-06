const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const products = require("./routes/Products");



const app = express();
require('dotenv').config();
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send("hello world")
})

app.use("/products", products);
 
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("database connected successfully")
    
}).catch(err => console.log(err))


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log("server running at port" + PORT)
})