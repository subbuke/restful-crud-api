const getAllProducts = async (req, res) => {
    res.status(201).json({ msg:"get all products"})
}

const getAllProductsTesting = async (req, res ) => {
    res.status(201).json({msg: "get all products testing"})
}

const practice = async (req, res) => {
    res.status(201).json({msg: "practicing"})
}

const subbu = async (req, res) => {
    res.status(201).json({msg:"im subbu"});
}

module.exports = {getAllProducts, getAllProductsTesting, practice, subbu}