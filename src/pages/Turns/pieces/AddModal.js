import React from 'react'
import { toast } from 'react-toastify';
import axios from 'axios'
import Select from 'react-select'

import './addModal.css'

function AddModal(props) {
    const [nome, setNome] = React.useState("")
    const [horaInicio, setHoraInicio] = React.useState(0)
    const [horaTermino, setHoraTermino] = React.useState(0)

    const daysOptions = [
        { value: 'segunda', label: 'Segunda' },
        { value: 'terça', label: 'Terça' },
        { value: 'quarta', label: 'Quarta' },
        { value: 'quinta', label: 'Quinta' },
        { value: 'sexta', label: 'Sexta' },
        { value: 'sabado', label: 'Sabado' },
        { value: 'domingo', label: 'Domingo' }
    ]

    const createTurn = () => {
        
        const params = {
            nome, horaInicio, horaTermino
        }
        let id = toast.loading("Aguarde...")
        axios.post('/turnos', params)
        .then(res => {
            props.updateList()
            toast.update(id, {render: "Adicionado", type: "success", isLoading: false, autoClose: 3000})
            
            props.toggleAddModal()
            setNome("")
            setHoraInicio(0)
            setHoraTermino(0)
        })
        .catch(err => toast.update(id, {render: "Algo deu errado", type: "error", isLoading: false, autoClose: 3000}))
    }

    return (
        <div className={"addModal__container" + (!props.showAddModal ? " hide" : "")}>
            <div className="addModal__box">
                <div className="addModal__header">
                    <h3>Adicionar Turno</h3>
                    <button onClick={props.toggleAddModal} className="close">X</button>
                </div>
                <div className="input-wrapper input-wrapper--name">
                    Nome <input value={nome} onChange={e => setNome(e.target.value)} placeholder="Nome do turno" className="addModal__input name" type="text" />
                </div>
                <div className="input-wrapper input-wrapper--hi">
                    Hora de Inicio 
                    <input 
                        max={24} 
                        value={horaInicio} 
                        onChange={(event) => setHoraInicio(event.target.value.replace(/\D/,''))} 
                        className="addModal__input hi" 
                        type="number" />
                </div>
                <div className="input-wrapper input-wrapper--apd">
                    Aulas por Dia <input 
                                        value={1}
                                        max={24}
                                        className="editModal__input apd" 
                                        type="number" />
                </div>
                <div className="input-wrapper input-wrapper--dda">
                    Duração da Aula <input 
                                        value={1}
                                        className="editModal__input dda" 
                                        type="number" />
                </div>
                <div className="input-wrapper input-wrapper--dds">
                    Dias da Semana <Select isSearchable={false} isMulti={true} options={daysOptions} />
                </div>

                <button onClick={createTurn} className="addModal__btn">Adicionar Turno</button>
            </div>
        </div>
    )
}
 
export default AddModal