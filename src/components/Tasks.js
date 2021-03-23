import Task from './Task'

const Tasks = ({tarefas}) => {   
    return (
        <>
        { tarefas.map((tarefa) => (
            <Task key={tarefa.id} tarefa={tarefa} />
        )) }
        </>
    )
}

export default Tasks