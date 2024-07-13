import {Schema,model} from "mongoose";

const UserSchema = new Schema({
    // avatar: {type: String, default: ""},
    username: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    // verified: {type: Boolean, default: false},
    // varificationCode: {type: String, required:false},
    // admin: {type: Boolean, default: false}
},
//  {timestamps: true}
);


const User = model("User", UserSchema);

export default User;