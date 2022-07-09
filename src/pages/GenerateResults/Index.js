import React from 'react'
import Header from './pieces/Header'
import Select from 'react-select'
import {AiOutlineLeft, AiOutlineRight} from 'react-icons/ai'

import './styles.css'
import DayButton from './pieces/DayButton.js'
import AssignmentCard from './pieces/AssignmentCard'

const customStyles = {
    placeholder: (provided, state) => ({
        ...provided,
        color: "white"
    }),
    option: (provided, state) => ({
      ...provided,
        width: state.selectProps.width,
        backgroundColor: state.isDisabled
            ? undefined
            : state.isSelected
            ? "white"
            : state.isFocused 
            ? "rgba(255, 255, 255, 0.25)"
            : undefined,
        color: state.isSelected ? "#4361EE" : "white"
        
    }),
    menu: (provided, state) => ({
        ...provided,
        width: state.selectProps.width,
        backgroundColor: "#4361EE",
    }),
    control: (provided, { selectProps: { width }}) => ({
        ...provided,
        border: '1px solid #4361EE',
        backgroundColor: "#4361EE",
        width: width
    }),
    singleValue: (provided, state) => ({
        ...provided,
        color: "white"
    }),
    dropdownIndicator: (provided, state) => ({
        ...provided,
        color: "white",
    })
  }

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
]

const daysOptions = [
    { value: 'segunda', label: 'Segunda' },
    { value: 'terça', label: 'Terça' },
    { value: 'quarta', label: 'Quarta' },
    { value: 'quinta', label: 'Quinta' },
    { value: 'sexta', label: 'Sexta' }
]

const customStyles2 = {
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

function GenerateResults() {
    const [isActive, setIsActive] = React.useState(2)
    const ref = React.useRef(null);
    const scroll = (scrollOffset) => {
        ref.current.scrollLeft += scrollOffset;
    };
    return (
        <div className="generateResults-page">
            <Header />
            <div className="generateResults__options">
                <Select styles={customStyles}  width="300px" options={options} />
                <div className="daybuttons__wrapper">
                    <DayButton onClick={() => setIsActive(2)} isActive={isActive === 2} title="Segunda" />
                    <DayButton onClick={() => setIsActive(3)} isActive={isActive === 3} title="Terça" />
                    <DayButton onClick={() => setIsActive(4)} isActive={isActive === 4} title="Quarta" />
                    <DayButton onClick={() => setIsActive(5)} isActive={isActive === 5} title="Quinta" />
                    <DayButton onClick={() => setIsActive(6)} isActive={isActive === 6} title="Sexta" />
                </div>
                <div className="daySelect__wrapper">
                    <Select styles={customStyles2} width="300px" options={daysOptions} />
                </div>
            </div>
            <span onClick={() => scroll(-200)} className="left"><AiOutlineLeft color="black" size={24}/></span>
            <span onClick={() => scroll(+200)} className="right"><AiOutlineRight size={24} /></span>
            <div className="generateResults__container" ref={ref}>
                
                <div className="row row--header">
                    <div>13:00</div>
                    <div>14:00</div>
                    <div>15:00</div>
                    <div>16:00</div>
                    <div>17:00</div>
                    <div>18:00</div>
                    <div>19:00</div>
                </div>
                <div className="row row--commom">
                    <AssignmentCard />
                    <AssignmentCard />
                    <AssignmentCard />
                    <AssignmentCard />
                    <AssignmentCard />
                    <AssignmentCard />
                    <AssignmentCard />
                </div>
                <div className="row row--commom">
                    <AssignmentCard professor="oreni katerou torerakeda" />
                    <AssignmentCard />
                    <AssignmentCard />
                    <AssignmentCard />
                    <AssignmentCard />
                    <AssignmentCard />
                    <AssignmentCard />
                </div>
            </div>
            
        </div>
    )
}

export default GenerateResults