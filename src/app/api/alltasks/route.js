import dbConnect, { collectionNames } from "@/lib/dbConnect";
import { NextResponse } from "next/server";
export const POST = async(req) => {

    const body = await req.json();
    const taskCollection = dbConnect(collectionNames.tasksCollection);
    const result = await taskCollection.insertOne(body);

    return NextResponse.json(result);

}