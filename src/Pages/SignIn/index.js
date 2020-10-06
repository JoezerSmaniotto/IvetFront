import React, {useCallback} from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from "react-hook-form";
import {Container, Main } from './styles';
import { yupResolver } from '@hookform/resolvers';
import * as yup from "yup";
import { TextField } from '@material-ui/core';
import  Header  from '../../components/header';
// import api from '../../services/api';
import { useAuth } from '../../context/auth';

const SignupSchema = yup.object().shape({
    email: yup.string().required('Nome obrigatório').email('Informe email'),
    password: yup.string().required('Senha obrigatório'),

});
  
  
const  SignIn = () => {
    const { signIn } = useAuth(); 
    // const { user, signIn } = useAuth(); 
    // console.log(user);

    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(SignupSchema)
    });

    const history = useHistory();
  
    const onSubmit = useCallback( 
       async (data) => {
       try{
            const retorno = await signIn({
                email: data.email,
                password: data.password,
            });

            console.log(retorno);
          
            if(retorno){
                history.push('/dashboard');
            } else{
                alert("Errrooo");
                // history.push('/dashboard');
            }
            
       }catch(error) {
            alert("Errrooo");

       }
        

       
       /* try{
            
            const response = await api.post('sessions',data);
            console.log(response);
            const {token, user} = response.data;
            console.log(token);
            console.log(user);
            // const response = {}
        }catch (error){
            console.log("erro")
            // console.log(response);
        }
    
        // const {user, token} = response;
        // if(user){

        // }
        // history.push('/signUp');  */
    },
    [signIn, history],
    
    );


    return(
        <Main>
            <Header/>
            <Container>
                <h2>LOGIN</h2>
                <form onSubmit={handleSubmit(onSubmit)} noValidate >

                    <div>  
                        <TextField
                        
                            id="inputEmail"
                            type="text"
                            name="email"
                            label='E-mail'
                            inputRef={register}
                        />
                        {errors.email && <p className="error">{errors.email.message}</p>}
                    </div> 
                    
                    <div>    
                        <TextField
                        
                            type="password"
                            name="password"
                            id="inputPassword"
                            label='Senha'
                            inputRef={register}
                        />
                        {errors.password && <p className="error">{errors.password.message}</p>}
                    </div>

                    <button type="submit">Login</button>                
                </form>
            </Container>
        </Main>
       
    )

}


export default SignIn;



