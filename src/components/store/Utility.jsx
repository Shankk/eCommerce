import PropTypes from 'prop-types'
import { useState } from 'react';
import 'src/components/style/Utility.css'

function Dropdown ({ label, value, options, onChange }) {

    return (
   
      <label>
   
        {label}
   
        <select value={value} onChange={onChange}>
   
          {options.map((option,i) => (
            <option key={i} value={option.value}>{option.label}</option>
          ))}
   
        </select>
   
      </label>
   
    );
   
}

Dropdown.propTypes = {
    label: PropTypes.string,
    value: PropTypes.string,
    options: PropTypes.array,
    onChange: PropTypes.func
}

function ValueInput ({value, setValue, min, max}) {
  let tempValue = value

  if(tempValue > max) {tempValue = 10}
  else if (tempValue < min){tempValue = 1}

  const increment = () => {
    if(tempValue < max) {
        setValue(tempValue+1)
    }
  }
  const decrement = () => {
    if(tempValue > min) {
      setValue(tempValue-1)
    }
  }


  return(
    <div className='valueInput'>
      <button onClick={decrement}>-</button>
      <input type="number" min={min} max={max} value={tempValue}
        onChange={(event) => tempValue = event.target.value}/>
      <button onClick={increment}>+</button>
    </div>
  )
}

ValueInput.propTypes = {
  value: PropTypes.number,
  setValue: PropTypes.func,
  min: PropTypes.number,
  max: PropTypes.number
}

export { Dropdown, ValueInput }