import React from 'react'
import getPlayer from '../api/getPlayer'

import NBA from 'nba'

module.exports = ({state, dispatch}) => {
  const suggestionLimit = 14
  const shouldShow = state.form.suggestions.length > 0 ? "suggestions" : "hidden"
    if (state.form.name === null) {
      return null
    }
    else {
      return (
        <div className="suggestions">
          {state.form.suggestions.length > 0 ?
            state.form.suggestions
            .filter((suggestion, index) => index < suggestionLimit)
            .map((thisSuggestion, index) => {
              function handleClickSuggestion () {
                getPlayer(thisSuggestion.fullName, dispatch)
              }
              return (
                <div className="suggestion formElement button clickable" key={index} onClick={handleClickSuggestion}>
                  <p>{thisSuggestion.fullName}</p>
                </div>
              )
            })
            :
            noSuggestions()
          }
          </div>
        )
    }
}

function noSuggestions () {
  return (
    <p>No suggestions. Try refining your search</p>
  )
}
