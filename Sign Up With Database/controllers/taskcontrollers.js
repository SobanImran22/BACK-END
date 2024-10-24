const UserModel = require('../models/taskModels');
const bcrypt = require('bcrypt');

// Signup for user
const signupuser = async (req, res) => {
    const { firstName, lastName, email, password } = req.body;

    if (!firstName || !lastName || !email || !password) {
        return res.status(400).json({ msg: "Please enter all fields" });
    }

    try {
        const existingUser = await UserModel.findOne({ email: email.toLowerCase() });
        if (existingUser) {
            return res.status(400).json({ msg: "Email already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await UserModel.create({
            firstName,
            lastName,
            email: email.toLowerCase(),
            password: hashedPassword
        });

        res.status(201).json({ msg: 'New user created successfully' });
    } catch (error) {
        res.status(500).json({ msg: 'Error is coming from server side' });
    }
};

// Get all users
const getAllUsers = async (req, res) => {
    try {
        const allUsers = await UserModel.find({});
        res.status(200).json(allUsers);
    } catch (error) {
        res.status(500).json({ msg: 'Error getting users' });
    }
};

module.exports = {
    signupuser,
    getAllUsers
};