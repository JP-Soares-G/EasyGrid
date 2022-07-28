import React, {useState, useEffect} from 'react'
import { toast } from 'react-toastify';
import axios from 'axios'
import './editModal.css'

function EditModal(props) {
    const [nome, setNome] = useState("")
    const [sigla, setSigla] = useState("")
    const [cnpj, setCnpj] = useState("")

    useEffect(() => {
        setNome(props.item.nome)
        setCnpj(props.item.cnpj)
        setSigla(props.item.sigla)
    }, [props.item])

    const updateInstitution = () => {
        let id = toast.loading("Aguarde...")
        
        const url = `/instituicoes/${props.item.id}`

        const params = {nome, sigla, cnpj}
        axios.put(url, params)
            .then(res => {
                props.updateList()
                toast.update(id, {render: "Atualizado", type: "success", isLoading: false, autoClose: 3000})
                props.toggleEditModal()
                setNome("")
                setSigla("")
                setCnpj("")
            })
            .catch(err => {
                // console.log(err.response.data)
                toast.update(id, {render: "Algo deu errado", type: "error", isLoading: false, autoClose: 3000})
            })
    }
    return (
        <div className={"editModal__container" + (!props.showEditModal ? " hide" : "")}>
            <div className="editModal__box">
                <div className="editModal__header">
                    <h3>Editar Professor</h3>
                    <button onClick={props.toggleEditModal} className="close">X</button>
                </div>
                <div className="input-wrapper input-wrapper--sigla">
                    Sigla <input value={sigla} onChange={e => setSigla(e.target.value)} placeholder="Ex. UFS" className="editModal__input input--sigla" type="text" />
                </div>
                <div className="input-wrapper input-wrapper--name">
                    Nome <input value={nome} onChange={e => setNome(e.target.value)} placeholder="Nome da instituição" className="editModal__input input--name" type="text" />
                </div>
                <div className="input-wrapper input-wrapper--cnpj">
                    CNPJ <input value={cnpj} onChange={e => setCnpj(e.target.value)} placeholder="CNPJ" className="editModal__input input--cnpj" type="text" />
                </div>
                <button onClick={updateInstitution} className="editModal__btn">Salvar Modificações</button>
            </div>
        </div>
    )
}


export default EditModal