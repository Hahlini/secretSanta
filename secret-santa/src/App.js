import React, {useState, useEffect} from 'react';
import Login from './components/Login';
import './App.css'; 

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
      console.log(map); 
    }
  }, [map]);

  return (
    <div>
      <div className ="text-box">
        <h1>Secret Santa 2025!</h1>
        <div className='text'>
          <p>
            Du ska delta i årets maffigaste spel! Reglerna följer nedan. Om dessa bryts skall du genast slängas in i den stygga listan
          </p>
            <ol>
            <li>Du skall dräpa</li>
            <li>Ge Johan Deg</li>
            <li>olalal</li>
            <li>Hej på er bröder alla</li>
          </ol>
          <Login map = {map}/>
        </div>
      </div>
      <img src={require('./amogus.png')} alt=''></img>
    </div>
  );
}

export default App;