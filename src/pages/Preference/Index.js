import React from 'react'
import Header from './pieces/Header'
import './styles.css'

const hours = []
const disciplines = []
for(let i = 0; i < 24; i++){
    hours.push(i+1)
    disciplines.push(i+1)
}

function Preference() {
    console.log(hours)
    return (
        <div className="preference-page">
            <Header />
            <div className="preference__container">
                <div className="preference__header">
                    <h2>Nome do Professor</h2>
                    <div className="preference__header__wrapper">
                        <p>Preferência</p>
                        <button>Salvar Preferências</button>
                    </div>
                </div>
                <div className="preference__hours">
                    <p>Horários</p>
                    <div className="preference__hours__content">
                        {hours.map(hour => {
                            return (
                                <label className="hour__label">
                                    <input key={hour.toString()} value={hour} type="checkbox" />
                                    {hour}h
                                </label>
                            )
                        })}
                    </div>
                </div>
                <div className="preference__disciplines">
                    <p>Disciplinas</p>
                    <div className="preference__disciplines__content">
                        <input className="disciplines__search" placeholder="Pesquisar" type="text" />

                        <div className="box">
                            {disciplines.map(d => {
                                return (
                                    <label className="discipline__label">
                                        <input key={d.toString()} value={d} type="checkbox" />
                                        Disciplina {d}
                                    </label>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Preference