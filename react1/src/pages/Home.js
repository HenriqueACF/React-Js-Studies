import React from 'react';
import {useHistory} from 'react-router-dom';

function Home(){

    let history = useHistory();

    const handleButton = ()=>{
        history.replace('/sobre');
    };

    return(
        <div>
            <h4>Pagina Home</h4>
            <button onClick={handleButton}>Ir para a página sobre</button>
        </div>
    )
}

export default Home;