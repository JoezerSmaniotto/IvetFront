import React from 'react';
import { useForm } from "react-hook-form";
import {Container} from './styles';
import { yupResolver } from '@hookform/resolvers';
import * as yup from "yup";
import { TextField } from '@material-ui/core';

const SignupSchema = yup.object().shape({
    name: yup.string().required('Nome obrigatório'),
    email: yup.string().required('E-mail obrigatório').email('Digite um e-mail válido'),
    password: yup.string().min(6,'A Senha deve ter no minimo 6 caracteres'),
    birthDate: yup.date({accept:['']}).nullable().required('Preencha a data de nascimento'),
    // birthDate: yup.date().nullable().default(null),


});
  
  

const  SignUp = () => {
    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(SignupSchema)
    });
    function onSubmit(data) {
        console.log("Data submitted: ", data);
    }
    


    return(
        <Container>
           <form onSubmit={handleSubmit(onSubmit)} noValidate >

                <div>
                    <TextField
                       
                        id="inputNome"
                        type="text"
                        name="name"
                        ref={register}
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
                        ref={register}
                    />
                    {errors.email && <p className="error">{errors.email.message}</p>}
                </div>
                
                <div>   
                    <TextField
                       
                        type="password"
                        name="password"
                        id="inputPassword"
                        label='Senha'
                        ref={register}
                    />
                    {errors.password && <p className="error">{errors.password.message}</p>}
                </div>

                <div>
                    <TextField
                       
                        type="text"
                        name="birthDate"
                        id="inputBirthDate"
                        label='Data Nascimento'
                        ref={register}
                    /> 
                    {errors.birthDate && <p className="error">{errors.birthDate.message}</p>}
                </div>

                <div>
                    <TextField
                       
                        type="type"
                        name="cep"
                        id="inputCep"
                        label='Cep'
                        ref={register}
                    /> 
                    {errors.cep && <p className="error">{errors.cep.message}</p>}
                </div>

                <div>
                    <TextField
                       
                        type="type"
                        name="street"
                        id="inputStreet"
                        label='Rua'
                        ref={register}
                    /> 
                    {errors.street && <p className="error">{errors.street.message}</p>}
                </div>
                
                <div>
                    <TextField
                       
                        type="type"
                        name="number"
                        id="inputNumber"
                        label='Number'
                        ref={register}
                    /> 
                    {errors.number && <p className="error">{errors.number.message}</p>}
                </div>

                <div>
                    <TextField
                       
                        type="type"
                        name="complement"
                        id="inputNumber"
                        label='Complemento'
                        ref={register}
                    /> 
                    {errors.complement && <p className="error">{errors.complement.message}</p>}
                </div>

                <div>
                    <TextField
                       
                        type="type"
                        name="district"
                        id="inputDistrict"
                        label='district'
                        ref={register}
                    /> 
                    {errors.district && <p className="error">{errors.district.message}</p>}
                </div>

                <div>
                    <TextField
                       
                        type="type"
                        name="city"
                        id="inputCity"
                        label='Cidade'
                        ref={register}
                    /> 
                    {errors.city && <p className="error">{errors.city.message}</p>}
                </div>

                <div>
                    <TextField
                       
                        type="type"
                        name="UF"
                        id="inputUF"
                        label='UF Estado'
                        ref={register}
                    /> 
                    {errors.city && <p className="error">{errors.city.message}</p>}
                </div>


                <button type="submit">Login</button>
                
            </form>
        </Container>

    )

}


export default SignUp;



// return(
//     <Container>
//         <h2>Joezer</h2>
//     </Container>

// )
