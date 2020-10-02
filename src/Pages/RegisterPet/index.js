import React from 'react';
import { Global} from './styles';
import  Header  from '../../components/header';
import  Footer from  '../../components/footer';
import  FormPet  from  '../../components/formPet';
import {useAuth} from '../../context/auth';


const  RegisterPet = () => {
    const {user} = useAuth();



    return(
       <Global> 
        <Header/>
        <FormPet optionPage={'Editar'} dataUser={user} />
        {/* <FormPet optionPage={'CadastrarPet'} dataUser={user} /> */}
        <Footer/>
       </Global>
    )

}


export default RegisterPet;


