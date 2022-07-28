import React, {useState} from 'react'
import { toast } from 'react-toastify';
import axios from 'axios'
import './addModal.css'

function AddModal(props) {
    const [nome, setNome] = useState("")
    const [sigla, setSigla] = useState("")
    const [cnpj, setCnpj] = useState("")

    const createIntitution = () => {
        const params = {nome, sigla, cnpj}
        let id = toast.loading("Aguarde...")
        axios.post('/instituicoes', params)
        .then(res => {
            props.updateList()
            toast.update(id, {render: "Adicionado", type: "success", isLoading: false, autoClose: 3000})
            
            props.toggleAddModal()
            setNome("")
            setSigla("")
            setCnpj("")
            
        })
        .catch(err => {
            console.log(err)
            toast.update(id, {render: "Algo deu errado", type: "error", isLoading: false, autoClose: 3000})
        })
    }

    return (
        <div className={"addModal__container" + (!props.showAddModal ? " hide" : "")}>
            <div className="addModal__box">
                <div className="addModal__header">
                    <h3>Adicionar Instituição</h3>
                    <button onClick={props.toggleAddModal} className="close">X</button>
                </div>
                <div className="input-wrapper input-wrapper--sigla">
                    Sigla <input value={sigla} onChange={e => setSigla(e.target.value)} placeholder="Ex. UFS" className="addModal__input input--sigla" type="text" />
                </div>
                <div className="input-wrapper input-wrapper--name">
                    Nome <input value={nome} onChange={e => setNome(e.target.value)} placeholder="Nome da instituição" className="addModal__input input--name" type="text" />
                </div>
                <div className="input-wrapper input-wrapper--cnpj">
                    CNPJ <input value={cnpj} onChange={e => setCnpj(e.target.value)} placeholder="CNPJ" className="addModal__input input--cnpj" type="text" />
                </div>
                <button onClick={() => createIntitution()} className="addModal__btn">Adicionar Instituição</button>
            </div>
        </div>
    )
}

export default AddModal