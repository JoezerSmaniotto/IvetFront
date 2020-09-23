import React,{ useState } from 'react';
import { Link } from 'react-router-dom';
import {Component} from './styles';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import Container from '@material-ui/core/Container';


import { useAuth } from '../../context/auth';


const Header = () => {

    const { user } = useAuth();

    const [controllerMenu, SetControllerMenu] = useState(false);
    const [controllerULLI, SetControllerULLI] = useState(true);
   

    function clickMenu (){
       
        SetControllerMenu(!controllerMenu);
        SetControllerULLI(!controllerULLI);
        
    }
  
    return(
        <Component>          
            <nav>
                <ul >
                    <li className="logo">MeuPet</li>
                    <li  className={(controllerMenu) ? 'show items hide': "items" }  ><Link to="#">Sobre</Link></li>
                    <li  className={(controllerMenu) ? 'show items hide': "items" }  ><Link to="#">Contrato</Link></li>
                    <li  className={(controllerMenu) ? 'show items hide': "items" }  ><Link to={`/signIn`}>Login</Link></li>
                    <li  className={(controllerMenu) ? 'show items hide': "items" }  ><Link to={`/`} >Cadastrar</Link></li>
                    <li  className={(controllerMenu) ? 'btn hide': "btn" }  onClick={()=> clickMenu()} ><Link to="#"><i className="fas fa-bars"></i></Link></li>

                    {
                        !!user && 
                        <>
                            <li  className={(controllerMenu) ? 'show items hide': "items" } ><Link to={`/editUser`}>Usuario</Link></li>
                            <li  className={(controllerMenu) ? 'show items hide': "items" } ><Link to="#">Lista Pets</Link></li>
                            <li  className={(controllerMenu) ? 'show items hide': "items" } ><Link to="#">Solicitações</Link></li>
                        </>
                    }   
                </ul>
            </nav>
        </Component>
    )
}

export default Header;