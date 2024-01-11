import React, { useEffect } from 'react'


//import css
import "../components/TaskFinish.css"


//import icon
import { RiDeleteBinFill } from "react-icons/ri";

const TaskFinish = ({ finishedTasks, setFinishedTasks }) => {


    const handleClearAllFinished = () => {
        setFinishedTasks([]);
    };

    useEffect(() => {
        // Update local storage when finishedTasks change
        localStorage.setItem('finishedTasks', JSON.stringify(finishedTasks));
    }, [finishedTasks]);



    return (
        <div className="taskFinish">
            <div className="taskFinishHead">
                <span>
                    <span className='title-finishlist'>Finish List</span>
                    <span className='count-finish'>{finishedTasks ? finishedTasks.length : 0}</span>
                </span>
                <button onClick={handleClearAllFinished} className='clearAll'>Clear All list <RiDeleteBinFill className='clearAll-logo' /></button>
            </div>

            <ul>
                {finishedTasks.map(finishedTask => (
                    <li key={finishedTask.id} className='list-finish'>
                        <div className='content-finishList'>
                            <p className="finish-name">{finishedTask.name}</p>
                            <p className="finish-time">{finishedTask.time}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TaskFinish
