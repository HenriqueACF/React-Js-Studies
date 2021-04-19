import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = ()=>{
    return(
        <div>
            Página não encontrada!
            
            <Link to="/">HOME</Link>
        </div>
    )
}

export default NotFound;