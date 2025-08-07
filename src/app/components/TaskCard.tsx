import Link from "next/link";
import React from "react";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
const TaskCard = ({ task }) => {
  const {_id, taskTitle, category, description, deadline, budget } = task;

  return (
   <Link href={`/alltasks/${_id}`}>
     <div className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition-shadow duration-300 p-6 flex flex-col justify-between h-full border border-sky-300 hover:bg-green-50">
      {/* Title */}
      <h2 className="text-2xl font-semibold text-sky-700 mb-2">{taskTitle}</h2>

      <div className="flex-grow" />

      <div className="flex flex-col md:flex-row justify-between items-center mb-4">
        <span className="text-sm font-medium bg-sky-100 text-sky-700 px-3 py-1 rounded-full flex items-center gap-1">
          <BiSolidCategoryAlt />{category}
        </span>
        <span className="text-base font-semibold text-green-600 bg-green-100 px-3 py-1 rounded-full mt-3 md:mt-0 flex items-center gap-1">
          <RiMoneyDollarCircleFill /> {budget}
        </span>
      </div>


      <div className="border-t pt-3 text-gray-500">
        <strong className="text-gray-700">Deadline:</strong> {deadline}
      </div>
    </div>
   </Link>
  );
};

export default TaskCard;
