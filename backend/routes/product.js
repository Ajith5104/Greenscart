const express = require("express");
const { getProducts, newProduct, getSingleProduct, updadeProduct, deleteProduct, createReview, getReviews, deleteReviews} = require("../controllers/productController");
const {isAuthenticatedUser, authorizeRoles}=require('../middlewares/authenticate');
const router = express.Router();

router.route("/products").get(getProducts);
router.route("/product/:id").get(getSingleProduct) 
                            .put(updadeProduct)
                            .delete(deleteProduct)
router.route("/review").put(isAuthenticatedUser,createReview) 
router.route("/reviews").get(getReviews) 
router.route("/review").delete(deleteReviews) 


//Admin routes                            
router.route("/admin/product/new").post(isAuthenticatedUser,authorizeRoles('admin'),newProduct);


module.exports = router;
