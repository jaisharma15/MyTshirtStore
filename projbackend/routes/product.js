const express =  require("express");
const router = express.Router();

const {getProductById, 
    createProduct, 
    photo,
    getProduct,
    deleteProduct, 
    updateProduct, 
    getAllProducts,
    getAllUniqueCategories } =
    require("../controllers/product");
const{ isSignedIn, isAuthenticated, isAdmin } = require("../controllers/auth");
const { getUserById } = require("../controllers/user");

//all of parama
router.param("userId",getUserById);
router.param("productId",getProductById);

//actual routes

//create routes
router.post("/product/create/:userId", 
isSignedIn, 
isAuthenticated,
isAdmin,
createProduct);

//read routes
router.get("/product/:productId",getProduct);
router.get("/product/photo/:productId", photo);

//delete route
router.delete("/product/:productId/:userId", 
isSignedIn, 
isAuthenticated, 
isAdmin,
deleteProduct);

//update route
router.put(
    "/product/:productId/:userId",
    isSignedIn,
    isAuthenticated,
    isAdmin,
    updateProduct
  );
  

//listing routes
router.get("/products", getAllProducts)

router.get("products/categories", getAllUniqueCategories);
module.exports = router;