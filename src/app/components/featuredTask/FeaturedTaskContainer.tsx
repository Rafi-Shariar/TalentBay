import dbConnect, { collectionNames } from "@/lib/dbConnect";
import React from "react";
import TaskCard from "../TaskCard";

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
      <section className="grid grid-cols-1 md:grid-cols-3 mt-6 gap-10">
        {tasks.map((task) => {
          return <TaskCard key={task._id.toString()} task={task} />;
        })}
      </section>
    </div>
  );
};

export default FeaturedTaskContainer;
