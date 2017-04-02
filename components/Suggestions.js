import React from 'react'
import getPlayer from '../api/getPlayer'

module.exports = ({state, dispatch}) => {
  return (
    <div className='suggestions'>
      {state.form.suggestions
        .filter((suggestion, index) => index < 14)
        .map((thisSuggestion, index) => {
          function handleClickSuggestion () {
            getPlayer(thisSuggestion.fullName, dispatch)
          }
          return (
            <div className="suggestion formElement button clickable" key={index} onClick={handleClickSuggestion}>
              <p>{thisSuggestion.fullName}</p>
            </div>
          )
      })}
    </div>
  )
}
