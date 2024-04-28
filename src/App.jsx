import { useState } from 'react'
import { useRef } from 'react'
import './App.css'
import { Tarefa } from './components/Tarefa';

export function App() {

  const inputRef = useRef(null)
  const botaoRef = useRef(null)
  const [tarefas, setTarefas] = useState([])
  const [estadobotao, setEstadobotao] = useState('disabled')

  function handleAddTarefa() {


    const newTarefa = {
      id: tarefas.length + 1,
      title: inputRef.current.value,
      isCompleted: false
    }

    setTarefas([...tarefas, newTarefa]);

    inputRef.current.value="";

  }

 
  

  return (
    <>

      <h1>Lista de tarefas</h1>

      <div className="card">

        <input 
          placeholder='Nome da tarefa' 
          ref={inputRef} 
          type="text">
        </input>
        
        <button onClick={handleAddTarefa} ref={botaoRef}>Adicionar</button>

        {tarefas.length>0 && tarefas.map((item) => (
          <Tarefa key={item.id} tarefa={item} />
        ))}

        {!tarefas.length && <p>Nenhuma tarefa ainda... </p>}
        
      </div>
      
    </>
  )
}

export default App
