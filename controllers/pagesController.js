const productsModel = require('../models/Product')

exports.homepage = (req, res) => {
    productsModel.all()
        .then((data) => {
            let products = data;
            res.render('pages/homepage', { products: products });
        });
};

exports.about = (req, res) => {
    res.render('pages/about-us');
};

exports.productsCreate = (req, res) => {
    res.render('pages/createProduct');
}