const express = require("express");
const router = express.Router();
const {getAllProducts, getAllProductsTesting, practice, subbu} = require('../controllers/products');

router.route("/").get(getAllProducts);
router.route("/testing").get(getAllProductsTesting);
router.route("/practice").get(practice);
router.route("/subbu").get(subbu);

module.exports = router;