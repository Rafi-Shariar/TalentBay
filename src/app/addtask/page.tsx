import React from 'react';
import AddTaskForm from './components/AddTaskForm';

const AddTaskPage = () => {
    return (
        <div className='p-2'>
            <section className='mt-16'>
                <h1 className='text-3xl font-semibold'>Post a New Task</h1>
                <p className='text-lg text-gray-600 mt-2'>Create a new freelance task by providing essential details such as the title, category, budget, deadline, and a clear description. This will help skilled freelancers understand your requirements and apply accordingly. Be as specific as possible to get the best results.</p>
            </section>

            <section className='mt-16'>
                <AddTaskForm/>
            </section>
        </div>
    );
};

export default AddTaskPage;