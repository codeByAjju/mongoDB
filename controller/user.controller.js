import { validationResult } from "express-validator";
import User from "../model/user.model.js";
import bcrypt from "bcryptjs";
import db from "../db/mongo.js";
export const signIn = async (request,response,next) => {
    try {
        let user = await User.findOne({email:request.body.email});
        if (user) {
            let status = await bcrypt.compare(request.body.password, user.password);
            if (status)
                return response.status(200).json({ message: "Sign in success", status: true });
            return response.status(400).json({ error: "Bad request", status: false });
        }
    }
    catch (err) {
        console.log(err);
        return response.status(500).json({ error: "Internal Server Error", status: false });
    }
}


export const signUp = async(request,response,next)=>{
    try{
        const errors= await validationResult(request);
        if(errors.isEmpty()){
            let saltKey = await bcrypt.genSalt(15);
            request.body.password = await bcrypt.hash(request.body.password, saltKey);
            let user = await User.create(request.body);
            return response.status(200).json({ user: user, status: true });    
        }
        else
             response.status(400).json({ error: "Bad request", messages: errors});
    }
    catch (err) {
        console.log(err);
        return response.status(500).json({ error: "Internal Server Error", status: false });
    }   
 }; 
