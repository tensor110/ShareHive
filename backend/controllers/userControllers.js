import User from "../models/User.js"
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

export const registerUser = async (req,res,next)=>{
    try{
        const {username,email,password} = req.body;
        if(!username || !email || !password){
            return res.status(400).json({message: "Please fill all fields"}); 
        }
        
        //checks user exists or not
        let user = await User.findOne({email});
        if(user){
            return res.status(400).json({message:"User already registered"})
        }
           
        //user create
        const userModel = new User({username, email, password})
        userModel.password = await bcrypt.hash(password, 10)
        await userModel.save();
        res.status(201)
            .json({
                message: 'Signup Successfully',
                success: true
            })
        // return res.status(201).json({
        //     _id: user._id,
        //     avatar: user.avatar,
        //     username: user.name,
        //     email: user.email,
        //     verified: user.verified,
        //     admin: user.admin,
        //     token: await user.generateJWT()
        // });

    }catch (error){
        // if (!res.headersSent) {
        //     next(error);
        // }
        res.status(500)
        .json({
            message: 'Internal server error',
            success: false
        })
    }
}

export const loginUser = async (req,res)=>{
    try{
        const {username, password} = req.body
        const user = await User.findOne({username})
        const errorMsg = 'Email or password wrong'
        if(!user){
            return res.status(403)
                .json({message: errorMsg, success: false})
        }
        const isPasswordEqual = await bcrypt.compare(password, user.password)
        if(!isPasswordEqual){
            return res.status(403)
                .json({message: errorMsg, success: false})
        }
        const jwtToken = jwt.sign(
            {username: user.username, _id: user._id},
            process.env.JWT_SECRET,
            {expiresIn: '10d'}
        )
        res.status(200)
            .json({
                message: 'Signin Successfully',
                success: true,
                jwtToken,
                username,
                email: user.email
            })
    }
    catch(err){
        res.status(500)
        .json({
            message: 'Internal server error',
            success: false
        })
    }
}