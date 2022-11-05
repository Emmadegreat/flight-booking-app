const { Users } = require("../model/user");

const { v4: uuid } = require("uuid");
const { rest } = require("lodash");

//get all flight
exports.getUsers = async(req, res) =>{
    try {
        const users = Users;
        res.status(200).json({
            message: `Alvailable booked flights`,
            users :users
        });
    } catch (err) {
        res.status(500).json({ message: err });
    }
}

//get a single flight
exports.getSingleUser = async(req, res) => {
    try {
        let id = req.params.id;
        const user = Users.find((user) => user.id === id);
        res.status(200).json({
            message: `user found`,
            user,

        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

//create/add new flight
exports.createUser = async (req, res) => {
    try {
        const {title, time, price} = await req.body;

        const newUser = {
            id: uuid(),
            title,
            time:new Date().toLocaleTimeString(),
            price,
            date:new Date().toLocaleDateString(),
        };

        Users.push(newUser);

        res.status(201).json({
            message: "user created",
            newUser,
        });
    } catch (err) {
        res.status(500).json({message: err.message});
    }
}

//update/edit flight

exports.updateUser = async (req, res) => {
    try {
        let id = req.params.id;
        const user = Users.find((user) => user.id === id);
        const { title, price } = await req.body;
        user.title = title;
        user.price = price;

        res.status(200).json({
            message: `user updated`,
            user,
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

//deleting a flight
exports.deleteUser = async (req, res) => {
    try {
        let id = req.params.id;
        const user = Users.find((user) => user.id === id);
        Users.splice(Users.indexOf(user), 1);

        res.status(200).json({
            message: `user deleted`,
            user,
        });

    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

