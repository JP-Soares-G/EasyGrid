import React from 'react'
import axios from 'axios'
import { toast } from 'react-toastify';
import AddButton from '../../components/AddButton/Index'
import DeleteButton from '../../components/DeleteButton/Index'
import EditButton from '../../components/EditButton/Index'
import PreferencesButton from '../../components/PreferencesButton/Index'
import AddModal from './pieces/AddModal'
import EditModal from './pieces/EditModal'

import './styles.css'

function Professors() {
    const [showEditModal, setShowEditModal] = React.useState(false)
    const [showAddModal, setShowAddModal] = React.useState(false)
    const [itemToEdit, setItemToEdit] = React.useState({})
    const [data, setData] = React.useState([])

    const toggleEditModal = () => setShowEditModal(!showEditModal)
    const toggleAddModal = () => setShowAddModal(!showAddModal)

    React.useEffect(() => {
        let id = toast.loading("Aguarde...")

        axios.get("/docentes")
        .then(res => {
            setData(res.data.content)
            toast.update(id, {isLoading: false, autoClose: 100})
        })
        .catch(err => {
            const conf = { 
                render: "Algo deu errado... Tente novamente mais tarde", 
                type: "error",
                isLoading: false,
                autoClose: 3000, 
            }
            toast.update(id, conf)
        })
    }, [])

    const edit = (item) => {
        setItemToEdit({...item})
        toggleEditModal()
    }

    return (
        <div className="professors-page">
            <div className="professors__header">
                <h2 className="professors__title">Professores</h2>
                <AddButton onClick={toggleAddModal} title="Adicionar Professor" />
            </div>
            <div className="tableWrapper">
                <div className="table">
                    <div className="row row-header">
                        <p className="col col0">Matricula</p>
                        <p className="col col1">Nome</p>
                        <p className="col col2">Ações</p>
                    </div>
                    
                    {data.map(item => {
                        return (
                            <div className="row">
                                <p className="col col0">{item.id}</p>
                                <p className="col col1 name-col">{item.nome}</p>
                                <div className="col col2 action-col">
                                    <PreferencesButton id={item.id} />
                                    <EditButton onClick={() => edit(item)}/> 
                                    <DeleteButton />
                                </div>
                            </div>
                        )
                    })}
                </div> 
            </div>
            <EditModal item={itemToEdit} showEditModal={showEditModal} toggleEditModal={toggleEditModal} />
            <AddModal showAddModal={showAddModal} toggleAddModal={toggleAddModal} />
        </div>
    )
}

export default Professors