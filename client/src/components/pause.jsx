import React from 'react';

let Pause = (props) => {
  return (
    <div id="pause">
      <h1><span id="winner">{props.winner}</span> Won</h1>
      <button onClick={props.restart}>Replay!</button>
    </div>
  )
}

export default Pause;