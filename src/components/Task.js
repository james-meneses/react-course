import React from 'react'

const Task = ({tarefa}) => {
    return (
        <div className="tarefa">
            <h3>{tarefa.titulo}</h3>
            <p>{tarefa.data}</p>
        </div>
    )
}

export default Task
