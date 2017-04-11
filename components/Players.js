import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import Player from './Player'

module.exports = ({state, dispatch}) => {
  if (state.players.length > 0) {
    return (
      <div className="players">
        <ReactCSSTransitionGroup className="players" transitionName="example" transitionEnterTimeout={300} transitionLeaveTimeout={300}>
          {state.players.map(function (player, index) {
            return (<Player playerInfo={player} dispatch={dispatch} key={index} index={index}/>)
          })}
        </ReactCSSTransitionGroup>
      </div>
    )
  }
  return null
}
