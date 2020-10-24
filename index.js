const express = require("express");
const mongoose = require("mongoose");
const requireDir = require("require-dir");
const cors = require("cors");

// Starting app
const app = express();

// Allow the use of json files
app.use(express.json());
app.use(cors);

// Connect to DB
mongoose.connect("mongodb://localhost:27017/nodeapi", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
});

requireDir('./src/models');

app.use('/api', require('./src/routes'));

app.listen(9000);
