const router = require('express').Router();
const PagesController = require('../controllers/pagesController');
const crudController = require('../controllers/crudController');

router.get('/', PagesController.homepage);
router.get('/products/create', PagesController.productsCreate);
router.get('/products/:id', crudController.showProduct);
router.get('/products/:id/edit', crudController.editProduct);
router.get('/about-us', PagesController.about);

router.post('/products', crudController.storeProduct);
router.put('/products/:id', crudController.updateProduct);
router.delete('/products/:id', crudController.deleteProduct);

module.exports = router;