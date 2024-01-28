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
  const [quantity, setQuantity] = useState(value)

  if(quantity > max) {setQuantity(10)}
  else if (quantity < min){setQuantity(1)}

  const increment = () => {
    if(quantity < max) {
        setQuantity(quantity+1)
        setValue(quantity+1)
    }
  }
  const decrement = () => {
    if(quantity > min) {
        setQuantity(quantity-1)
        setValue(quantity-1)
    }
    
  }


  return(
    <div className='valueInput'>
      <button onClick={decrement}>-</button>
      <input type="number" placeholder='1' min={min} max={max} value={quantity}
        onChange={(event) => setQuantity(event.target.value)}/>
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