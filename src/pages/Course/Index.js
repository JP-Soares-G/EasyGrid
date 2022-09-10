import React from 'react'
import axios from 'axios'
import { toast } from 'react-toastify';
import DeleteButton from '../../components/DeleteButton/Index'
import EditButton from '../../components/EditButton/Index'
import AddButton from '../../components/AddButton/Index'
import AddModal from './pieces/AddModal'
import EditModal from './pieces/EditModal'

import './styles.css'

function Course() {
    const [showEditModal, setShowEditModal] = React.useState(false)
    const [showAddModal, setShowAddModal] = React.useState(false)
    const [isToUpdate, setIsToUpdate] = React.useState(false) 
    const [itemToEdit, setItemToEdit] = React.useState({})
    const [data, setData] = React.useState([])

    const toggleEditModal = () => setShowEditModal(!showEditModal)
    const toggleAddModal = () => setShowAddModal(!showAddModal)
    const updateList = () => setIsToUpdate(!isToUpdate)

    const edit = (item) => {
        setItemToEdit({...item})
        toggleEditModal()
    }

    const deleteInstitution = (id) => {
        let idToast = toast.loading("Aguarde...")

        const url = `/instituicoes/${id}`
        axios.delete(url, { withCredentials: false })
            .then(() => {
                toast.update(idToast, {render: "Removido", type: "success", isLoading: false, autoClose: 500})
                updateList()
            })
            .catch(err => {
                console.log(err)
                toast.update(idToast, {render: "Algo deu errado... Tente novamente mais tarde", type: "error", isLoading: false, autoClose: 500})
                // alert("Algo deu errado... Tente novamente mais tarde")
            })
    }

    React.useEffect(() => {
        let id = toast.loading("Aguarde...")

        axios.get("/cursos?direction=ASC&linesPerPage=50&orderBy=nome")
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

    React.useEffect(() => {
        axios.get("/cursos?direction=ASC&linesPerPage=50&orderBy=nome")
        .then(res => {
            setData(res.data.content)
        })
        .catch(err => toast.error("Algo deu errado... Tente novamente mais tarde"))
    }, [isToUpdate])


    return (
        <div className="course-page">
            <div className="course__header">
                <h2 className="course__title">Cursos</h2>
                <AddButton onClick={toggleAddModal} title="Adicionar Curso" />
            </div>
            <div className="tableWrapper">
                <div className="table">
                    <div className="row row-header">
                        <p className="col sigla-col">Sigla</p>
                        <p className="col col0">Nome</p>
                        <p className="col ">Periodos</p>
                        <p className="col col2">Ações</p>
                    </div>
                    {data.map(item => {
                        return (
                            <div className="row">
                                <p className="col sigla-col">{item.sigla}</p>
                                <p className="col dark-col col0">{item.nome}</p>
                                <p className="col ">{item.periodo}</p>
                                <div className="col col2 action-col">
                                    <EditButton/> 
                                    <DeleteButton />
                                </div>
                            </div>
                        )
                    })}
                </div> 
            </div>
            <EditModal updateList={updateList}   item={itemToEdit} showEditModal={showEditModal} toggleEditModal={toggleEditModal} />
            <AddModal updateList={updateList}   showAddModal={showAddModal} toggleAddModal={toggleAddModal} />
        </div>
    )
}

export default Course