import React from 'react'
import { toast } from 'react-toastify';
import axios from 'axios'
import './editModal.css'

function EditModal(props) {
    const [nome, setNome] = React.useState("")
    const [codigo, setCodigo] = React.useState("")
    const [cargaHoraria, setCargaHoraria] = React.useState(0)

    React.useEffect(() => {
        setNome(props.item.nome)
        setCodigo(props.item.codigo)
        setCargaHoraria(props.item.cargaHoraria)
    }, [props.item])

    const updateDiscipline = () => {
        let id = toast.loading("Aguarde...")
        const url = `/disciplinas/${props.item.id}`
        const params = {nome, codigo, cargaHoraria}
        axios.put(`/disciplinas/${props.item.id}`, params)
            .then(res => {
                props.updateList()
                toast.update(id, {render: "Atualizado", type: "success", isLoading: false, autoClose: 3000})
                props.toggleEditModal()
                setCargaHoraria(0)
                setCodigo("")
                setNome("")
            })
            .catch(err => {
                console.log(err.response.data)
                toast.update(id, {render: "Algo deu errado", type: "error", isLoading: false, autoClose: 3000})
            })
    }

    return (
        <div  className={"editModal__container" + (!props.showEditModal ? " hide" : "")}>
            <div className="editModal__box">
                <div className="editModal__header">
                    <h3>Editar Disciplina</h3>
                    <button onClick={props.toggleEditModal} className="close">X</button>
                </div>
                <div className="input-wrapper input-wrapper--code">
                    Código 
                    <input 
                        value={codigo}
                        onChange={e => setCodigo(e.target.value)}
                        placeholder="Código da turma" 
                        className="editModal__input code" 
                        type="text" />
                </div>
                <div className="input-wrapper input-wrapper--name">
                    Nome 
                    <input 
                        value={nome}
                        onChange={e => setNome(e.target.value)}
                        placeholder="Nome da turma" 
                        className="editModal__input name" 
                        type="text" />
                </div>
                <div className="input-wrapper input-wrapper--ch">
                    Carga Horária 
                    <input 
                        value={cargaHoraria} 
                        onChange={(event) => setCargaHoraria(event.target.value.replace(/\D/,''))} 
                        className="editModal__input ch" 
                        type="number" />
                </div>

                <button onClick={updateDiscipline} className="editModal__btn">Salvar Modificações</button>
            </div>
        </div>
    )
}

export default EditModal