import React from 'react'
import { toast } from 'react-toastify';
import axios from 'axios'
import './addModal.css'

function AddModal(props) {
    const [nome, setNome] = React.useState("Estrutura de Dados")
    const [codigo, setCodigo] = React.useState("ES001")
    const [cargaHoraria, setCargaHoraria] = React.useState(4)

    const createDiscipline = () => {
        
        const params = {
            nome, codigo, cargaHoraria
        }
        let id = toast.loading("Aguarde...")
        axios.post('/disciplinas', params)
        .then(res => {
            props.updateList()
            toast.update(id, {render: "Adicionado", type: "success", isLoading: false, autoClose: 3000})
            
            props.toggleAddModal()
            setCargaHoraria(0)
            setCodigo("")
            setNome("")
        })
        .catch(err => toast.update(id, {render: "Algo deu errado", type: "error", isLoading: false, autoClose: 3000}))
    }

    return (
        <div className={"addModal__container" + (!props.showAddModal ? " hide" : "")}>
            <div className="addModal__box">
                <div className="addModal__header">
                    <h3>Adicionar Disciplina</h3>
                    <button onClick={props.toggleAddModal} className="close">X</button>
                </div>
                <div className="input-wrapper input-wrapper--code">
                    Código 
                    <input 
                        value={codigo}
                        onChange={e => setCodigo(e.target.value)}
                        placeholder="Código da turma" 
                        className="addModal__input code" 
                        type="text" />
                </div>
                <div className="input-wrapper input-wrapper--name">
                    Nome 
                    <input 
                        value={nome}
                        onChange={e => setNome(e.target.value)}
                        placeholder="Nome da turma" 
                        className="addModal__input name" 
                        type="text" />
                </div>
                <div className="input-wrapper input-wrapper--ch">
                    Carga Horária 
                    <input 
                        value={cargaHoraria} 
                        onChange={(event) => setCargaHoraria(event.target.value.replace(/\D/,''))} 
                        className="addModal__input ch" 
                        type="number" />
                </div>

                <button onClick={createDiscipline} className="addModal__btn">Adicionar Disciplina</button>
            </div>
        </div>
    )
}

export default AddModal