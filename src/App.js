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

  return (
    <div className="container">
      <Header  />
      <Tasks tarefas={tarefas} />
    </div>
  );
}

export default App;
