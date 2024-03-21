import {FaCheckDouble, FaEdit, FaRegTrashAlt} from "react-icons/fa"
const Task = (props) => {
  return (
    <div className='task'>
        <p>
          <b>{props.index + 1}.</b>
          {props.name}
        </p>
        <div className="task-icons">
          <FaCheckDouble color="green"/>
          <FaEdit color="purple" onClick={()=>props.getTask(props)} />
          <FaRegTrashAlt color="red" onClick={()=>props.deleteTask(props.id)} />
        </div>
    </div>
  )
}

export default Task