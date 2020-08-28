let ProductModel = require('../models/Product')

exports.storeProduct = (req, res) => {
    let product = {
        name: req.body.name,
        price: req.body.price,
        description: req.body.description
    };
    ProductModel.create(product)
        .then((id) => {
            res.redirect('/');
        })
}

exports.showProduct = (req, res) => {
    let id = req.params.id;

    ProductModel.find(id)
        .then((product) => {
            if (product == null) {
                res.status(404).send('Not found');
                return;
            } else {
                res.render('pages/showProduct', { id: id, product: product });
            }
        });
}

exports.editProduct = (req, res) => {
    let id = req.params.id;

    ProductModel.find(id)
        .then((product) => {
            if (product == null) {
                res.status(404).send('Not found');
                return;
            } else {
                res.render('pages/editProduct', { product: product });
            }
        });
}

exports.updateProduct = (req, res) => {
    let id = req.params.id;

    ProductModel.find(id)
        .then((product) => {
            if (product == null) {
                res.status(404).send('Not found');
                return;
            } else {
                let updateProduct = {
                    name: req.body.name,
                    price: req.body.price,
                    description: req.body.description
                }
                ProductModel.edit(product.id, updateProduct)
                    .then((id) => {
                        res.redirect('/');
                    });
            }
        });
}

exports.deleteProduct = (req, res) => {
    let id = req.params.id;

    ProductModel.find(id).then((product) => {
        // Si el producto no existe entonces
        if (product == null) {
            res.status(404).send('Not found');
            return;
        }
        ProductModel.delete(product.id)
            .then((id) => {
                res.redirect('/');
            });
    });
}