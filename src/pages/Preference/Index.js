import React from 'react'
import Header from './pieces/Header'
import Select from 'react-select'

import './styles.css'

const hoursArr = []
const disciplines = []
for(let i = 0; i < 24; i++){
    hoursArr.push(i+1)
    disciplines.push("Sinais e Sistemas Lineares " + (i+1))
} 

const customStyles = {
    option: (provided, state) => ({
        ...provided,
          width: state.selectProps.width,
        //   backgroundColor: state.isFocused ? "red" : "black"

      }),
      menu: (provided, state) => ({
          ...provided,
          width: state.selectProps.width,
      }),
      control: (provided, { isFocused, selectProps: { width }}) => ({
          ...provided,
          width: width,
          
      }),
}

const options = [
    { value: {nome: 'Tarde', inicio: 13, termino: 19}, label: 'Tarde' },
    { value: {nome: 'Manhã', inicio: 7, termino: 13}, label: 'Manhã' },
    { value: {nome: 'Noite', inicio: 19, termino: 23}, label: 'Noite' }
]

function Preference() {
    
    const [turn, setTurn] = React.useState({})
    const [hours, setHours] = React.useState([...hoursArr])

    React.useEffect(() => {
        let temp = []
        for(let i = turn.inicio; i < turn.termino; i++){
            temp.push(i)
        }
        setHours([...temp])
    }, [turn])

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
                    <Select onChange={selected => setTurn({...selected.value})} styles={customStyles} width="300px" options={options} />
                    <div className="hours__container">
                        <div className="daysOfWeek">
                            <div className="day">Segunda</div>
                            <div className="day">Terça</div>
                            <div className="day">Quarta</div>                                
                            <div className="day">Quinta</div>
                            <div className="day">Sexta</div>

                        </div>
                        <div className="hours">
                            
                            <div className="hoursCol">
                                {hours.map(hour => {
                                    return (
                                        <label className="hour__label">
                                            <input key={hour.toString()} value={hour} type="checkbox" />
                                            {hour}h
                                        </label>
                                    )
                                })} 
                            </div>
                                   
                            <div className="hoursCol">
                                {hours.map(hour => {
                                    return (
                                        <label className="hour__label">
                                            <input key={hour.toString()} value={hour} type="checkbox" />
                                            {hour}h
                                        </label>
                                    )
                                })}
                            </div>
                            
                            <div className="hoursCol">
                                {hours.map(hour => {
                                    return (
                                        <label className="hour__label">
                                            <input key={hour.toString()} value={hour} type="checkbox" />
                                            {hour}h
                                        </label>
                                    )
                                })}
                            </div>
                            <div className="hoursCol">
                                {hours.map(hour => {
                                    return (
                                        <label className="hour__label">
                                            <input key={hour.toString()} value={hour} type="checkbox" />
                                            {hour}h
                                        </label>
                                    )
                                })}
                            </div>
                            <div className="hoursCol">
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
                                        {d}
                                        <input key={d.toString()} value={d} className="discipline__checkbox" type="checkbox" />
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