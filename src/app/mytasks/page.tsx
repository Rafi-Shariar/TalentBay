import dbConnect, { collectionNames } from "@/lib/dbConnect";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { getServerSession } from 'next-auth';
import React from 'react';
import MyTaskTable from "./components/MyTaskTable";

const MyTasksPage = async () => {

    const session = await getServerSession(authOptions);
    const tasks = await dbConnect(collectionNames.tasksCollection).find({userEmail : session?.user?.email}).toArray();

     

    return (
        <div className="p-2">
             <section className='mt-16 text-center'>
                <h1 className='text-3xl font-semibold'>My Posted Tasks</h1>
                <p className='text-lg text-gray-600 mt-2 max-w-5xl mx-auto'>Manage all the tasks you’ve created in one place. Track progress, update details, or remove tasks as needed. Stay organized and in control of your freelance projects.</p>
            </section>

            <section>
                <MyTaskTable tasks={tasks}/>

            </section>
        </div>
    );
};

export default MyTasksPage;