import React from 'react'
import {useState, useEffect} from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App() {
  const [tarefas, setTarefas] = useState([])

  const [showAddTask, setShowAddTask] = useState(false)

  useEffect (() => {
    const getTasks = async () => {
      const tarefasDoBanco = await fetchTasks()
      setTarefas(tarefasDoBanco)
    }

    getTasks()
  }, [])

  // buscar tarefas no banco
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()

    return data
  }

  // buscar uma tarefa específica
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json()

    return data
  }

  // Atualização do Lembrete no BD
  const toggleReminder = async (id) => {
    const tarefaAlvo = await fetchTask(id)
    const updTarefa = {...tarefaAlvo, lembrete: !tarefaAlvo.lembrete}

    const res = await fetch (`http://localhost:5000/tasks/${id}`,{
                  method: 'PUT',
                  headers: { 'Content-type': 'application/json'},
                  body: JSON.stringify(updTarefa)
    })

    const dados = await res.json()
    setTarefas( 
      tarefas.map((tarefa) => 
        tarefa.id === id ? 
        { ...tarefa, lembrete: dados.lembrete } : tarefa 
        )
      )
  }

  // remover tarefa
  const onDelete = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, 
                {'method': 'DELETE'})

    console.log('removendo a tarefa ', tarefas[id-1])
    setTarefas(tarefas.filter((tarefa) => tarefa.id !== id))
  }

  // ativar/desativar lembrete
  const onToggle = (id) => {
    console.log('lembrete ', id)
    setTarefas( tarefas.map((tarefa) => tarefa.id === id ? { ...tarefa, lembrete: !tarefa.lembrete } : tarefa ))
  }

  // adicionar tarefa
  const addTask = async (tarefa) => {
  
    const res = await fetch('http://localhost:5000/tasks', {
                            method: 'POST', 
                            headers: { 
                              'Content-type' : 'application/json'
                            },
                            body: JSON.stringify(tarefa)
                          })
    
    const data = await res.json()
    console.log('dado=>', data)
    setTarefas([...tarefas, data])
    // const id = Math.floor(Math.random() * 10000) + 1
    
    // const novaTarefa = {id, ...tarefa}

    // console.log('tarefa', tarefa, id)

    // setTarefas([...tarefas, novaTarefa])
  }

  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)}
              showAdd = {showAddTask} />
      {showAddTask && <AddTask onAdd={addTask}/>}
      { tarefas.length > 0 ? 
        (
        <Tasks tarefas={tarefas} onDelete={onDelete}
                                 onToggle={toggleReminder} />
        ) : (<p>Nenhuma tarefa disponível.</p>)
      }
      </div>
  );
}

export default App;
