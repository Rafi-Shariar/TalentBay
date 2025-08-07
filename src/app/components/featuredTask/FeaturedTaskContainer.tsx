import dbConnect, { collectionNames } from "@/lib/dbConnect";
import React from "react";
import TaskCard from "../TaskCard";
import TaskSkeleton from "../TaskSkeleton";
import { GrLink } from "react-icons/gr";
import Link from "next/link";

const FeaturedTaskContainer = async () => {
  const tasks = await dbConnect(collectionNames.tasksCollection)
    .find({})
    .limit(6)
    .toArray();

  return (
    <div className="bg-sky-50 p-8 rounded-xl border border-sky-400">
      <h1 className="text-center text-2xl lg:text-4xl font-bold bg-gradient-to-r from-sky-500 to-green-600 text-transparent bg-clip-text mb-6">
        Find Tasks That Match Your Skills
      </h1>

      <section>
        {tasks ? (
          <>
            <section className="grid grid-cols-1 md:grid-cols-3 mt-6 gap-6">
              {tasks.map((task) => {
                return <TaskCard key={task._id.toString()} task={task} />;
              })}

             
            </section>
             <div className="flex justify-center mt-6">
                <Link href={'/alltasks'} className="btn btn-info text-white"><GrLink />Explore More Tasks</Link>
            </div>
          </>
        ) : (
          <>
            {" "}
            <section className="grid grid-cols-1 md:grid-cols-3 mt-6 gap-6">
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

export default FeaturedTaskContainer;
