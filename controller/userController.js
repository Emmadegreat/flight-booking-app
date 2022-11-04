const { Users } = require("../model/user");

const { v4: uuid } = require("uuid");

//get all users
exports.getUsers = async(req, res) =>{
    try {
        const users = Users;
        res.status(200).json({
            message: `all users`,
            users :users
        });
    } catch (err) {
        res.status(500).json({ message: err });
    }
}

//get a single user
exports.getSingleUser = async(req, res) => {
    try {
        let id = req.params.id;
        const user = Users.find((user) => user.id === id);
        res.status(200).json({
            message: `user found`,
            user,

        });
    } catch (err) {

    }
}

//create new user
exports.createUser = async (req, res) => {
    try {
        const {title, time, price, date} = await req.body;

        const newUser = {
            id: uuid(),
            title,
            time,
            price,
            date,
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

//update/edit user

exports.updateUser = async (req, res) => {
    try {
        let id = req.params.id;
        const user = Users.find((user) => user.id === id);
        const { title, time, price, date } = await req.body;
        user.title = title;
        user.time = time;
        user.price = price;
        user.date = date
        res.status(200).json({
            message: `user updated`,
            user,
        });
    } catch (err) {
        res.status(500).json({ message: message });
    }
}