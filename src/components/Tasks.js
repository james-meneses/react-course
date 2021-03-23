import Task from './Task'

const Tasks = ({tarefas, onDelete, onToggle}) => {   
    return (
        <>
        { tarefas.map((tarefa, index) => (
            <Task key={index} tarefa={tarefa} onDelete={onDelete} onToggle={onToggle} />
        )) }
        </>
    )
}

export default Tasks