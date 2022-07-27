import React, {useState, useEffect} from 'react'
import './editModal.css'

function EditModal(props) {
    const [nome, setNome] = useState(props.item.nome || "")
    const [matricula, setMatricula] = useState(props.item.id || "")

    useEffect((prevProps, nextProps) => {
        setNome(props.item.nome)
        setMatricula(props.item.id)
        
    }, [props.item])

    return (
        <div className={"editModal__container" + (!props.showEditModal ? " hide" : "")}>
            <div className="editModal__box">
                <div className="editModal__header">
                    <h3>Editar Professor</h3>
                    <button onClick={props.toggleEditModal} className="close">X</button>
                </div>
                <div className="input-wrapper input-wrapper--mt">
                    Matricula <input value={matricula} onChange={e => setMatricula(e.target.value)} placeholder="Nome do turno" className="editModal__input mt" type="text" />
                </div>
                <div className="input-wrapper input-wrapper--name">
                    Nome <input value={nome} onChange={e => setNome(e.target.value)} placeholder="Nome do turno" className="editModal__input name" type="text" />
                </div>

                <button className="editModal__btn">Salvar Modificações</button>
            </div>
        </div>
    )
}


export default (EditModal)