import React from 'react'
import {useState} from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'

function App() {
  const [tarefas, setTarefas] = useState([
    {
        id: 1, 
        titulo: 'Correr 5km',
        data: '24 de Março às 06h',
        lembrete: true
    },
    {
        id: 2, 
        titulo: 'Meditar',
        data: '24 de Março às 08h',
        lembrete: true
    },
    {
        id: 3, 
        titulo: 'Ler',
        data: '24 de Março às 22h',
        lembrete: true
    }
]
)

  // remover tarefa
  const onDelete = (id) => {
    setTarefas(tarefas.filter((tarefa) => tarefa.id !== id))
  }

  // ativar/desativar lembrete
  const onToggle = (id) => {
    console.log('lembrete ', id)
    setTarefas( tarefas.map((tarefa) => tarefa.id === id ? { ...tarefa, lembrete: !tarefa.lembrete } : tarefa ))
  }

  return (
    <div className="container">
      <Header  />
      { tarefas.length > 0 ? 
        (
        <Tasks tarefas={tarefas} onDelete={onDelete}
                                 onToggle={onToggle} />
        ) : (<p>Nenhuma tarefa disponível.</p>)
      }
      </div>
  );
}

export default App;
