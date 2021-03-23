import Task from './Task'

const Tasks = ({tarefas, onDelete, onToggle}) => {   
    return (
        <>
        { tarefas.map((tarefa) => (
            <Task key={tarefa.id} tarefa={tarefa} onDelete={onDelete} onToggle={onToggle} />
        )) }
        </>
    )
}

export default Tasks