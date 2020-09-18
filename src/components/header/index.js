import React from 'react';
import {Component} from './styles';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import Container from '@material-ui/core/Container';


import { useAuth } from '../../context/auth';


const Header = () => {

    const { user } = useAuth();

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
                    {
                        !!user && 
                        <>
                            <a href="/" > Login </a>
                            <a href="/" > Login </a>
                        </>
                        
                    }

                    
                </nav>
            </header>
            
        </Component>
    )
}

export default Header;