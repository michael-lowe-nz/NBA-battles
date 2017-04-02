import React from 'react'
import getPlayer from '../api/getPlayer'

module.exports = ({state, dispatch}) => {
  return (
    <div className='suggestions'>
      {state.form.suggestions
        .filter((suggestion, index) => index < 14)
        .map((suggestion, index) => {
        return (
          <div className="suggestion formElement button clickable" key={index} onClick={() => {
              dispatch({type: 'HANDLE_FORM_NAME_CHANGE', payload: suggestion.fullName})
              getPlayer(state, dispatch)
              dispatch({type: 'HANDLE_FORM_NAME_CHANGE', payload: ""})
              dispatch({type: 'CLEAR_SUGGESTIONS'})
            }}>
            <p>{suggestion.fullName}</p>
          </div>
        )
      })}
    </div>
  )
}
