import React, {useState, useEffect} from 'react'
import { toast } from 'react-toastify';
import axios from 'axios'
import Select from 'react-select'
import './addModal.css'

function AddModal(props) {
    const [nome, setNome] = useState("")
    const [sigla, setSigla] = useState("")
    const [listOfInstitution, setListOfInstituion] = useState([])
    const [institution, setInstituion] = useState()
    const [periodos, setPeriodos] = useState(1)
    
    const handleSelectChanges = (e) => {
        setInstituion(e)
    }
    const addCourseToInstitution = () => {
        const url = `/instituicoes/${institution.value.id}`
        const cursos = institution.value.cursos
        const params = {nome, sigla};
        axios.put(url, params)
            .then(res => {
                
            })
            .catch(err => {
                console.log(err.response.data)
            })
    }
    const createCourse = () => {
        const params = {nome, sigla, periodos}
        let id = toast.loading("Aguarde...")
        axios.post('/courses', params)
        .then(res => {
            props.updateList()
            

            toast.update(id, {render: "Adicionado", type: "success", isLoading: false, autoClose: 3000})
        
            props.toggleAddModal()
            setNome("")
            setSigla("")
            setPeriodos(1)
            setInstituion({})
        })
        .catch(err => {
            console.log(err)
            toast.update(id, {render: "Algo deu errado", type: "error", isLoading: false, autoClose: 3000})
        })
    } 



    // useEffect(() => {
    //     axios.get("/instituicoes?direction=ASC&linesPerPage=50&orderBy=nome")
    //     .then(res => {
    //         const temp = res.data.content?.map(inst => ({value: {id: inst.id, cursos: inst.cursos}, label: inst.nome}))
    //         setListOfInstituion(temp)
    //         // console.log(listOfInstitution)
    //     })
    //     .catch(err => console.log(err))
    // }, [])

    return (
        <div className={"addModal__container" + (!props.showAddModal ? " hide" : "")}>
            <div className="addModal__box">
                <div className="addModal__header">
                    <h3>Adicionar Instituição</h3>
                    <button onClick={props.toggleAddModal} className="close">X</button>
                </div>
                <div className="input-wrapper input-wrapper--sigla">
                    Sigla <input value={sigla} onChange={e => setSigla(e.target.value)} placeholder="Ex. EC, EF, ..." className="addModal__input input--sigla" type="text" />
                </div>
                <div className="input-wrapper input-wrapper--name">
                    Nome <input value={nome} onChange={e => setNome(e.target.value)} placeholder="Nome do Curso" className="addModal__input input--name" type="text" />
                </div>
                <div className="input-wrapper input-wrapper--cnpj">
                    Periodos <input max={10} min={1} value={periodos} onChange={e => setPeriodos(e.target.value.replace(/\D/,''))} placeholder="0" className="addModal__input input--periodos" type="number" />
                </div>
                
                <button onClick={() => createCourse()} className="addModal__btn">Adicionar Instituição</button>
            </div>
        </div>
    )
}
{/* <div className="input-wrapper input-wrapper--inst">
                    Instituição <Select value={institution} onChange={handleSelectChanges} isSearchable={false} isMulti={false} options={listOfInstitution} />
                </div> */}
export default AddModal