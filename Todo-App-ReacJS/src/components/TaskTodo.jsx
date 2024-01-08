



import React from 'react'
import TodoList from './TodoList';
import TaskFinish from './TaskFinish';

import "../components/TaskTodo.css"

const TaskTodo = ({ tasks, setTasks, }) => {


    const handleDelete = (id) => {
        setTasks(tasks.filter(task => task.id !== id))
        console.log(id);
    }


    const handleClearAll = () => {
        setTasks([])
    }



    return (
        <div className="taskTodo">

            <div className="taskTodoHead">

                <span>
                    <span className='title-todolist'>Todo List</span>
                    <span className='count-todo'>0</span>
                </span>

                <button onClick={handleClearAll} className='clearAll'>Clear All list</button>

            </div>

            <ul>
                {
                    tasks.map((task) => (
                        <TodoList key={task.id} task={task} handleDelete={handleDelete} />
                    ))}
            </ul>
        </div>

    )
}

export default TaskTodo
