import express from 'express';
import { login, signUp } from '../controllers/authController';
import auth from '../middlewares/authMiddleware';

const router=express.Router();

router.post('/signup',signUp)
router.post('/login',login);
router.get("/user", auth, getProfile);
export default router;
