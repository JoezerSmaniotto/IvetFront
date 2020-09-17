import React from 'react';
import {Component} from './styles';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import Container from '@material-ui/core/Container';



const Header = () => {

    return(
        <Component>         
            <header>
                <p>MeuPet</p>
                <nav>
                    <a href="/" > Home </a>
                    <a href="/" > Sobre </a>
                    <a href="/" > Contato </a>
                    <a href="/" > Login </a>
                    <a href="/" > Cadastro </a>
                    
                </nav>
            </header>
            
        </Component>
    )
}

export default Header;