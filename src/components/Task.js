import React from 'react'
import { FaTimes } from 'react-icons/fa'

const Task = ({tarefa, onDelete}) => {
    return (
        <div className="tarefa">
            <h3>{tarefa.titulo}</h3>
            <p>{tarefa.data} <FaTimes style={{color:'red', float:'right'}} onClick={() => onDelete(tarefa.id)} /> </p>
        </div>
    )
}

export default Task
