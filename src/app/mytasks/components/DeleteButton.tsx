"use client";
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React from 'react';
import toast from 'react-hot-toast';
import { MdDelete } from "react-icons/md";
const DeleteButton = ({task}) => {

    const {_id} = task;
    const router = useRouter();

    const handleDelete = async (id) => {

        const res = await axios.delete(`http://localhost:3000/api/alltasks/${id}`)
        
        if(res?.data?.acknowledged){
            toast.success("Deleted Task");
            router.refresh();
        }
        else{
            toast.error("Something went wrong!");
        }
        
        
    }

    return (
        <button onClick={()=> handleDelete(_id)} className='btn bg-red-600 text-white rounded-lg'><MdDelete />Delete Task</button>
    );
};

export default DeleteButton;