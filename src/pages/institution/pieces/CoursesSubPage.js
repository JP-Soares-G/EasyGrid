import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';

import './coursesSubPage.css'

function CoursesSubPage() {
    const [institution, setInstitution] = useState({})
    const [cursos, setCursos] = useState([])
    const [search, setSearch] = useState("")
    const [showSelecteds, setShowSelecteds] = useState(false)
    let {id} = useParams()

    const handleCheckboxClick = (id) => {
        const data = cursos.map(item => {
            if(item.id === id) {
                return (
                    {   
                        ...item,
                        checked: !item.checked
                    }
                )
            }
            
            return item
        })
        console.log(data)
        setCursos(data)
    }

    useEffect(() => {
        axios.get(`/instituicoes/${id}`)
        .then(res => {
            const data = res.data
            setInstitution(data)
        })
        .catch(err => console.log(err))
        axios.get("/cursos")
        .then(res => {
            const data = res.data.content.map(item => ({checked: true, ...item}))
            setCursos(data)
            // console.log(res.data.content)
        })
        .catch(err => {
            console.log(err)
        })
    }, [id])
 
    return ( 
        <div className="coursesSubPage">
            <div className="coursesSubPage__header">
                <h2 className="coursesSubPage__title">{institution.sigla} - {institution.nome}</h2>
                <div className="coursesSubPage__options">
                    <input className="search" placeholder="Pesquisar" type="text" value={search} onChange={e => setSearch(e.target.value)}  />
                    <div>Filtrar selecionados <input type="checkbox" checked={showSelecteds} onClick={() => setShowSelecteds(!showSelecteds)} /></div>
                </div>
            </div>
            <div className="coursesSubPage__content">
                {cursos.filter(item => {
                    if(showSelecteds === true) {
                        return item.checked && item.nome.toLowerCase().includes(search.toLowerCase())
                    }
                    else return item.nome.toLowerCase().includes(search.toLowerCase());
                }).map(curso => {
                    // console.log(curso)
                    // if(showSelecteds === true && curso.checked === true) return (
                    //     <label className="curso__label">
                    //         {curso.nome}
                    //         <input 
                    //             key={curso.id.toString()} 
                    //             checked={curso.checked} 
                    //             className="curso__checkbox" 
                    //             type="checkbox"
                    //             onClick={() => handleCheckboxClick(curso.id)} />
                    //     </label>
                    // )
                    // if(showSelecteds === false) return (
                    //         <label className="curso__label">
                                
                    //             {curso.nome}
                    //             <input 
                    //                 key={curso.id.toString()} 
                    //                 checked={curso.checked} 
                    //                 className="curso__checkbox" 
                    //                 type="checkbox"
                    //                 onClick={() => handleCheckboxClick(curso.id)} />
                    //         </label>
                    //     ) 
                    
                    return (
                        <label className="curso__label">
                            
                            {curso.nome}
                            <input 
                                key={curso.id.toString()} 
                                checked={curso.checked} 
                                className="curso__checkbox" 
                                type="checkbox"
                                onClick={() => handleCheckboxClick(curso.id)} />
                        </label>
                    )
                })}
            </div>
        </div>
    )
}

export default CoursesSubPage
