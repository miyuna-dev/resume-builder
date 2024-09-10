import React from 'react'

const InputControl = ({ label, ...props }) => {
  return (
    <div className="inputCtrl container">
      {
         label && <label>{label}</label>
      }
      <input type="text" {...props} />
    </div>
  )
}

export default InputControl