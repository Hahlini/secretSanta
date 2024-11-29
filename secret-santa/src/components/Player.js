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
      <p style={{marginBottom : 8}}>
        Ditt ovärdeliga uppdrag är att leverera en gåva till {props.map.get(props.name)}
      </p>
    )
  }

  return (
    <div>
      <h2>God Jul {props.name}!</h2>
      {text()}
    </div>
  )
}

export default Player;