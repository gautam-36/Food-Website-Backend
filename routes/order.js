const Order = require("../models/Order")

const router = require("express").Router()


// GET all orders
router.get('/', async (req, res) => {
    try {
        const orders = await Order.find();
        res.status(200).json(orders);
    }
    catch (err) {
        res.status(500).json(err);
    }
});

// GET a specific order by ID
router.get('/find/:id', async (req, res) => {
    try {
        const order = await Order.findById(req.params.id);
        res.status(200).json(order);
    } catch (err) {
        res.status(500).json(err);
    }
});

// POST a new order
router.post('/', async (req, res) => {
    const order = new Order(req.body);
    try {
        await order.save();
        res.status(200).json(order);
    } catch (err) {
        res.status(500).json(err);
    }
});

// PUT update an order by ID
router.put('/:id', async (req, res) => {
    try {
        const order = await Order.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(order);
    } catch (err) {
        res.status(500).json(err);
    }
});

// DELETE an order by ID
router.delete('/:id', async (req, res) => {
    try {
        await Order.findByIdAndDelete(req.params.id);
        res.status(200).json("deleted succesfully");
    }
    catch (err) {
        res.status(500).json(err);
    }
});


module.exports = router;
