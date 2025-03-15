require('dotenv').config();
const express = require("express");
const dbConnect = require("./config/dbConnection");
const path = require('path');

const app = express();
const port = process.env.PORT;

dbConnect();
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static(path.join(__dirname, 'uploads')));

// Routes
app.use("/", require("./routes/index.routes"));


app.listen(port, (err) => {
    if (err) {
        console.error("Server Error:", err);
    } else {
        console.log(`Server is running on http://localhost:${port}`);
    }
});
