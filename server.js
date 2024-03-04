const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

const schema= require("./models/names_schema");

app.use('/', express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const url = 'mongodb://127.0.0.1:27017/PersonalBudget';
let isConnected = false; // Flag to check if the database is connected

async function connectToDatabase() {
    if (!isConnected) {
        await mongoose.connect(url);
        console.log('Connected to the database');
        isConnected = true;
    }
}

app.get("/budget", async (req, res) => {
    try {
        await connectToDatabase();
        const data = await schema.find({});
        res.send(data);
    } catch (error) {
        console.error("Error handling the request:", error);
        res.status(500).send("Internal Server Error");
    }
});

app.post("/addNewBudget", async (req, res) => {
    try {
        await connectToDatabase();
        let newData = new schema(req.body);
        await newData.save();
        res.json(newData);
    } catch (error) {
        console.error("Error handling the request:", error);
        res.status(500).send("Internal Server Error");
    }
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});