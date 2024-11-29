import React from 'react';
import Login from './components/Login';

export const createMapping = (playerList) => {
  
    const map = new Map();
    const shuffledPlayers = playerList.sort(() => Math.random() - 0.5);

    for (let i = 0; i < shuffledPlayers.length - 1; i++) {
        map.set(shuffledPlayers[i], shuffledPlayers[i+1]);
    }

    map.set(shuffledPlayers[shuffledPlayers.length - 1] = shuffledPlayers[0]); 

    return map
}

const App = () => {
  
  const map = createMapping(["Axel", "Elisabeth", "Johan"]);

  return (
    <div>
      <h1>Secret Santa 2025!</h1>
      <Login map = {map}/>
    </div>
  );
}

export default App;