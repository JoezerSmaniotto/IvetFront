import React,{useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import { useForm, Controller } from "react-hook-form";
import {Container, CollectionInput, Teste } from './styles';
import { yupResolver } from '@hookform/resolvers';
import * as yup from "yup";
import { TextField } from '@material-ui/core';
import  Header  from '../../components/header';
import api from '../../services/api';
import cep from 'cep-promise';
import {useAuth} from '../../context/auth';




    
const  EditUser = () => {
    const {user} = useAuth ();
    console.log("user");
    console.log(user);
    

   
    const SignupSchema = yup.object().shape({
        name: yup.string().required('Nome obrigatório'),
        email: yup.string().required('E-mail obrigatório').email('Digite um e-mail válido'),
        password: yup.string().required('No minimo 6 caracteres').min(6,'A Senha deve ter no minimo 6 caracteres'),
        // data: yup.date().min( new Date(1900,01,01), 'Informe Uma data Valida' ),
        // data:yup.date().test('valida','Informe a data correta',(value)=>( console.log(value))),
        birthDate: yup.string().required("Informe Uma data"),
        // cep: yup.string().required(erroCep)  
        //cep: yup.string().required('Informe o CEP').min(8,'O cep tem que ter 8 digitos ').max(8,'O cep tem que ter 8 digitos '),
        // cep: yup.string().test(),
        //cep: yup.string().required('Informe o CEP').min(8,'O cep tem que ter 8 digitos ').max(8,'O cep tem que ter 8 digitos ').test('Cep não encontrado', function() {
            
     
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

    function FillFromData(){
        const {birthDate, cep, city, complement, district, email, name, number, street,UF } = user;
        setTimeout(() => {
            setValue("birthDate", birthDate);
            setValue("cep", cep);
            setValue("city", city);
            setValue("inputComplement", complement);
            setValue("district", district);
            setValue("email", email);
            setValue("name", name);
            setValue("number", number);
            setValue("street", street);
            setValue("UF", UF);
            console.log("restu")
        }, 1000);
        console.log("React NJOJN")
    }

   useEffect(()=>{
    FillFromData();
   })


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



  
    
    //const history = useHistory();
    async function onSubmit(data) {
       
        console.log("Data submitted: ", data);
        // const response = await api.post('users',data);
        // console.log("Retorno")
        // console.log(response);
        // history.push('/signIn');
       
    }
       

    return(
        <Teste>
            <Header/>
            <Container>
                <h2>Editar Usuário </h2>
                <form onSubmit={handleSubmit(onSubmit)} noValidate >
                    <CollectionInput>    

                        <div>
                            <Controller 
                                render={(props) =>  <TextField {...props} type="text" label="Nome" />  }
                                name="name"
                                control={control}
                                defaultValue=""
                            />
                            {errors.street && <p className="error">{errors.street.message}</p>}
                        </div>

                        {/* <div>
                            <TextField
                            
                                id="inputNome"
                                type="text"
                                name="name"
                                inputRef={register}
                                label='Nome'
                            />
                            {errors.name && <p className="error">{errors.name.message}</p>}
                        </div>  */}

                        <div>
                            <Controller 
                                
                                render={(props) =>  <TextField {...props} type="text" label="E-mail" />  }
                                name="email"
                                control={control}
                                defaultValue=""
                            />
                            {errors.street && <p className="error">{errors.street.message}</p>}
                        </div>
        
                        {/* <div>  
                            <TextField
                            
                                id="inputEmail"
                                type="text"
                                name="email"mensa
                                label='E-mail'
                                inputRef={register}
                            />
                            {errors.email && <p className="error">{errors.email.message}</p>}
                        </div>  */}

                        <div>
                            <Controller 
                                
                                render={(props) =>  <TextField {...props} type="password" label="Senha" />  }
                                name="street"
                                control={control}
                                defaultValue=""
                            />
                            {errors.street && <p className="error">{errors.street.message}</p>}
                        </div>

                        
                        {/* <div>    
                            <TextField
                            
                                type="password"
                                name="password"
                                id="inputPassword"
                                label='Senha'
                                inputRef={register}
                            />
                            {errors.password && <p className="error">{errors.password.message}</p>}
                        </div> */}

                        <div>
                            <Controller 
                                
                                render={(props) =>  <TextField {...props} type="date" label="Data Nascimento" className="classDate"  inputRef={register}
                                InputLabelProps={{
                                shrink: true,
                                }} />  }
                                name="birthDate"
                                control={control}
                                defaultValue=""
                            />
                            {errors.street && <p className="error">{errors.street.message}</p>}
                        </div>



                        {/* <div>
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
                        </div> */}

                        <div>
                            <Controller 
                                
                                render={(props) =>  <TextField {...props} label="Cep"
                                onBlur={ async (e) => {
                                    let resultMessage = await buscaCep(e.target.value);
                                    setError("cep", {
                                      type: "manual",
                                      message: resultMessage
                                    });
                                }}
                                
                                />  }
                                name="cep"
                                control={control}
                                defaultValue=""
                            />
                            {errors.street && <p className="error">{errors.street.message}</p>}
                        </div>

                    
                        {/* <div>
                            <TextField
                            
                                type="type"
                                name="cep"
                                id="inputCep"
                                label='Cep'
                              
                               
                                onBlur={ async (e) => {
                                    let resultMessage = await buscaCep(e.target.value);
                                    setError("cep", {
                                      type: "manual",
                                      message: resultMessage
                                    });
                                }}
                                inputRef={register}
                                
                            /> 
                            {errors.cep && <p className="error">{errors.cep.message}</p>}
                       
                        </div> */}

                        <div>
                            <Controller 
                                
                                render={(props) =>  <TextField {...props} disabled={true} label="Rua" />  }
                                name="street"
                                control={control}
                                defaultValue=""
                            />
                            {errors.street && <p className="error">{errors.street.message}</p>}
                        </div>

                        

                        <div>
                            <Controller 
                                
                                render={(props) =>  <TextField {...props} disabled={true} label="Number" />  }
                                name="number"
                                control={control}
                                defaultValue=""
                            />
                            {errors.number && <p className="error">{errors.number.message}</p>}
                        </div>



                        {/* 
                        <div>
                            <TextField
                            
                                type="type"
                                name="number"
                                id="inputNumber"
                                label='Number'
                                inputRef={register}
                            /> 
                            {errors.number && <p className="error">{errors.number.message}</p>}
                        </div> */}

                        <div>
                            <Controller
                                render={(props) => <TextField {...props} label="Complemento" />}
                                name="inputComplement"
                                control={control}
                                defaultValue=""
                            />
                            {errors.complement && <p className="error">{errors.complement.message}</p>}
                        </div>

                        {/* <div>
                            <TextField
                            
                                type="type"
                                name="complement"
                                id="inputComplement"
                                label='Complemento'
                                inputRef={register}
                            /> 
                            {errors.complement && <p className="error">{errors.complement.message}</p>}
                         </div>
                         */}
                        <div>
                            <Controller
                                render={(props) => <TextField {...props} disabled={true} label="Bairro" />}
                                name="district"
                                control={control}
                                defaultValue=""
                            />
                            {errors.district && <p className="error">{errors.district.message}</p>}
                        </div>
                 
                        <div>

                            <Controller
                                render={(props) => <TextField {...props}  disabled={true}  label="Cidade" />}
                                name="city"
                                control={control}
                                defaultValue=""
                            />
                            {errors.city && <p className="error">{errors.city.message}</p>}
                        </div>

                        <div>

                            <Controller
                                render={(props) => <TextField {...props}  disabled={true}  label="UF" />}
                                name="UF"
                                control={control}
                                defaultValue=""
                            />
                            {errors.UF && <p className="error">{errors.UF.message}</p>}
                        </div>

                        </CollectionInput> 
                        
                        <button type="submit">Concluir</button>                
                    </form>
            </Container>
        </Teste>
    )

}


export default EditUser;


