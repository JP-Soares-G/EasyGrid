import React from 'react'
import axios from 'axios'
import { toast } from 'react-toastify';
import AddButton from '../../components/AddButton/Index'
import DeleteButton from '../../components/DeleteButton/Index'
import EditButton from '../../components/EditButton/Index'
import AddModal from './pieces/AddModal'
import EditModal from './pieces/EditModal'
import './styles.css'


function Turns() {
    const [showEditModal, setShowEditModal] = React.useState(false)
    const [showAddModal, setShowAddModal] = React.useState(false)
    const [isToUpdate, setIsToUpdate] = React.useState(false)
    const [itemToEdit, setItemToEdit] = React.useState({})
    const [data, setData] = React.useState([])
    // const data = useFetch()
    const toggleEditModal = () => setShowEditModal(prevState => !prevState)
    const toggleAddModal = () => setShowAddModal(!showAddModal)
    const updateList = () => setIsToUpdate(!isToUpdate)


    const deleteTurn = (id) => {
        const url = `/turnos/${id}`
        axios.delete(url, { withCredentials: false })
            .then(() => updateList())
            .catch(err => {
                alert("Algo deu errado")
            })
    }


    React.useEffect(() => {
        // alert(process.env.REACT_APP_API_URL)
        // axios.get(`${process.env.REACT_APP_API_URL}/turnos`)
        // const url = `${process.env.REACT_APP_API_URL}/turnos`
        axios.get("/turnos")
        .then(res => setData(res.data.content))
        .catch(err => toast.warn("Algo deu errado kk"))
    }, [])
    
    React.useEffect(() => {
        axios.get("/turnos")
        .then(res => setData(res.data.content))
        .catch(err => alert("Algo deu errado"))
    }, [isToUpdate])

    // React.useEffect(() => {
        
    // },[item])
    const edit = (item) => {
        setItemToEdit({...item})
        toggleEditModal()
    }

    return (
        <div className="turns-page">
            <div className="turns__header">
                <h2 className="turns__title">Turnos</h2>
                <AddButton onClick={toggleAddModal} title="Adicionar Turno" />
            </div>
            <div className="tableWrapper">
                <div className="table">
                    <div className="row row-header">
                        <p className="col col1">Nome</p>
                        <p className="col col2">Inicio</p>
                        <p className="col col3">Termino</p>
                        <p className="col col4">Ações</p>
                    </div>
                    {data.map((item, index) => {
                        return (
                            <div key={item.id.toString()} className="row">
                                <p className="col col1 name-col">{item.nome}</p>
                                <p className="col col2">{item.horaInicio}H</p>
                                <p className="col col3">{item.horaTermino}H</p>
                                <div className="col col4 action-col">
                                    <EditButton onClick={() => edit(item)} /> 
                                    <DeleteButton onClick={() => deleteTurn(item.id)} />
                                </div>
                                
                            </div>
                        )
                    })}
                
                </div> 
                
            </div>
            <EditModal updateList={updateList}  item={itemToEdit} showEditModal={showEditModal} toggleEditModal={toggleEditModal} setShowEditModal={setShowEditModal}/>
            <AddModal updateList={updateList} showAddModal={showAddModal} toggleAddModal={toggleAddModal} />
        </div>
    )
}

export default Turns