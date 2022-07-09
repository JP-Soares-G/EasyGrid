import React from 'react'
import './addModal.css'

function AddModal(props) {


    return (
        <div className={"addModal__container" + (!props.showAddModal ? " hide" : "")}>
            <div className="addModal__box">
                <div className="addModal__header">
                    <h3>Adicionar Professor</h3>
                    <button onClick={props.toggleAddModal} className="close">X</button>
                </div>
                <div className="input-wrapper input-wrapper--mt">
                    Matricula <input placeholder="Matricula do professor" className="addModal__input mt" type="text" />
                </div>
                <div className="input-wrapper input-wrapper--name">
                    Nome <input placeholder="Nome do professor" className="addModal__input name" type="text" />
                </div>
                
                <button className="addModal__btn">Adicionar Turno</button>
            </div>
        </div>
    )
}

export default AddModal