import User from "../models/User.js"

export const  registerUser = async (req,res,next)=>{
    try{
        console.log("HEllo")
        const {name,email,password, confirmPassword} = req.body;
        if(!name || !email || !password || !confirmPassword){
            return res.status(400).json({message: "Please fill all fields"}); 
        }
        // Check if password and confirmPassword match or not
        if (password !== confirmPassword) {
            return res.status(400).json({ message: "Passwords do not match" });
        }
        //checks user exists or not
        let user = await User.findOne({email});
        if(user){
            // return res.status(400).json({message:"User already registered"})
            throw new Error("User already registered")
        }
           
        //user create
        user = await User.create({
            name,
            email,
            password
        });
        return res.status(201).json({
            _id: user._id,
            avatar: user.avatar,
            name: user.name,
            email: user.email,
            verified: user.verified,
            admin: user.admin,
            token: await user.generateJWT()
        });

    }catch (error){
        if (!res.headersSent) {
            next(error);
        }
    }
}

