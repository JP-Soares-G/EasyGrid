import React from 'react'
import DeleteButton from '../../components/DeleteButton/Index'
import EditButton from '../../components/EditButton/Index'

import './styles.css'

function Results() {
    return (
        <div className="results-page">
            <div className="results__header">
                <h2 className="results__title">Resultados</h2>
            </div>
            <div className="tableWrapper">
                <div className="table">
                    <div className="row row-header">
                        <p className="col col0">Nome</p>
                        <p className="col col2">Ações</p>
                    </div>
                    <div className="row">
                        <p className="col col0">nome do resultado</p>
                        <div className="col col2 action-col">
                            <EditButton/> 
                            <DeleteButton />
                        </div>
                    </div>
                
                </div> 
            </div>
        </div>
    )
}

export default Results