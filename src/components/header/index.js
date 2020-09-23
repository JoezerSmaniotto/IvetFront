import React,{ useState } from 'react';
import {Component} from './styles';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import Container from '@material-ui/core/Container';


import { useAuth } from '../../context/auth';


const Header = () => {

    const { user } = useAuth();

    const [controllerMenu, SetControllerMenu] = useState(false);
    const [controllerULLI, SetControllerULLI] = useState(false);
   

    function clickMenu (){
       
        SetControllerMenu(!controllerMenu);
        console.log(controllerMenu)
    }
    console.log(controllerMenu)
    return(
        <Component>         
            {/* <header>
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
            </header> */}


            <nav>
                <ul  className={(controllerULLI) ? 'hide' : ''}  >
                    <li className="logo">MeuPet</li>
                    <li className="items" className={(controllerMenu) ? 'show' : '' (controllerULLI) ? 'hide' : ''  } ><a href="#">Home</a></li>
                    <li className="items" className={(controllerMenu) ? 'show' : '' (controllerULLI) ? 'hide' : ''  }  ><a href="#">About</a></li>
                    <li className="items" className={(controllerMenu) ? 'show' : '' (controllerULLI) ? 'hide' : ''  }  ><a href="#">Blogs</a></li>
                    <li className="items" className={(controllerMenu) ? 'show' : '' (controllerULLI) ? 'hide' : ''  }  ><a href="#">Contact</a></li>
                    <li className="items" className={(controllerMenu) ? 'show' : '' (controllerULLI) ? 'hide' : ''  }  ><a href="#">Feedback</a></li>
                    <li className="btn" onClick={()=> clickMenu()} ><a href="#"><i className="fas fa-bars"></i></a></li>

                    {
                        !!user && 
                        <>
                            <li className="items" className={(controllerMenu) ? 'show' : ''  (controllerULLI) ? 'hide' : ''  } ><a href="#">Contact</a></li>
                            <li className="items" className={(controllerMenu) ? 'show' : '' (controllerULLI) ? 'hide' : ''  } ><a href="#">Feedback</a></li>
                        </>
                    }   
                </ul>
            </nav>
            
        </Component>
    )
}

export default Header;