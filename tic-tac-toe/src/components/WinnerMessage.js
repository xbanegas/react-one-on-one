import React from 'react';

export default function WinnerMessage(props)  {
  return(
    <div className="neon">
      {props.player} wins the match!
    </div>
  )
}