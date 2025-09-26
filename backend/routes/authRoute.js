import express from 'express';
import { getProfile, login, signUp } from '../controllers/authController.js';
import auth from '../middlewares/authMiddleware.js';

const router=express.Router();

router.post('/signup',signUp)
router.post('/login',login);
router.get("/user", auth, getProfile);
export default router;
