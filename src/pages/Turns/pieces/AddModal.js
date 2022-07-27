import React, {useState, useEffect} from 'react'
import { toast } from 'react-toastify';
import axios from 'axios'
import Select from 'react-select'

import './addModal.css'

const daysOptions = [
    { value: 'segunda', label: 'Segunda' },
    { value: 'terca', label: 'Terça' },
    { value: 'quarta', label: 'Quarta' },
    { value: 'quinta', label: 'Quinta' },
    { value: 'sexta', label: 'Sexta' },
    { value: 'sabado', label: 'Sabado' },
    { value: 'domingo', label: 'Domingo' }
]

function AddModal(props) {
    const [nome, setNome] = useState("")
    const [horaInicio, setHoraInicio] = useState(0)
    const [aulasDia, setAulasDia] = useState(0)
    const [duracaoAula, setDuracaoAula] = useState(0)
    const [selectedDays, setSelectedDays] = useState([]);
    
    const handleSelectChanges = (e) => {
        setSelectedDays(Array.isArray(e) ? (e.map(x => x.value)) : [])
    }

    const createTurn = () => {
        const daysUpperCase = selectedDays.map(e => e.toUpperCase())
        const params = {nome, horaInicio, qtdAulasDia: aulasDia, duracaoAula, diasDaSemana: daysUpperCase}

        let id = toast.loading("Aguarde...")

        axios.post('/turnos&instituicaoId=5', params)
        .then(res => {
            props.updateList()
            toast.update(id, {render: "Adicionado", type: "success", isLoading: false, autoClose: 3000})
            
            props.toggleAddModal()
            setNome("")
            setHoraInicio(0)
            
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
                    Hora de Inicio <input 
                                        value={horaInicio} 
                                        onChange={(event) => setHoraInicio(event.target.value)} 
                                        className="addModal__input hi" 
                                        type="time" />
                </div>
                <div className="input-wrapper input-wrapper--apd">
                    Aulas por Dia <input 
                                        value={aulasDia} 
                                        onChange={(event) => setAulasDia(event.target.value.replace(/\D/,''))} 
                                        className="editModal__input apd" 
                                        type="number" />
                </div>
                <div className="input-wrapper input-wrapper--dda">
                    Duração da Aula <input 
                                        max={60}
                                        value={duracaoAula} 
                                        onChange={(event) => setDuracaoAula(event.target.value.replace(/\D/,''))} 
                                        className="editModal__input dda" 
                                        type="number" /> min
                </div>
                <div className="input-wrapper input-wrapper--dds">
                    Dias da Semana <Select value={daysOptions.filter(obj => selectedDays.includes(obj.value))} onChange={handleSelectChanges} isSearchable={false} isMulti={true} options={daysOptions} />
                </div>

                <button onClick={createTurn} className="addModal__btn">Adicionar Turno</button>
            </div>
        </div> 
    )
}
 
export default AddModal