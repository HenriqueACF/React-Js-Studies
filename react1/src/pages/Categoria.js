import React from 'react';
import {useParams} from 'react-router-dom';

function Categoria(){

    let {cat} = useParams();

    return(
        <div>
            <h4>Pagina Categoria</h4>
            Exibinto itens da categoria:{cat}
        </div>
    )
}

export default Categoria;