import React, {useState, useEffect} from 'react';
import Login from './components/Login';

const jsonToMap = (data) => {
  return (new Map(Object.entries(data)));
}

const App = () => {
  const [map, setMap] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/api/gift-mapping')
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      setMap(jsonToMap(data));
    })
  }, []);

  useEffect(() => {
    if (map) {
      console.log(map);  // This will now log the updated map
    }
  }, [map]);

  return (
    <div>
      <h1>Secret Santa 2025!</h1>
      <Login map = {map}/>
    </div>
  );
}

export default App;