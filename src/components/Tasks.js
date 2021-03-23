import Task from './Task'

const Tasks = ({tarefas, onDelete}) => {   
    return (
        <>
        { tarefas.map((tarefa) => (
            <Task key={tarefa.id} tarefa={tarefa} onDelete={onDelete} />
        )) }
        </>
    )
}

export default Tasks