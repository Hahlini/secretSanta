import React, { useState } from 'react';
import Player from './Player'

const Login = (props) => {
    const [name, setName] = useState("")
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleInputChange = (e) => {
        setName(e.target.value);
      };


    const handleSubmit = () => {
        setIsSubmitted(true); // Mark the input as submitted to hide the input
    };

    return(
    <div>
        {!isSubmitted ? (
            <div>
                <input 
                    type="text"
                    value={name}
                    onChange={handleInputChange}
                    placeholder="Skriv ditt namn"
                />
                <button onClick={handleSubmit}>OK</button>
            </div>
        ) : (
            <Player name = {name} map = {props.map}/>
        )}
    </div>
    )
}

export default Login;