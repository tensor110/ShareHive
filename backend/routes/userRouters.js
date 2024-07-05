import express from 'express'
import  {registerUser} from '../controllers/userControllers.js';

const userRouters = express.Router();

userRouters.post('/register',registerUser);

export default userRouters;