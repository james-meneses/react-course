import React from 'react'
import { FaTimes } from 'react-icons/fa'

const Task = ({tarefa, onDelete, onToggle}) => {
    return (
        <div className={`tarefa ${tarefa.lembrete ? 'lembrete' : '' }`} onDoubleClick = {() => onToggle(tarefa.id)}>
            <h3>{tarefa.titulo}</h3>
            <p>{tarefa.data} <FaTimes style={{color:'red', float:'right'}} onClick={() => onDelete(tarefa.id)} /> </p>
        </div>
    )
}

export default Task
