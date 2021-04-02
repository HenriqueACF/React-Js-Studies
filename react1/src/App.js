import React, {useState} from 'react';
import styled from 'styled-components';
// import './App.css';

//CRIANDO COMPONETES COMO CLASSE
// class App extends React.Component{
//   render(){
//     return <h1>Testando</h1>;
//   }
// }
// export default App;


//COMPONENTES COMO FUNÇÃO
//Hoje se usa mais funções do que classes
// function App(){
//   return<h1>Teste2</h1>;
// }

// export default App;


//JSX
// function formatarNome(usuario){
//   return usuario.nome+' '+usuario.sobrenome;
// }

// function App(){
//   let usuario = {
//     nome:'Henrique',
//     sobrenome:'Assis'
//   };

//   return <>
//     <div>Meu nome é: {formatarNome(usuario)} </div>
//   </>
    
// }

// export default App;


//Componets and props
// function Avatar(props){
//   return(
//     <div>
//         <img src={props.user.url} alt={props.user.name} />
//         <br/>
//         <span>{props.user.name}</span>
//     </div>
//   )

  
// }
// function App(){
//   let user ={
//     url:"https://github.com/HenriqueACF.png",
//     name:"Henrique"
//   }

//   return <>
//     <Avatar user={user} />
//   </>;
// }


//Styled components
// const Title = styled.h1 `
//     color:#FF0000;
//     font-size:18px;
// `;

// const Botao = styled.button `
//     font-size:19px;
//     padding:10px 15px;
//     background-color:${props => props.color || '#00FF00'}
// `;

// function App(){
//     return(
//         <>
//         <Title>Titulo</Title>
//         <Botao color="#FF0000">Clique aqui</Botao>
//         <Botao color="#0000FF">Clique aqui</Botao>
//         <Botao>Clique aqui</Botao>
//         </>
//         );
// }


function App(){

    const [contagem, setContagem] = useState(0);

    const botaoAction = ()=>{
        setContagem( contagem +1)
    }

    return(
        <>
            <div>{contagem} vezes</div>
            <button onClick={botaoAction}>Adicionar +1</button>
        </>
    )
}
export default App;