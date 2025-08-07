"use server"

import dbConnect, { collectionNames } from "@/lib/dbConnect"
import bcrypt from 'bcrypt';


export const registerUser = async(payload) => {

    const userCollection = dbConnect(collectionNames.userCollection);
    const user = await userCollection.findOne( {email: payload.email});

    if(!user){
        const hashedPassword = await bcrypt.hash(payload.password, 10);
        payload.password = hashedPassword;
        const result = await userCollection.insertOne(payload);
        
        if(result.insertedId){
            return {success : true};
        }
        else return {success : false, message: "something went wrong"};
       
    }

    return { success : false, message: "User already exists"};

}