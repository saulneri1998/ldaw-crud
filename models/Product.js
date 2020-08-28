const knex = require('../database/connection');
const { updateProduct } = require('../controllers/crudController');

exports.all = () => {
    return knex
        .select('*')
        .from('products');
}

exports.create = (product) => {
    return knex('products')
        .insert({
            name: product.name,
            price: product.price,
            description: product.description
        })
}

exports.find = (id) => {
    return knex
        .select('*')
        .from('products')
        .where('id', id)
        .first();
}

exports.edit = (id, updateProduct) => {
    return knex('products')
        .update(updateProduct)
        .where('id', id);
}

exports.delete = (id) => {
    return knex('products')
        .delete()
        .where('id', id);
}