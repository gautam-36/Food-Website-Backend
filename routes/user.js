const User = require("../models/User")
const router = require("express").Router()
// UPDATE 
router.put("/:id", async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, {
            $set: req.body,
        }, { new: true }
        )
        res.status(200).json(updatedUser)
    }
    catch (err) {
        res.status(500).json(err)
    }
})

// DELETE 
router.delete("/:id", async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id)
        res.status(200).json("User hasbeen Deleted...")
    }
    catch (err) {
        res.status(500).json(err)
    }
})
// GET USER 
router.get("/find/:id", async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        res.status(200).json(user)
    }
    catch (err) {
        res.status(500).json(err)
    }
})
// GET ALL USERS
router.get("/", async (req, res) => {
    try {
        const users = await User.find()
        res.status(200).json(users)
    }
    catch (err) {
        res.status(500).json(err)
    }
})



module.exports = router