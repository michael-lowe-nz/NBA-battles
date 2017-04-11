import React from 'react'
import getPlayer from '../api/getPlayer'

module.exports = ({state, dispatch}) => {
  const customClass = state.form.suggestions.length > 0 ? "suggestions" : "hidden"
    return (
      <div className={customClass}>
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

function noSuggestions () {
  return (
    <p>No suggestions. Try refining your search</p>
  )
}
