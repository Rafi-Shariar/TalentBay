import axios from "axios";
import React from "react";

const TaskDetailsPage = async ({ params }) => {
  const p = await params;
  const res = await axios.get(`http://localhost:3000/api/alltasks/${p.id}`);
  const task = res.data;

  const { taskTitle, category, description, deadline, budget,userName } = task || {};

  return (
    <div className="mt-16 flex flex-col lg:flex-row p-2">
      <section className="w-full lg:w-2/3 bg-white p-8 rounded-2xl  border border-sky-100 space-y-6">

        <h1 className="text-4xl font-bold text-sky-800">{taskTitle}</h1>

        <div className="flex flex-wrap gap-4">
          <span className="inline-block bg-sky-100 text-sky-700 text-lg font-medium px-4 py-1 rounded-full">
             Category: {category}
          </span>
          <span className="inline-block bg-green-100 text-green-700 text-lg font-semibold px-4 py-1 rounded-full">
             Budget: ${budget}
          </span>
          <span className="inline-block bg-red-100 text-red-700 text-lg font-medium px-4 py-1 rounded-full">
             Deadline: {deadline}
          </span>
        </div>


        <hr className="border-t border-gray-200" />


        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
             Task Description
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg">{description}</p>
        </div>

         <hr className="border-t border-gray-200" />

        <div className="flex flex-col md:flex-row justify-between text-lg text-gray-500">
            <h1><strong>Posted By:</strong> {userName}</h1>
            <h1><strong>Posted On:</strong> {task?.postedOn || " 7 August 2025"}</h1>
        </div>

      </section>

      {/* <section className="w-1/3">Suggestion</section> */}
    </div>
  );
};

export default TaskDetailsPage;
