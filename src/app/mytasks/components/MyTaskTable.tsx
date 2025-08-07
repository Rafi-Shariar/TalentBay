import { tr } from "date-fns/locale";
import React from "react";
import DeleteButton from "./DeleteButton";

const MyTaskTable = ({ tasks }) => {
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Task Title</th>
              <th>Category</th>
              <th>Posted On</th>
              <th>Deadline</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {tasks.map((task, index) => (
              <tr key={task._id}>
                <td>{index + 1}</td>
                <td>{task.taskTitle}</td>
                <td>{task.category}</td>
                <td>{task.postedOn}</td>
                <td>{task.deadline}</td>
                <td>
                    <DeleteButton task={task}/>
                </td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyTaskTable;
