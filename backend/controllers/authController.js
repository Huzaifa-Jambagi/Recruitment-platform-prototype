import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";

export const signUp = async (req, res) => {

    try {
        const { email, password, profile } = req.body;

        if (!email || !password || !profile?.fullName) {
            return res.status(400).json({ error: "Email ,password and fullname required" });
        }

        const existing = await User.findOne({ email });

        if (existing) {
            return res.status(400).json({ error: "User  with this email already exists" });
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
        return res.status(500).json({ error: "Server error" });
    }

}

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ error: "Email and password required" });
        }

        const user = await User.findOne({email});
        if (!user) {
            return res.status(401).json({ error: "Email doesnt exist" }); 
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ error: "invalid password" });// For security: don't reveal whether email or password is wrong (its a prototype)
        }

        user.lastLogin = new Date();
        await user.save();

        const payload = {
            id: user._id.toString(),
            email: user.email,
            profile: user.profile
        }
        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "2hrs" })

        return res.json({
            token,
            user: { id: user._id, email: user.email, profile: user.profile }
        });

    } catch (err) {
        console.error("login error:", err);
        return res.status(500).json({ error: "Server error" });
    }

}