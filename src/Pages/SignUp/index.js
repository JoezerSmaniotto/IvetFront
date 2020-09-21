import React,{useState} from 'react';
import { useHistory } from 'react-router-dom';
import { useForm, Controller } from "react-hook-form";
import { Global, Form} from './styles';
import { yupResolver } from '@hookform/resolvers';
import * as yup from "yup";
import { TextField } from '@material-ui/core';
import  Header  from '../../components/header';
import api from '../../services/api';
import cep from 'cep-promise';
import moment from 'moment';

    
const  SignUp = () => {

    const SignupSchema = yup.object().shape({
        name: yup.string().required('Nome obrigatório'),
        email: yup.string().required('E-mail obrigatório').email('Digite um e-mail válido'),
        password: yup.string().required('No minimo 6 caracteres').min(6,'A Senha deve ter no minimo 6 caracteres'),
        birthDate: yup.string().required("Informe Uma data").test('validaData','Verifique a data', (value) => {
            const dataAtual = moment().format('YYYY-MM-DD')
            const data = moment(value).isBetween('1900-01-01',dataAtual)
            return data;
            
        }),
        cep: yup.string().required('Informe o CEP').min(8,'O cep tem que ter 8 digitos ').max(8,'O cep tem que ter 8 digitos '),         
     
        street: yup.string().required('Informe o nome da Rua'),
        number: yup.string().required('Informe o numero da casa'),
        complement: yup.string('Informe o um complemeto'),
        district:  yup.string().required('Informe o bairro'),
        city: yup.string().required('Informe a cidade'),
        UF: yup.string().required('Informe a UF do estado'),
    
    
    });

    const { register, handleSubmit, errors, setError, control, setValue } = useForm({
        resolver: yupResolver(SignupSchema)
    });




    async function buscaCep (numberCep){
       
        let message = '' ;
       
        if (numberCep !== '' && numberCep.length === 8 ) {
            
            try{
                const returnCep = await cep(numberCep);
        
                const {state, city, street, neighborhood } = returnCep;
                    setValue("street", street);
                    setValue("district", neighborhood);
                    setValue("city", city);
                    setValue("UF", state);
                
            }catch(err) {
                
                if(err.errors[1]?.message){ // Erro cep não encontrado
                    // let message = err.errors[1].message;
                    message = 'CEP NAO ENCONTRADO';
                    console.log(message);

              
                }else{ // Formato invalido
                    console.log(err.errors[0].message);
                    message = 'CEP informado possui mais do que 8 caracteres.';
                    console.log(message);

                    // SetErroCep(message)
                    
                }
            }
        } 
        return message       
    }



  
    
    const history = useHistory();
    async function onSubmit(data) {
       
        console.log("Data submitted: ", data);
        // const response = await api.post('users',data);
        // console.log("Retorno")
        // console.log(response);
        // history.push('/signIn');
       
    }
       

    return(
        <Global>
            <Header/>
            
            <Form>
                
                <h2>Cadastratro de dados </h2>
                <form onSubmit={handleSubmit(onSubmit)} noValidate >
                    
                        <div>
                            <label for="fname">Nome:</label>
                            <input type="text" id="fname" name="name"  ref={register} />
                            {errors.name && <p className="error">{errors.name.message}</p>}
                        </div> 
        
                        <div>  
                            <label for="inputEmail">Email:</label>
                            <input type="text" id="inputEmail" name="email"  ref={register} />
                            {errors.email && <p className="error">{errors.email.message}</p>}
                        </div> 
                        

                        <div>  
                            <label for="inputPassword">Senha:</label>
                            <input type="text" id="inputPassword" name="password"  ref={register} />
                            {errors.password && <p className="error">{errors.password.message}</p>}
                        </div>

                        <div>  
                            <label for="inputbirthDate">Data Nascimento:</label>
                            <input type="date" id="inputbirthDate" name="birthDate"  ref={register} />
                            {errors.birthDate && <p className="error">{errors.birthDate.message}</p>}
                        </div>



                        <div>  
                            <label for="inputCep">Cep:</label>
                            <input type="text" id="inputCep" name="cep"  ref={register} 
                                //onBlur={ (e) => buscaCep(e.target.value)}
                                onBlur={ async (e) => {
                                    let resultMessage = await buscaCep(e.target.value);
                                    setError("cep", {
                                      type: "manual",
                                      message: resultMessage
                                    });
                                }}
                            />
                            {errors.cep && <p className="error">{errors.cep.message}</p>}
                        </div>

                        <div>  
                            <label for="inputbirthRua">Rua:</label>
                            <input type="text" id="inputstreet" name="street"  ref={register} />
                            {errors.street && <p className="error">{errors.street.message}</p>}
                        </div>

                        <div>  
                            <label for="inputNumber">Numero:</label>
                            <input type="text" id="inputNumber" name="number"  ref={register} />
                            {errors.number && <p className="error">{errors.number.message}</p>}
                        </div>



                        <div>  
                            <label for="inputComplement">Complemento:</label>
                            <input type="text" id="inputComplement" name="complement"  ref={register} />
                            {errors.complement && <p className="error">{errors.complement.message}</p>}
                        </div>                        
                        
                        <div>  
                            <label for="inputDistrict">Bairro:</label>
                            <input type="text" id="inputDistrict" name="district"  ref={register} />
                            {errors.district && <p className="error">{errors.district.message}</p>}
                        </div>


                        <div>  
                            <label for="inpuCity">Cidade:</label>
                            <input type="text" id="inpuCity" name="city"  ref={register} />
                            {errors.city && <p className="error">{errors.city.message}</p>}
                        </div>


                        
                        <div>  
                            <label for="inputUF">UF Estado:</label>
                            <input type="text" id="inputUF" name="UF"  ref={register} />
                            {errors.UF && <p className="error">{errors.UF.message}</p>}
                        </div>

                    
                        
                        <button type="submit">Concluir</button>                
                    </form>

                </Form>
        </Global>
         
    )

}


export default SignUp;



// return(
//     <Container>
//         <h2>Joezer</h2>
//     </Container>

// )
