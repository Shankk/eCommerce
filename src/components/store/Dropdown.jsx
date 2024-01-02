import PropTypes from 'prop-types'

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

export { Dropdown }