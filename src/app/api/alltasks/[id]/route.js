import dbConnect, { collectionNames } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export const GET = async (req, {params}) => {

    try{
        const {id} = await params;

        const collection = dbConnect(collectionNames.tasksCollection);
        const data = await collection.findOne({_id: new ObjectId(id)});

        return NextResponse.json(data);
    }
    catch(error){
        console.log("API Error", error);
        NextResponse.json( {error: "Internal Server Error"}, {status:500});
        

    }
}

export const DELETE = async( req, {params}) => {

    const p = await params;
    const tasksCollection = dbConnect(collectionNames.tasksCollection);
    const result = await tasksCollection.deleteOne({_id : new ObjectId(p.id)});
    revalidatePath('/mytasks');
    return NextResponse.json(result);
}