import {useState} from 'react'

const AddTask = ({onAdd}) => {
    const [titulo, setTitulo] = useState('')
    const [data, setData] = useState('')
    const [lembrete, setLembrete] = useState(false)

    const onSubmit =  (ev) => {
        ev.preventDefault()

        // validar o titulo
        if (!titulo) {
            alert("Insira o nome da tarefa antes de salvar")
            return
        }

        // envia as informações adicionaas
        onAdd ({titulo, data, lembrete})
        
        // zerar o formulario
        setTitulo('')
        setData('')
        setLembrete(false)
    }

    return (
        <form onSubmit={onSubmit}
            className="add-form">
            <div className="form-control">
                <label>Tarefa</label>
                <input type='text' name="titulo" placeholder="Tarefa..." 
                        value={titulo}
                        onChange={(e) => setTitulo (e.target.value)} />
            </div>
            <div className="form-control">
                <label>Data</label>
                <input type='text' name="data" placeholder="dd/mm/aaaa"
                        value={data}
                        onChange={(e) => setData (e.target.value)} />
            </div>
            <div className="form-control form-control-check">
                <label>Lembrar?</label>
                <input type='checkbox' 
                        value={lembrete} name="lembrete"
                        checked = {lembrete}
                        onChange={ (e) => setLembrete (e.currentTarget.checked) } />
            </div>

            <input type="submit" value="Salvar Tarefa" className='btn btn-block' />
        </form>
    )
}

export default AddTask
