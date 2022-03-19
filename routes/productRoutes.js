const productController =  require('../controllers/productController')
const router = require('express').Router()

router.post('/add', productController.addProduct)
router.get('/getproducts', productController.getAllProducts)
router.get('/getproduct/:id', productController.getProduct)
router.put('/update/:id', productController.updateProduct)
router.delete('/delete/:id', productController.deleteProduct)
router.get('/published', productController.getPublishedProducts)

module.exports = router