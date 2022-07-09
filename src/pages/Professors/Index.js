import React from 'react'
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
    const toggleEditModal = () => setShowEditModal(!showEditModal)
    const toggleAddModal = () => setShowAddModal(!showAddModal)

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
                    <div className="row">
                        <p className="col col0">00000001</p>
                        <p className="col col1 name-col">nome do professor</p>
                        <div className="col col2 action-col">
                            <PreferencesButton />
                            <EditButton onClick={toggleEditModal}/> 
                            <DeleteButton />
                        </div>
                    </div>
                
                </div> 
            </div>
            <EditModal showEditModal={showEditModal} toggleEditModal={toggleEditModal} />
            <AddModal showAddModal={showAddModal} toggleAddModal={toggleAddModal} />
        </div>
    )
}

export default Professors