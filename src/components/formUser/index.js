import React,{useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { Form, CollectionsInputs} from './styles';
import { yupResolver } from '@hookform/resolvers';
import * as yup from "yup";
import api from '../../services/api';
import cep from 'cep-promise';
import moment from 'moment';

    
const  FormUser = ({optionPage, dataUser}) => {  
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

    const { register, handleSubmit, errors, setError, setValue } = useForm({
        resolver: yupResolver(SignupSchema)
    });


    const [isButton, isSetButton] = useState(optionPage);
    const [isReadOnly, isSetReadOnly] = useState(false);

    // console.log("isButton");
    // console.log(isButton);

    function UpdateValues(){
        isSetButton('Salvar');
        console.log('Oiii Jojo')
        isSetReadOnly(false);
    }


    useEffect(() => {
        if(dataUser){
      
            const {birthDate, cep, city, complement, district, email, name, number, street,UF } = dataUser;
            const [Birth,] = birthDate.split('T');
            setValue("birthDate", Birth);
            setValue("cep", cep);
            setValue("city", city);
            setValue("complement", complement);
            setValue("district", district);
            setValue("email", email);
            setValue("name", name);
            setValue("number", number);
            setValue("street", street);
            setValue("UF", UF);

            isSetReadOnly(true);
        
        }

    },[dataUser]);


    

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
                    setValue("street", '');
                    setValue("district",'');
                    setValue("city", '');
                    setValue("UF", '');

              
                }else{ // Formato invalido
                    console.log(err.errors[0].message);
                    message = 'CEP informado possui mais do que 8 caracteres.';
                    console.log(message);  
                }
            }
        } 
        return message       
    }

      const [save, setSave] = useState(false);
  
    const history = useHistory();
    async function onSubmit(data) {
        if(isButton === 'Cadastrar'){
            console.log("Data submitted: ", data);
            const response = await api.post('users',data);
            // console.log("Retorno")
            console.log(response);
            history.push('/signIn')          
        }
        if(isButton === 'Salvar' &&  save ){
            console.log("Data submitted Edit: ", data);
        }
            
    }
    
    return(
   
         <Form>
                
                <h2>Cadastratro de dados </h2>
                <form onSubmit={handleSubmit(onSubmit)} noValidate >
                    <CollectionsInputs>
                        <div>
                            <label htmlFor="fname">Nome:</label>
                            <input type="text" id="fname" name="name" readOnly={isReadOnly} ref={register} />
                            {errors.name && <p className="error">{errors.name.message}</p>}
                        </div> 
        
                        <div>  
                            <label htmlFor="inputEmail">Email:</label>
                            <input type="text" id="inputEmail" name="email" readOnly={isReadOnly}  ref={register} />
                            {errors.email && <p className="error">{errors.email.message}</p>}
                        </div> 
                        
                        {
                            optionPage === 'Cadastrar' && 
                            <div>  
                              <label htmlFor="inputPassword">Senha:</label>
                              <input type="password" id="inputPassword" name="password" ref={register} />
                              {errors.password && <p className="error">{errors.password.message}</p>}
                             </div>
                            
                        }
                        
                        {/* <div>  
                            <label htmlFor="inputPassword">Senha:</label>
                            <input type="password" id="inputPassword" name="password" ref={register} />
                            {errors.password && <p className="error">{errors.password.message}</p>}
                        </div> */}

                        <div>  
                            <label htmlFor="inputbirthDate">Data Nascimento:</label>
                            <input type="date" id="inputbirthDate" name="birthDate"  readOnly={isReadOnly} ref={register} />
                            {errors.birthDate && <p className="error">{errors.birthDate.message}</p>}
                        </div>



                        <div>  
                            <label htmlFor="inputCep">Cep:</label>
                            <input type="text" id="inputCep" name="cep" readOnly={isReadOnly}  ref={register} 
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
                            <label htmlFor="inputbirthRua">Rua:</label>
                            <input type="text" id="inputstreet" name="street" readOnly={true} ref={register} />
                            {errors.street && <p className="error">{errors.street.message}</p>}
                        </div>

                        <div>  
                            <label htmlFor="inputNumber">Numero:</label>
                            <input type="text" id="inputNumber" name="number" readOnly={isReadOnly}  ref={register} />
                            {errors.number && <p className="error">{errors.number.message}</p>}
                        </div>



                        <div>  
                            <label htmlFor="inputComplement">Complemento:</label>
                            <input type="text" id="inputComplement" name="complement" readOnly={isReadOnly}  ref={register} />
                            {errors.complement && <p className="error">{errors.complement.message}</p>}
                        </div>                        
                        
                        <div>  
                            <label htmlFor="inputDistrict">Bairro:</label>
                            <input type="text" id="inputDistrict" name="district"  readOnly={true} ref={register} />
                            {errors.district && <p className="error">{errors.district.message}</p>}
                        </div>


                        <div>  
                            <label htmlFor="inpuCity">Cidade:</label>
                            <input type="text" id="inpuCity" name="city" readOnly={true} ref={register} />
                            {errors.city && <p className="error">{errors.city.message}</p>}
                        </div>


                        
                        <div>  
                            <label htmlFor="inputUF">UF Estado:</label>
                            <input type="text" id="inputUF" name="UF" readOnly={true} ref={register} />
                            {errors.UF && <p className="error">{errors.UF.message}</p>}
                        </div>
                        
                    </CollectionsInputs>  
                    {/* {optionPage === 'Cadastrar' ?   <button type="submit">Concluir</button> :  <button type="button"  >Editar</button>  } */}
                    {isButton === 'Cadastrar' ?   <button type="submit">Concluir</button> :  isButton === 'Editar' ? <button type="button "  onClick={() => UpdateValues()  }  >Editar</button> : <button type="submit"  onClick={() => setSave(true)  } >Salvar</button> }
                            
                </form>
            </Form>
         
    )

}


export default FormUser;



// return(
//     <Container>
//         <h2>Joezer</h2>
//     </Container>

// )
