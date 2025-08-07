import React from "react";

const TaskSkeleton = () => {
  return (
    <div>
      <div className="flex flex-col gap-4 p-6">
        <div className="skeleton h-4 w-full"></div>
        <div className="skeleton h-4 w-[76%]"></div>
        <div className="flex justify-between">
            <div className="skeleton h-4 w-[20%]"></div>
           <div className="skeleton h-4 w-[20%]"></div>
        </div>
        <div className="skeleton h-4 w-full"></div>
        <div className="skeleton h-4 w-full"></div>
      </div>
    </div>
  );
};

export default TaskSkeleton;
