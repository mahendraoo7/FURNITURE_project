const express = require('express');
const productRoutes = express.Router();
const { upload } = require('../../Helpers/imageUpload');
const {
    addNewProduct,
    getAllProducts,
    getProduct,
    updateProduct,
    deleteProduct
} = require('../../Controller/Admin/product.controller');

// ADD PRODUCT
productRoutes.post('/add-Product',upload.single('productImage'), addNewProduct);

// GET ALL PRODUCT
productRoutes.get('/get-Products',  getAllProducts);

// GET SPECIFIC PRODUCT
productRoutes.get('/get-Product', getProduct);

// UPDATE PRODUCT
productRoutes.put('/update-Product', updateProduct);

// DELETE PRODUCT
productRoutes.delete('/delete-Product', deleteProduct);

module.exports = productRoutes;