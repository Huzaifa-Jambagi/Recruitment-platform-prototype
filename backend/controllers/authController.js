import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "../models/userModel.js";

const signUp = async (req, res) => {

    try {
        const { email, password, profile } = req.body;

        if (!email || !password || !profile?.fullName) {
            return res.status(400).json({ message: "Email ,password and fullname required" });
        }

        const existing = await User.findOne({ email });

        if (existing) {
            return res.status(400).json({ message: "User  with this email already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        const user = await User.create({
            email,
            password: hashedPassword,
            profile
        });

        return res.status(201).json({
            message: "user created successfully",
            user: { id: user._id, email: user.email, profile: user.profile }
        })
    } catch (err) {
        console.error("register error:", err);
        return res.status(500).json({ message: "Server error" });
    }

}

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ message: "Email and password required" });
        }

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: "Email doesnt exist" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: "invalid password or email" });
        }

        user.lastLogin = new Date();
        await user.save();

        const payload = {id: user._id.toString() }
        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "2hrs" })

        return res.json({token});

    } catch (err) {
        console.error("login error:", err);
        return res.status(500).json({ message: "Server error" });
    }
}

 const getProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user.id);
        if (!user) return res.status(404).json({ message: "User not found" });
        return res.json({ user });
    } catch (err) {
        console.error("getProfile error:", err);
        return res.status(500).json({ message: "Server error" });
    }
}

export { getProfile, login, signUp };

