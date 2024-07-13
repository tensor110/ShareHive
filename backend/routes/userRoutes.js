import express from 'express';
import { loginUser, registerUser } from '../controllers/userControllers.js';
import { signinValidation, signupValidation } from '../middleware/AuthValidation.js';

const userRoutes = express.Router();

userRoutes.post('/register', signupValidation, registerUser);
userRoutes.post('/login', signinValidation, loginUser);

export default userRoutes;
