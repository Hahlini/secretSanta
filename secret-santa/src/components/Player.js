import React from 'react';

const Player = (props) => {

  const text = () => {
    
    if (props.map.get(props.name) === undefined) {
      return (
        <p>
          Ditt namn är inte med i deltagarlistan
        </p>
      )
    }

    return (
      <p>
        Du ska ge en present till: {props.map.get(props.name)}
      </p>
    )
  }

  return (
    <div>
      <h2>Hello {props.name}!</h2>
      {text()}
    </div>
  )
}

export default Player;