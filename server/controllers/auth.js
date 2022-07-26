import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import User from '../models/UserSchema.js';
import bcrypt from 'bcrypt';

export const signinUser = async (req, res) => {
    const { email, password } = req.body;

    try {

        const userExists = await User.findOne({ email });

        if (!userExists) res.status(404).json({ message: "User doesn't exist." });
        else {
            const checkPassword = await bcrypt.compare(password, userExists.password);

            if (!checkPassword) res.status(400).json({ message: "incorrect login credentials" });
            else {
                const token = jwt.sign({ email: userExists.email, id: userExists._id }, 'test', { expiresIn: "1h" });

                res.status(200).json({ result: userExists, token });
            }

        }


    } catch (error) {
        res.status(500).json({ message: 'Something went wrong.' });
        console.log(error);
    }

}

export const signupUser = async (req, res) => {

    const { firstName, lastName, email, password, confirmPassword } = req.body;

    try {

        const userExists = await User.findOne({ email });

        if (userExists) res.status(400).json({ message: "User already exists." });
        else if (password !== confirmPassword) res.status(400).json({ message: "Password doesn't match" });
        else {
            const hashedPassword = await bcrypt.hash(password, 12);

            const newUser = await User.create({ name: `${firstName} ${lastName}`, email, password: hashedPassword });

            const token = jwt.sign({ email: newUser.email, id: newUser._id }, 'test', { expiresIn: "1h" });

            res.status(200).json({ result: newUser, token });
        }


    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
        console.log(error);
    }

}
