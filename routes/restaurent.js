
const Restaurant = require("../models/Restaurent")
const router = require("express").Router()
// create a new restaurant
router.post('/', async (req, res) => {
    const restaurant = new Restaurant(req.body);
    try {
        await restaurant.save();
        res.json(restaurant);
    }
    catch (err) {
        res.status(501).json(err);
    }
});
// GET all restaurants
router.get('/', async (req, res) => {
    try {
        const restaurants = await Restaurant.find();
        res.status(200).json(restaurants);
    }
    catch (err) {
        res.status(501).json(err);
    }
});

// GET a specific restaurant by ID
router.get('/find/:id', async (req, res) => {
    try {
        const restaurant = await Restaurant.findById(req.params.id);
        res.status(200).json(restaurant);
    } catch (err) {
        res.status(501).json(err);
    }
});
//  update a restaurant by ID
router.put('/:id', async (req, res) => {
    try {
        const restaurant = await Restaurant.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(restaurant);
    } catch (err) {
        res.status(501).json(err);
    }
});
// delete a restaurant
router.delete('/:id', async (req, res) => {
    try {
        await Restaurant.findByIdAndDelete(req.params.id);
        res.status(200).json("Deleted succesfully");
    } catch (err) {
        res.status(501).json(err);
    }
});
module.exports = router
