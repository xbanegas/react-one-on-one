import React, { Component } from 'react';
import WinnerMessage from './WinnerMessage';
import PlayerTurnMessage from './PlayerTurnMessage';
import '../css/ScoreBoard.css'
import '../css/Neon.css'

class ScoreBoard extends Component{

  messageSwitch = () => {
    if (!this.props.winner){ 
      console.log('player switching')
      return (<PlayerTurnMessage player={this.props.player}/>)
    } else {
      console.log(this.props)
      return(<WinnerMessage player={this.props.winner}/>)
    }
  }

  render(){
    return(
      <div>
        <div className="play">Utlimate Super Awesome Tic Tac Toe now in React!</div>
        {this.messageSwitch()}
      </div>
    )
  }

}

export default ScoreBoard;
