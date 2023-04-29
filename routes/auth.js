const router = require("express").Router()
const User = require("../models/User")

// Register User

router.post("/register", async (req, res) => {
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
    })
    try {
        const savedUser = await newUser.save()
        res.status(201).json(savedUser)
    } catch (err) {
        res.status(500).json(err)
    }
})


router.post('/login', (req, res) => {
    // const { username, password } = req.body;
    const username = req.body.username;
    const password = req.body.password;
    // Check if the username and password are correct
    if (username === 'admin' && password === 'password') {
        res.status(200).json('Login successful');
    } else {
        res.status(401).json('Invalid username or password');
    }
});


module.exports = router