const express = require("express")
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require("cors");
const authRoute = require("./routes/auth.js")
const userRoute = require("./routes/user.js");
const restaurantRoute = require("./routes/restaurent.js");
const orderRoute = require("./routes/order.js");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());


// connnect to mongodb local host
mongoose.connect('mongodb://localhost/foodDb', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    family: 4,
}).then(() => {
    console.log("dataBase is Connected")
}).catch((err) => { console.log(err) })


// Routes
app.use(express.json())
app.use("/api/auth", authRoute);
app.use("/api/auth/user", userRoute);
app.use("/api/restaurent", restaurantRoute);
app.use("/api/order", orderRoute);



app.listen(3001, (req, res) => {
    console.log("server is running at port 3001")
})

