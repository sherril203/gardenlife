
const { CartModel } = require('../models/Cart.model');

const postCart = async (req, res) => {
    try {
        const Cartdata = req.body;

        const data = new CartModel(Cartdata);
        await data.save();

        return res.status(201).send({
            message: "Product added to cart",
            data: data
        });
    }
    catch (err) {
        console.error("Cart POST error:", err);
        return res.status(500).send({
            message: "Error to post product",
            error: err.message
        });
    }
};

const getCart = async (req, res) => {
    try {
        const show = await CartModel.find().sort({ _id: -1 });

        return res.status(200).send({
            data: show
        });
    }
    catch (err) {
        console.error("Cart GET error:", err);
        return res.status(500).send({
            message: "Error in retrieving products"
        });
    }
};

const deleteCart = async (req, res) => {
    try {
        const id = req.params.id;

        const deleted = await CartModel.findByIdAndDelete(id);

        if (!deleted) {
            return res.status(404).send({
                message: "Cart product not found"
            });
        }

        return res.status(200).send({
            message: "Product deleted successfully"
        });
    }
    catch (err) {
        console.error("Cart DELETE error:", err);
        return res.status(500).send({
            message: "Error in deleting data"
        });
    }
};

module.exports = { postCart, deleteCart, getCart };
