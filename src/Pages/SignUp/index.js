import React from 'react';
import { Global} from './styles';
import  Header  from '../../components/header';
import  Footer from  '../../components/footer';
import  FormUser  from  '../../components/formUser';

const  SignUp = () => {



    return(
       <Global> 
        <Header/>
        <FormUser optionPage={'Cadastrar'} />
        <Footer/>
       </Global>
    )

}


export default SignUp;


