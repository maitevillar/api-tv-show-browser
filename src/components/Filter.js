import React from 'react';
import '../scss/main.scss';

const Filter = (props) => {
  const updateCheckbox = () => {
    props.handleCheckbox()
  } 
console.log(props)

console.log(props)
  return (
    <form className="filter">
      <div className="filter--container__item-1">
      <input className="input-1"
             type="text"
             placeholder= ' Introduce the title'
             name="searcher"
             id="input-form"
             onChange={props.handleInputValue}
      />
      <button className="button-1" > search </button>

      <label className="label-2"            htmlFor="status">Running
      </label>
      <input className="input-2"
             onChange={updateCheckbox} 
             type="checkbox" 
             id="status" 
             name="status" 
             value="Status" 
             checked={props.isRunning}
      />

      </div>
      <span className="filter--text"> You are looking for: <span className="highlight"> {props.value} </span> </span>
    </form>

  )
}

export default Filter;