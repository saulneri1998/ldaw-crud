const { table } = require("../database/connection");

exports.up = function(knex) {
    return knex.schema
        .createTable('products', (table) => {
            table.increments('id');
            table.string('name', 255).notNullable();
            table.string('description', 512).notNullable();
            table.float('price');
            table.timestamp(true, true);

        })
};

exports.down = function(knex) {
    return knex.schema
        .dropTable('products');
};