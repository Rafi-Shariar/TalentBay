"use server";

import dbConnect, { collectionNames } from "@/lib/dbConnect";
import bcrypt from 'bcrypt';

export const loginUser = async (payload) =>{
    const {email, password} = payload;

    const userCollection = dbConnect(collectionNames.userCollection);
    const user = await userCollection.findOne({email});

    if(user){
        const isPasswordOk = bcrypt.compare(user.password, password);
        if(isPasswordOk) return user;

    }

    return null
}