"use client";

import React from "react";
import { useSession } from "next-auth/react";
import toast from "react-hot-toast";
import { format } from "date-fns";
import axios from "axios";
import { useRouter } from "next/navigation";
const categories = [
  "Web Development",
  "Graphic Design",
  "Content Writing",
  "Digital Marketing",
  "Mobile App Development",
  "Video Editing",
  "SEO Optimization",
  "UI/UX Design",
  "Translation",
  "Virtual Assistance",
  "Data Entry",
  "Social Media Management",
  "Customer Support",
  "Copywriting",
  "WordPress Development",
];

const AddTaskForm = () => {
  const { data: session } = useSession();
  const router = useRouter();

  const date = new Date();
  const formattedDate = format(date, "dd MMM yyyy");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const taskTitle = e.target.title.value;
    const category = e.target.category.value;
    const description = e.target.description.value;
    const budget = e.target.budget.value;
    const date = e.target.deadline.value;
    const deadline = format(date, "dd MMM yyyy");

    const payload = {
      taskTitle,
      category,
      description,
      deadline,
      budget,
      userEmail: session?.user?.email,
      userName: session?.user?.name,
      postedOn: formattedDate,
    };

    try {
        const res = await axios.post('http://localhost:3000/api/alltasks', payload);
        console.log(res.data);
        

        if(res?.data?.acknowledged){
          toast.success("Task added sucessfully!");
          router.push('/alltasks');

        }
        else{
          toast.error("something went wrong, Try Again");
        }
        
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong!");
    }
  };

  return (
    <div className="max-w-5xl mx-auto bg-white p-10 shadow-md rounded-xl border border-gray-100">
      <h2 className="text-2xl font-bold mb-6">Add New Task</h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Task Title */}
        <div>
          <label className="block font-medium mb-1">Task Title</label>
          <input
            type="text"
            name="title"
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Category */}
        <div>
          <label className="block font-medium mb-1">Category</label>
          <select
            name="category"
            className="select select-bordered w-full"
            required
          >
            <option value="" disabled>
              Select a category
            </option>
            {categories.map((cat, idx) => (
              <option key={idx} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        {/* Description */}
        <div>
          <label className="block font-medium mb-1">Task Description</label>
          <textarea
            name="description"
            rows={10}
            className="textarea textarea-bordered w-full"
            placeholder="Describe the task in detail"
            required
          />
        </div>

        {/* Deadline */}
        <div>
          <label className="block font-medium mb-1">Deadline</label>
          <input
            type="date"
            name="deadline"
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Budget */}
        <div>
          <label className="block font-medium mb-1">Budget (USD)</label>
          <input
            type="number"
            name="budget"
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Read Only Fields */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block font-medium mb-1">Your Name</label>
            <input
              type="text"
              value={session?.user?.name || ""}
              readOnly
              className="input input-bordered w-full bg-gray-100"
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Your Email</label>
            <input
              type="email"
              value={session?.user?.email || ""}
              readOnly
              className="input input-bordered w-full bg-gray-100"
            />
          </div>
        </div>

        {/* Submit Button */}
        <div>
          <button type="submit" className="btn btn-primary w-full">
            Add Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTaskForm;
