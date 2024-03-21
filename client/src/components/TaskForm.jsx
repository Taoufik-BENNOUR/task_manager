import React, { useState } from 'react'
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
const TaskForm = () => {
  const [taskData, setTaskData] = useState({
    name:"",
    completed:false
  });

    const addTask = async() =>{
      if(taskData.name==="") return toast.error("Input field cannot be empty",
      {autoClose: 2000,
      pauseOnHover:false})
      try {
        const response =await axios.post("/api/tasks",taskData);
         toast.success(response.data.msg);
      } catch (error) {
      console.log(error);
    }        
    }
    const handleSubmit = async(e) =>{
        e.preventDefault();
       await addTask();
        // setTaskName("");
    }
    const handleInputChange = (e) =>{
      setTaskData(prevState => ({...prevState,[e.target.name]: e.target.value
    }));
;
    }
  return (
    <form className='task-form' onClick={handleSubmit}>
        <input type="text" placeholder='Add a task' 
        name="name"
        // value={taskData.name}
        onChange={handleInputChange} />
        <button type='submit'>Add</button>
        <ToastContainer />
    </form>
  )
}

export default TaskForm