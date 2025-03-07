const product = require("../models/schema");

const getAllProducts = async (req, res) => {

 const products = await product.find(req.query);
    res.status(200).json(products)
}


module.exports = {getAllProducts};