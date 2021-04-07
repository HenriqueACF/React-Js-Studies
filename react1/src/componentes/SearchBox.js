import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const InputText = styled.input `
    border:2px solid #000;
    border-radius:5px;
    padding:15px;
    font-size:17px;
    width:300px;
`;

function SearchBox(props){

    const [text, setText] = useState('');

    // function changeText(e){
    //     setText(e.target.value)
    // }

    function handleKeyUp(e){
        if(e.keyCode == 13){
            if(props.onEnter){
                props.onEnter(text);
            }
            setText('');
        }
    }

    // useEffect(()=>{
    //     props.onChangeText(text);
    // }, [text])

    return(
        <InputText 
            type="text"
            value={text}
            onChange={(e)=>setText(e.target.value)}
            onKeyUp={handleKeyUp}
            placeholder={props.frasePadrao ?? "Digite algo"}
        />
    );
}

export default SearchBox;