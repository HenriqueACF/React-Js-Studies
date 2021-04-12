import React from 'react';
import {useParams, useLocation} from 'react-router-dom';

function useQuery(){
    return new URLSearchParams(useLocation().search);
}

function Categoria(){

    // let {cat} = useParams();

    let query = useQuery();
    let cat = query.get('tipo');

    return(
        <div>
            <h4>Pagina Categoria</h4>
            Exibinto itens da categoria:{cat}
        </div>
    )
}

export default Categoria;