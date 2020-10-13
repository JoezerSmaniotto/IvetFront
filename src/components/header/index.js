import React,{ useState } from 'react';
import { Link } from 'react-router-dom';
import {Component} from './styles';

import { useAuth } from '../../context/auth';



const Header = () => {

   
    const { user, signOut } = useAuth(); 
    
    const [controllerMenu, SetControllerMenu] = useState(false);
  
    return(
        <Component>          
            <nav>
                <ul >
                    <li className="logo">MeuPet</li>
                    <li  className={(controllerMenu) ? 'show items hide': "items" }  ><Link to="#">Sobre</Link></li>
                    <li  className={(controllerMenu) ? 'show items hide': "items" }  ><Link to="#">Contato</Link></li>
                    <li  className={(controllerMenu) ? 'show items hide': "items" }  ><Link to={`/signIn`}>Login</Link></li>
                    <li  className={(controllerMenu) ? 'show items hide': "items" }  ><Link to={`/`} >Cadastrar</Link></li>
                    <li  className={(controllerMenu) ? 'btn hide': "btn" }  onClick={()=> SetControllerMenu(!controllerMenu)} ><Link to="#"><i className="fas fa-bars"></i></Link></li>

                    {
                        !!user &&  
                        <>
                            <li  className={(controllerMenu) ? 'show items hide': "items" } ><Link to={`/editUser`}>Usuário</Link></li>
                            <li  className={(controllerMenu) ? 'show items hide': "items" } ><Link to={`/registerPet`}>CadPets</Link></li>
                            <li  className={(controllerMenu) ? 'show items hide': "items" } ><Link to={`/listPets`}>Lista Pets</Link></li>
                            <li  className={(controllerMenu) ? 'show items hide': "items" } ><Link to="#">Solicitações</Link></li>
                            <li  className={(controllerMenu) ? 'show items hide': "items" } onClick={()=> signOut() } ><Link to="#" >Sair</Link></li>
                        </>
                    }   
                </ul>
            </nav>
        </Component>
    )
}

export default Header;