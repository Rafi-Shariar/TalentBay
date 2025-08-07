import dbConnect, { collectionNames } from "@/lib/dbConnect";
import React from "react";
import TaskCard from "../components/TaskCard";
import TaskSkeleton from "../components/TaskSkeleton";

const page = async () => {

    const tasks = await dbConnect(collectionNames.tasksCollection).find({}).toArray();
  return (
    <div className="p-2">
      <section className="mt-16">
        <h1 className="text-3xl font-semibold">Browse All Freelance Tasks</h1>
        <p className="text-lg text-gray-500">
          Discover a wide range of freelance tasks tailored to your skills.
          Filter, explore, and find the perfect opportunity to start working
          today.
        </p>
      </section>


        <section className="mt-10 bg-sky-50 p-6 md:p-10 rounded-2xl border border-sky-200">
        {tasks ? (
          <>
            <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {tasks.map((task) => {
                return <TaskCard key={task._id.toString()} task={task} />;
              })}
            </section>
          </>
        ) : (
          <>
            {" "}
            <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <TaskSkeleton />
              <TaskSkeleton />
              <TaskSkeleton />
              <TaskSkeleton />
              <TaskSkeleton />
              <TaskSkeleton />
            </section>
          </>
        )}
      </section>
 


    </div>
  );
};

export default page;
