import React, {useState, useEffect} from 'react'
import { toast } from 'react-toastify';
import axios from 'axios'
import Select from 'react-select'
import './editModal.css'

const daysOptions = [
    { value: 'segunda', label: 'Segunda' },
    { value: 'terca', label: 'Terça' },
    { value: 'quarta', label: 'Quarta' },
    { value: 'quinta', label: 'Quinta' },
    { value: 'sexta', label: 'Sexta' },
    { value: 'sabado', label: 'Sabado' },
    { value: 'domingo', label: 'Domingo' }
]

function EditModal(props) {
    const [nome, setNome] = useState("")
    const [horaInicio, setHoraInicio] = useState(0)
    const [aulasDia, setAulasDia] = useState(0)
    const [duracaoAula, setDuracaoAula] = useState(0)
    const [selectedDays, setSelectedDays] = useState([]);
    
    const handleSelectChanges = (e) => {
        setSelectedDays(Array.isArray(e) ? (e.map(x =>  x.value)) : [])
    }

    useEffect(() => {
        const days = Array.isArray(props.item.diasDaSemana) ? props.item.diasDaSemana.map(e => e.toLowerCase()) : []
        setNome(props.item.nome)
        setHoraInicio(props.item.horaInicio)
        setAulasDia(props.item.qtdAulasDia)
        setDuracaoAula(props.item.duracaoAula)
        setSelectedDays([...days])

    }, [props.item])

    // console.log(parseInt(item.horaInicio))
    const updateTurn = () => {
        let id = toast.loading("Aguarde...")
        const url = `/turnos/${props.item.id}`
        const daysUpperCase = selectedDays.map(e => e.toUpperCase())
        const params = {nome, horaInicio, qtdAulasDia: aulasDia, duracaoAula, diasDaSemana: daysUpperCase}
        axios.put(url, params)
            .then(res => {
                props.updateList()
                toast.update(id, {render: "Atualizado", type: "success", isLoading: false, autoClose: 3000})
                props.toggleEditModal()
                setNome("")
                setHoraInicio(0)
            })
            .catch(err => {
                console.log(err.response.data)
                toast.update(id, {render: "Algo deu errado", type: "error", isLoading: false, autoClose: 3000})
            })
    }

    return (
        <div className={"editModal__container" + (!props.showEditModal ? " hide" : "")}>
            <div className="editModal__box">
                <div className="editModal__header">
                    <h3>Editar Turno</h3>
                    <button onClick={props.toggleEditModal} className="close">X</button>
                </div>
                <div className="input-wrapper input-wrapper--name">
                    Nome <input 
                            value={nome} 
                            onChange={e => setNome(e.target.value)} 
                            placeholder="Nome do turno" 
                            className="editModal__input name" 
                            type="text" />
                </div>
                <div className="input-wrapper input-wrapper--hi">
                    Hora de Inicio <input 
                                        required
                                        value={horaInicio} 
                                        onChange={(event) => setHoraInicio(event.target.value)} 
                                        className="editModal__input hi" 
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
                                        type="number" />
                </div>
                <div className="input-wrapper input-wrapper--dds">
                    Dias da Semana <Select value={daysOptions.filter(obj => selectedDays.includes(obj.value))} onChange={handleSelectChanges} isSearchable={false} isMulti={true} options={daysOptions} />
                </div>

                <button onClick={updateTurn} className="editModal__btn">Salvar Modificações</button>
            </div>
        </div>
    )
}

export default EditModal