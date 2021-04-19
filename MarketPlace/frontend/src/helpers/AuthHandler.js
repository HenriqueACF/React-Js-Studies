import Cookies from 'js-cookie';

//Verifica se esta logado
export const isLogged = () =>{
    let token = Cookies.get('token');
    return(token) ? true : false;
}

//Faz o Login
export const doLogin = (token, rememberPassword = false) =>{
    if(rememberPassword){
        Cookies.set('token', token, {expires:365});
    }else{
        Cookies.set('token', token)
    }
}

//Faz o Logout
export const doLogout = () =>{
    Cookies.remove('token');
}