import React from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from "react-hook-form";
// import {Container, CollectionInput, Teste } from './styles';
// import {Container, ControllForm } from './styles';
import {Container } from './styles';
import { } from './styles';
import { } from './styles';
import { yupResolver } from '@hookform/resolvers';
import * as yup from "yup";
import { TextField } from '@material-ui/core';
import  Header  from '../../components/header';
import api from '../../services/api';

const SignupSchema = yup.object().shape({
    name: yup.string().required('Nome obrigatório'),
    email: yup.string().required('E-mail obrigatório').email('Digite um e-mail válido'),
    password: yup.string().required('No minimo 6 caracteres').min(6,'A Senha deve ter no minimo 6 caracteres'),
    // data: yup.date().min( new Date(1900,01,01), 'Informe Uma data Valida' ),
    // data:yup.date().test('valida','Informe a data correta',(value)=>( console.log(value))),
    birthDate: yup.string().required("Informe Uma data"),
    cep: yup.string().required('Informe o Cep'),   
    street: yup.string().required('Informe o nome da Rua'),
    number: yup.string().required('Informe o numero da casa'),
    complement: yup.string(),
    district:  yup.string().required('Informe o bairro'),
    city: yup.string().required('Informe a cidade'),
    UF: yup.string().required('Informe a UF do estado'),


});
  
  
const  SignUp = () => {
    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(SignupSchema)
    });
    // const { register, handleSubmit, errors } = useForm();
    const history = useHistory();
    async function onSubmit(data) {
       
        console.log("Data submitted: ", data);
        const response = await api.post('users',data);
        console.log("Retorno")
        console.log(response);
        history.push('/signIn');
       
    }
    


    return(
            <>
                <Header/>
                <Container>

                   {/* <>  */}
                    <form onSubmit={handleSubmit(onSubmit)} noValidate >
                    
                            <div>
                                <TextField
                                
                                    id="inputNome"
                                    type="text"
                                    name="name"
                                    inputRef={register}
                                    label='Nome'
                                />
                                {errors.name && <p className="error">{errors.name.message}</p>}
                            </div> 
            
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

                            <div>
                                <TextField
                                    id="date"
                                    label="Data Nascimento"
                                    type="date"
                                    // defaultValue="yyyy-mm-dd"
                                    name="birthDate"
                                    className="classDate"
                                    inputRef={register}
                                    InputLabelProps={{
                                    shrink: true,
                                    }}
                                />
                                {errors.birthDate && <p className="error">{errors.birthDate.message}</p>}
                            </div>
                        
                            <div>
                                <TextField
                                
                                    type="type"
                                    name="cep"
                                    id="inputCep"
                                    label='Cep'
                                    inputRef={register}
                                /> 
                                {errors.cep && <p className="error">{errors.cep.message}</p>}
                            </div>

                            <div>
                                <TextField
                                
                                    type="type"
                                    name="street"
                                    id="inputStreet"
                                    label='Rua'
                                    inputRef={register}
                                /> 
                                {errors.street && <p className="error">{errors.street.message}</p>}
                            </div>
                            
                            <div>
                                <TextField
                                
                                    type="type"
                                    name="number"
                                    id="inputNumber"
                                    label='Number'
                                    inputRef={register}
                                /> 
                                {errors.number && <p className="error">{errors.number.message}</p>}
                            </div>

                            <div>
                                <TextField
                                
                                    type="type"
                                    name="complement"
                                    id="inputComplement"
                                    label='Complemento'
                                    inputRef={register}
                                /> 
                                {errors.complement && <p className="error">{errors.complement.message}</p>}
                            </div>

                            <div>
                                <TextField
                                
                                    type="type"
                                    name="district"
                                    id="inputDistrict"
                                    label='Bairro'
                                    inputRef={register}
                                /> 
                                {errors.district && <p className="error">{errors.district.message}</p>}
                            </div>

                            <div>
                                <TextField
                                
                                    type="type"
                                    name="city"
                                    id="inputCity"
                                    label='Cidade'
                                    inputRef={register}
                                /> 
                                {errors.city && <p className="error">{errors.city.message}</p>}
                            </div>

                            <div>
                                <TextField
                                
                                    type="type"
                                    name="UF"
                                    id="inputUF"
                                    label='UF Estado'
                                    inputRef={register}
                                /> 
                                {errors.UF && <p className="error">{errors.UF.message}</p>}
                            </div> 
                        
                            
                            <button type="submit">Login</button>                
                        </form>
                </Container>
           </>
    )

}


export default SignUp;



// return(
//     <Container>
//         <h2>Joezer</h2>
//     </Container>

// )



// <Teste>
//             <Header/>
//             <Container>
//                 <h2>Cadastre-se</h2>
//                 <form onSubmit={handleSubmit(onSubmit)} noValidate >
//                     <CollectionInput>    
//                         <div>
//                             <TextField
                            
//                                 id="inputNome"
//                                 type="text"
//                                 name="name"
//                                 inputRef={register}
//                                 label='Nome'
//                             />
//                             {errors.name && <p className="error">{errors.name.message}</p>}
//                         </div> 
        
//                         <div>  
//                             <TextField
                            
//                                 id="inputEmail"
//                                 type="text"
//                                 name="email"
//                                 label='E-mail'
//                                 inputRef={register}
//                             />
//                             {errors.email && <p className="error">{errors.email.message}</p>}
//                         </div> 
                        
//                         <div>    
//                             <TextField
                            
//                                 type="password"
//                                 name="password"
//                                 id="inputPassword"
//                                 label='Senha'
//                                 inputRef={register}
//                             />
//                             {errors.password && <p className="error">{errors.password.message}</p>}
//                         </div>

//                         <div>
//                             <TextField
//                                 id="date"
//                                 label="Data Nascimento"
//                                 type="date"
//                                 // defaultValue="yyyy-mm-dd"
//                                 name="birthDate"
//                                 className="classDate"
//                                 inputRef={register}
//                                 InputLabelProps={{
//                                 shrink: true,
//                                 }}
//                             />
//                             {errors.birthDate && <p className="error">{errors.birthDate.message}</p>}
//                         </div>
                    
//                         <div>
//                             <TextField
                            
//                                 type="type"
//                                 name="cep"
//                                 id="inputCep"
//                                 label='Cep'
//                                 inputRef={register}
//                             /> 
//                             {errors.cep && <p className="error">{errors.cep.message}</p>}
//                         </div>

//                         <div>
//                             <TextField
                            
//                                 type="type"
//                                 name="street"
//                                 id="inputStreet"
//                                 label='Rua'
//                                 inputRef={register}
//                             /> 
//                             {errors.street && <p className="error">{errors.street.message}</p>}
//                         </div>
                        
//                         <div>
//                             <TextField
                            
//                                 type="type"
//                                 name="number"
//                                 id="inputNumber"
//                                 label='Number'
//                                 inputRef={register}
//                             /> 
//                             {errors.number && <p className="error">{errors.number.message}</p>}
//                         </div>

//                         <div>
//                             <TextField
                            
//                                 type="type"
//                                 name="complement"
//                                 id="inputComplement"
//                                 label='Complemento'
//                                 inputRef={register}
//                             /> 
//                             {errors.complement && <p className="error">{errors.complement.message}</p>}
//                         </div>

//                         <div>
//                             <TextField
                            
//                                 type="type"
//                                 name="district"
//                                 id="inputDistrict"
//                                 label='Bairro'
//                                 inputRef={register}
//                             /> 
//                             {errors.district && <p className="error">{errors.district.message}</p>}
//                         </div>

//                         <div>
//                             <TextField
                            
//                                 type="type"
//                                 name="city"
//                                 id="inputCity"
//                                 label='Cidade'
//                                 inputRef={register}
//                             /> 
//                             {errors.city && <p className="error">{errors.city.message}</p>}
//                         </div>

//                         <div>
//                             <TextField
                            
//                                 type="type"
//                                 name="UF"
//                                 id="inputUF"
//                                 label='UF Estado'
//                                 inputRef={register}
//                             /> 
//                             {errors.UF && <p className="error">{errors.UF.message}</p>}
//                         </div> 
//                         </CollectionInput> 
                        
//                         <button type="submit">Login</button>                
//                     </form>
//             </Container>
//         </Teste>