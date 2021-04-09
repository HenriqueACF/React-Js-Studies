import React, {useState, useEffect} from 'react';
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

//UseState
// function App(){

//     const [contagem, setContagem] = useState(0);

//     const botaoAction = ()=>{
//         setContagem( contagem +1)
//     }

//     return(
//         <>
//             <div>{contagem} vezes</div>
//             <button onClick={botaoAction}>Adicionar +1</button>
//         </>
//     )
// }

//campos de input
// const Input = styled.input `
//     width:400px;
//     height:30px;
//     font-size:16px;
//     padding:10px;
//     border:1px solid #000;
// `;

// function App(){
// const [texto, setTexto] = useState('');

// const handleInput = (e) =>{
//     setTexto(e.target.value)
// }
//     return(
//         <>
//             <Input type="text" value={texto} onChange={handleInput}/>
//             <p>{texto.length}</p>
//         </>
//     )
// }

//Condicional de exibição
// const Input = styled.input `
//     width:400px;
//     height:30px;
//     font-size:16px;
//     padding:10px;
//     border:1px solid #000;
// `;

// function App(){
// const [email, setEmail] = useState('');

// const handleInput = (e) =>{
//     setEmail(e.target.value)
// }
//     return(
//         <>
//             <Input type="email" value={email} onChange={handleInput}/>
//             {email.length > 0 &&
//                 <p>{email.length} caractere{email.length != 1 ?'s': ''}</p>
//             }
//         </>
//     )
// }


//Calculadora de gorjeta
// const Input = styled.input `
//     width:300px;
//     height:30px;
// `;
// function App(){
//     const [valor, setValor] = useState('');
//     const [gorjeta, setGorjeta] = useState('');

//     const handleValor = (e) =>{
//         setValor(e.target.value)
//     }

//     const handleGorjeta = (e) =>{
//         setGorjeta(e.target.value)
//     }

//     const calcGorjeta = ((valor * gorjeta)/100).toFixed(2);
//     const totalPagar = (parseFloat(valor) + parseFloat(calcGorjeta)).toFixed(2);


//     return(
//         <>
//         <p>Quanto deu a conta?</p>
//         <Input placeholder="Digite o valor da sua conta R$" type="number"  value={valor} onChange={handleValor}/>
//         <br/>
//         <p>Porcentagem da gorjeta</p>
//         <Input placeholder="Digite a porcentagem da gorjeta %" type="number"  value={gorjeta} onChange={handleGorjeta}/>
//         <hr/>
//             {valor > 0 &&
//             <p>Conta:R${valor}</p>
//             }
//             {gorjeta > 0 &&
//             <p>Gorjeta:({gorjeta}%) R${calcGorjeta}</p>
//             }
//             {valor > 0 && gorjeta > 0 &&
//             <b>Total:R${totalPagar}</b>
//             }
//         </>
//     )
// }


//Ciclo de vida UseEffect
// function App(){
//     const [contagem, setContagem] = useState(0);
//     useEffect(()=>{
//         document.title = `Contagem: ${contagem}`
//     }, [contagem])

//     function aumentarAction(){
//         setContagem(contagem +1)
//     }

//     return(
//         <>
//             <h1>Contagem: {contagem}</h1>
//             <button onClick={aumentarAction}>Adicionar</button>
//         </>
//     );
// }

//Separando em componentes
// import SearchBox from './componentes/SearchBox';
// function App(){

//     const [searchText, setSearchText] = useState('');

//     function handleSearchInput(newText){
//         setSearchText(newText)
//     }

//     return(
//         <>
//             <h1>Lista de Tarefas</h1>
//             <SearchBox  
//                 frasePadrao="Fraça sua busca..."
//                 onChangeText={handleSearchInput}
//             />
//             {/* <SearchBox frasePadrao="Digite seu nome"/>
//             <SearchBox /> */}
//             <hr/>
//             <p>Text buscado:{searchText}</p>
//         </>
//     );
// }


//Adicionando e marcando itens
// import SearchBox from './componentes/SearchBox';
// function App(){
    
    
//     const [list, setList] = useState([]);
//     const [searchText, setSearchText] = useState('');

//     useEffect(()=>{
//         setList([
//             {title:'Comprar o bolo', done:false},
//             {title:'Pegar o cachorro no Petshop', done:true},
//             {title:'Gravar aula',done:false}
//         ])
//     }, []);

//     function addAction(newItem){
//         let newList = [...list, {title:newItem, done:false}];
//         setList(newList)
//     }

//     function handleToggleDone(index){
//         let newList = [...list];
//         newList[index].done = !newList[index].done;
//         setList(newList);
//     }

//     return(
//         <>
//             <h1>Lista de Tarefas</h1>
//             <SearchBox 
//                 frasePadrao="Adicione uma tarefa"
//                 onEnter={addAction}
//             />
//             <hr/>
//             <ul>
//             {list.map((item, index)=>(
//                 <li key={index} >
//                     {item.done &&
//                         <del>{item.title}</del>
//                     }
//                     {!item.done &&
//                         item.title
//                     }
//                     <button onClick={()=>handleToggleDone(index)}>
//                         {item.done && 'Desfazer'}
//                         {!item.done && 'Marcar'}
//                     </button>
//                 </li>
//             ))}
//             </ul>
//         </>
//     )
// }

//Modal
// import Modal from './componentes/Modal';
// function App(){

//     const [modalVisible, setModalVisible] = useState(false);

//     const  handleButtonClick = ()=>{
//         setModalVisible(true);
//     }
//     return(
//         <>
//             <button onClick={handleButtonClick} >Abrir modal</button>
//             <Modal visible={modalVisible} setVisible={setModalVisible}>
//                 <h1>Teste de modal</h1>
//             </Modal>
//         </>
//     )
// }


//Router
import {BrowserRouter,Switch, Route, Link} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/Sobre';
function App(){
    return(
        <BrowserRouter>
            <header>
                <h1>Site</h1>
                <nav>
                    <ul>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>    
                        <li>
                            <Link to='/sobre'>Sobre</Link>
                        </li>                    
                    </ul>
                </nav>
            </header>
            <hr/>
            <Switch>
                {/* onde se criam as rotas */}
                <Route exact path='/'>
                    <Home/>
                </Route>
                <Route path='/sobre'>
                    <About/>
                </Route>
            </Switch>
            <hr/>
            <footer>
                Rodapé
            </footer>
            
        </BrowserRouter>
    )
}

export default App;