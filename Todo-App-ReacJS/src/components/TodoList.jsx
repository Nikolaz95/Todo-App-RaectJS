import React from 'react'

import "../components/TodoList.css"

const TodoList = ({ task, handleDelete }) => {

    return (
        <div>
            <ul key={task.id}>
                <li>

                    <div className="content-todoList">
                        <p>{task.name}</p>
                        <span className="time-date">15:27:30  2024-01-08</span>
                    </div>

                    <div className="butons">

                        <button className="btnupd">Update</button>
                        <button className="btndone">Done</button>
                        <button onClick={() => handleDelete(task.id)} className="btndelete">Delete</button>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default TodoList
