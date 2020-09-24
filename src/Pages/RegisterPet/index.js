import React from 'react';
import { Global} from './styles';
import  Header  from '../../components/header';
import  Footer from  '../../components/footer';
import  FormPet  from  '../../components/formPet';

const  registerPet = () => {



    return(
       <Global> 
        <Header/>
        <FormPet optionPage={'CadastrarPet'} />
        <Footer/>
       </Global>
    )

}


export default registerPet;


