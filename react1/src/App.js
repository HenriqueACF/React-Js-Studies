import React from 'react';

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

export default App;