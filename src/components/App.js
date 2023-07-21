// create your App component here
import React, { useEffect, useState } from "react";

function App() {
    const [randomDog, setRandomDog] = useState("");
    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random')
        .then((res) => res.json())
        .then((data) => {
            setRandomDog(data.message)
        })
    }, []);

    if (!randomDog){
        return <p>Loading...</p>
    }

    return(
        <div>
            <h2 style={{textAlign: 'center'}}>A lovely Dog for a lovely Human like you: </h2>
             <img src={randomDog} alt="A Random Dog" style={{marginLeft: '480px', height: '50%', width: '50%'}} />
        </div>
    )
}

export default App;
