import React from 'react';
import {connect} from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
//Global CSS
import './App.css';
//Rotas
import Routes from './Routes';
//Components
import { Template } from './componentes/MainComponents';
//Partials componets
import Header from './componentes/partials/Header';
import Footer from './componentes/partials/Footer';

const Page = (props) =>{
  return(
    <BrowserRouter>
      <Template>
        
        <Header/>

        <Routes/>

        <Footer/>

      </Template> 
    </BrowserRouter>
  );
}

const mapStateToProps = (state)=>{
  return{
    user:state.user
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Page);
