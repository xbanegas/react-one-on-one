import React from 'react';

export default function PlayerTurnMessage  (props)  {
  return(
    <div className="neon">
      Turn: {props.player}
    </div>
  )
}