import React from 'react'
import { toast } from 'react-toastify';
import axios from 'axios'
import './editModal.css'

function EditModal(props) {
    const [nome, setNome] = React.useState("")
    const [horaInicio, setHoraInicio] = React.useState(0)
    const [horaTermino, setHoraTermino] = React.useState(0)
 
    React.useEffect(() => {
        setNome(props.item.nome)
        setHoraInicio(parseInt((isNaN(props.item.horaInicio) ? 0 : (props.item.horaInicio))))
        setHoraTermino(parseInt((isNaN(props.item.horaTermino) ? 0 : (props.item.horaTermino))))
    }, [props.item])

    // console.log(parseInt(item.horaInicio))
    const updateTurn = () => {
        let id = toast.loading("Aguarde...")
        const url = `/turnos/${props.item.id}`
        const params = {nome, horaInicio, horaTermino}
        axios.put(url, params)
            .then(res => {
                props.updateList()
                toast.update(id, {render: "Atualizado", type: "success", isLoading: false, autoClose: 3000})
                props.toggleEditModal()
                setNome("")
                setHoraInicio(0)
                setHoraTermino(0)
            })
            .catch(err => toast.update(id, {render: "Algo deu errado", type: "error", isLoading: false, autoClose: 3000}))
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
                                        max={24}
                                        value={horaInicio} 
                                        onChange={(event) => setHoraInicio(event.target.value.replace(/\D/,''))} 
                                        className="editModal__input hi" 
                                        type="number" />
                </div>
                <div className="input-wrapper input-wrapper--ht">
                    Hora de Término <input 
                                        max={24}
                                        value={horaTermino} 
                                        onChange={(event) => setHoraTermino(event.target.value.replace(/\D/,''))} 
                                        className="editModal__input ht" 
                                        type="number" />
                </div>

                <button onClick={updateTurn} className="editModal__btn">Salvar Modificações</button>
            </div>
        </div>
    )
}

export default EditModal