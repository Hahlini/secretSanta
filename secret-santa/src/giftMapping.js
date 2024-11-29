export const createMapping = (playerList) => {
  
    let jsonMap = {};
    const shuffledPlayers = playerList.sort(() => Math.random() - 0.5);

    for (let i = 0; i < shuffledPlayers.length - 1; i++) {
        jsonMap[shuffledPlayers[i]] = shuffledPlayers[i+1];
    }

    jsonMap[shuffledPlayers[shuffledPlayers.length - 1]] = shuffledPlayers[0]; 

    return jsonMap
}