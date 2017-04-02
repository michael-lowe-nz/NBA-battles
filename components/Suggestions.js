import React from 'react'

module.exports = ({state, dispatch}) => {
  function selectPlayer () {
    return
  }
  return (
    <div className='suggestions'>
      {state.form.suggestions.map((suggestion, index) => {
        return (
          <div className="suggestion formElement clickable" key={index}>
            <p>{suggestion.fullName}</p>
          </div>
        )
      })}
    </div>
  )
}
