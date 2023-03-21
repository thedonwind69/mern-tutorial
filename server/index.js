// here is where we start every DB and API set up

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const UserModel = require('./models/Users');
const cors = require('cors');

const connectUrl1 = "mongodb+srv://user123:Iseedeadpeople69@cluster0.1cdfo5h.mongodb.net/merntutorial?retryWrites=true&w=majority"

const connectUrl = "mongodb+srv://user123:Iseedeadpeople69@cluster0.1cdfo5h.mongodb.net/test"

mongoose.connect("mongodb+srv://user123:Iseedeadpeople69@cluster0.1cdfo5h.mongodb.net/merntutorial?retryWrites=true&w=majority");

app.use(express.json())
app.use(cors());


app.get("/getUsers", async (req, res) => {
    const allUsers = await UserModel.find();
    res.status(200).send({
        status: "success",
        data: allUsers
    })


})

app.post('/createUser', async (req, res) => {
    const user = req.body;
    const newUser = new UserModel(user);
    await newUser.save();

    res.json(user);
})

app.listen(3001, () => {
    console.log("sex, server is runnin bitch")
})

