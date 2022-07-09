import React from 'react'
import AddButton from '../../components/AddButton/Index'
import DeleteButton from '../../components/DeleteButton/Index'
import EditButton from '../../components/EditButton/Index'
import { toast } from 'react-toastify';

// import PreferencesButton from '../../components/PreferencesButton/Index'
import AddModal from './pieces/AddModal'
import EditModal from './pieces/EditModal'
import axios from 'axios'

import './styles.css'

function Disciplines() {
    const [showEditModal, setShowEditModal] = React.useState(false)
    const [showAddModal, setShowAddModal] = React.useState(false)
    const [isToUpdate, setIsToUpdate] = React.useState(false)
    const [itemToEdit, setItemToEdit] = React.useState({})
    const [data, setData] = React.useState([])

    const toggleEditModal = () => setShowEditModal(prevState => !prevState)
    const toggleAddModal = () => setShowAddModal(!showAddModal)
    const updateList = () => setIsToUpdate(!isToUpdate)

    const deleteDiscipline = (id) => {
        
        const url = `/disciplinas/${id}`
        axios.delete(url)
            .then(() => {
                updateList()
            })
            .catch(err => {
                alert("Algo deu errado")
            })
    }

    React.useEffect(() => {
        axios.get('/disciplinas')
        .then(res => {
            setData(res.data.content)
            // console.log(data)
        })
        .catch(err => alert("Algo deu errado"))
    }, [])

    React.useEffect(() => {
        axios.get('/disciplinas')
        .then(res => setData(res.data.content))
        .catch(err => alert("Algo deu errado"))
    }, [isToUpdate])

    // React.useEffect(() => {
        
    //     toggleEditModal()
    // },[itemToEdit])
    const edit = (item) => {
        setItemToEdit(item);
        toggleEditModal()
    }
    return (
        <div className="disciplines-page">
            <div className="disciplines__header">
                <h2 className="disciplines__title">Disciplinas</h2>
                <AddButton onClick={() => toggleAddModal()} title="Adicionar Disciplina" />
            </div>
            <div className="tableWrapper">
                <div className="table">
                    <div className="row row-header">
                        <p className="col col0">Código</p>
                        <p className="col col1">Nome</p>
                        <p className="col col2">Carga Hóraria</p>
                        <p className="col col3">Ações</p>
                    </div>
                    
                    {data.map(item => {
                        return (
                            <div className="row">
                                <p className="col col0">{item.codigo}</p>
                                <p className="col col1 name-col">{item.nome}</p>
                                <p className="col col2">{item.cargaHoraria}H</p>
                                <div className="col col2 action-col">
                                    <EditButton onClick={() => edit(item)} /> 
                                    <DeleteButton onClick={() => deleteDiscipline(item.id)} />
                                </div>
                            </div>    
                        )
                    })}
                    
                </div> 
            </div>
            <EditModal item={itemToEdit} updateList={updateList} showEditModal={showEditModal} toggleEditModal={toggleEditModal} />
            <AddModal updateList={updateList} showAddModal={showAddModal} toggleAddModal={toggleAddModal} />
        </div>
    )
}

export default Disciplines