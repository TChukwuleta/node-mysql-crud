const db = require('../models')

// Create main model

const Product = db.products
const Review = db.reviews

// Main work

// Create product
const addProduct = async (req, res) => {
    let info = {
        title: req.body.title,
        price: req.body.price,
        description: req.body.description,
        published: req.body.published  ? req.body.published : false
    }

    const product = await Product.create(info)
    res.status(201).send(product)
    console.log(product)
}

// Get all products
const getAllProducts = async (req, res) => {
    let products = await Product.findAll({
        attributes: [
            'title',
            'price'
        ]
    })
    res.status(200).send(products)
}

// Get single product
const getProduct = async (req, res) => {
    let id = req.params.id
    let product = await Product.findOne({ where: { id: id }})
    res.status(200).send(product)
}

// Update product
const updateProduct = async (req, res) => {
    let id = req.params.id
    const product = await Product.update(req.body, { where: {id: id }})
    res.status(201).send(product)
}

// Delete product
const deleteProduct = async (req, res) => {
    let id = req.params.id
    await Product.destroy({ where: { id: id }})
    res.status(201).send("Product successfully deleted")
}

// Published product
const getPublishedProducts = async (req, res) => {
    const products = await Product.findAll({ where: { published: true }})
    res.status(201).send(products)
}

module.exports =  {
    addProduct,
    getAllProducts,
    getProduct,
    updateProduct,
    deleteProduct,
    getPublishedProducts
}