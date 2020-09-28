import React,{useState} from 'react';
// import { useHistory } from 'react-router-dom';
import { useForm,   Controller} from "react-hook-form";
import ReactSelect from "react-select";
import { Form, CollectionsInputs} from './styles';
import { yupResolver } from '@hookform/resolvers';
import * as yup from "yup";
// import api from '../../services/api';
import moment from 'moment';

    
const  FormRegister = ({optionPage, dataUser}) => {  
    const SignupSchema = yup.object().shape({
        namePet: yup.string().required('Nome obrigatório'),
        racaPet: yup.string().required('Raça obrigatório'),
        sexo: yup.string().required('Sexo do pet obrigatório'),
        dataNasc: yup.string().required("Informe Uma data").test('validaData','Verifique a data', (value) => {
            const dataAtual = moment().format('YYYY-MM-DD')
            const data = moment(value).isBetween('1900-01-01',dataAtual)
            return data;   
        }),
        observacao: yup.string().required('Informe dados do pet'),         
        img: yup.string(),   
    });

    const { register, handleSubmit, errors, control } = useForm({
        resolver: yupResolver(SignupSchema)
    });

    const racas = [
        { value: "pitbull", label: "pitbull" },
        { value: "beage", label: "beage" },
        { value: "lulu Da Pomerania", label: "lulu Da Pomerania" },
        { value: "vira-lata", label: "vira-lata" },
  
    ]


    // const [isButton, isSetButton] = useState(optionPage);
    const [isReadOnly, isSetReadOnly] = useState(false);

 
    // function UpdateValues(){
    //     isSetButton('Salvar');
    //     isSetReadOnly(false);
       
    // }


    // useEffect(() => {
    //     if(dataUser){
      
    //         const {birthDate, cep, city, complement, district, email, name, number, street,UF } = dataUser;
    //         const [Birth,] = birthDate.split('T');
    //         setValue("birthDate", Birth);
    //         setValue("cep", cep);
    //         setValue("password", '1234567890');
    //         setValue("city", city);
    //         setValue("complement", complement);
    //         setValue("district", district);
    //         setValue("email", email);
    //         setValue("name", name);
    //         setValue("number", number);
    //         setValue("street", street);
    //         setValue("UF", UF);

    //         isSetReadOnly(true);
        
    //     }

    // },[dataUser, setValue]);

    //const [save, setSave] = useState(false);
    
    // const history = useHistory();
    async function onSubmit(data) {
        // if(isButton === 'Cadastrar'){
            data.userId = dataUser.id;
            console.log("Data submitted: ", data);
            // const response = await api.post('pets',data);
            // console.log(response);
            // history.push('/signIn')          
        // }
        // if(isButton === 'Salvar' &&  save ){
        //     console.log("Data submitted Edit: ", data);
        //     isSetButton('Editar');
        //     isSetReadOnly(true);
        //     setSave(false);
           

        // }
            
    }
    
    return(
   
         <Form>
                { optionPage === 'CadastrarPet' &&  <h2>Cadastratra Pet </h2>  } 
                { optionPage !== 'CadastrarPet' &&  <h2>Editar dados Pet </h2>  } 

                <form onSubmit={handleSubmit(onSubmit)} noValidate >
                    <CollectionsInputs>
                        <div>
                            <label htmlFor="fnamePet">Nome Pet:</label>
                            <input type="text" id="fnamePet" name="namePet" readOnly={isReadOnly} ref={register} />
                            {errors.namePet && <p className="error">{errors.namePet.message}</p>}
                        </div> 

                        <div>
                            <label htmlFor="fracaPet">Raça Pet:</label>
                            <input type="text" id="fracaPet" name="racaPet" readOnly={isReadOnly} ref={register} />
                            {errors.racaPet && <p className="error">{errors.racaPet.message}</p>}
                        </div> 

                        {/* <div>
                            <label htmlFor="fsexo">Sexo do Pet:</label>
                            <select type="text" id="fsexo" name="sexo" readOnly={isReadOnly} ref={register} />
                            {errors.sexo && <p className="error">{errors.sexo.message}</p>}
                        </div>  */}

                        {/* <div>
                            <label htmlFor="fsexo">Sexo do Pet:</label>
                            <select name="select" id="fsexo" ref={register} >
                                <option value="PitBull">PitBull</option> 
                                <option value="valor2" selected >---------</option>
                                <option value="ViraLata">Vira Lata</option>
                            </select>
                        </div>  */}

                        <div>
                            <div className="DivSelect" >
                                <section class="SelectRaca" >
                                    <label>Raça</label>
                                    <Controller
                                    as={ReactSelect}
                                    options={racas}
                                    name="ReactSelect"
                                    isClearable
                                    control={control}
                                    />
                                </section>
                            </div>
                        </div>
        
                        <div>
                            <label htmlFor="fsexo">Sexo do Pet:</label>
                            <input type="text" id="fsexo" name="sexo" readOnly={isReadOnly} ref={register} />
                            {errors.sexo && <p className="error">{errors.sexo.message}</p>}
                        </div> 

                        <div>  
                            <label htmlFor="fdataNasc">Data Nascimento:</label>
                            <input type="date" id="fdataNasc" name="dataNasc"  readOnly={isReadOnly} ref={register} />
                            {errors.dataNasc && <p className="error">{errors.dataNasc.message}</p>}
                        </div>

                        <div>
                            <label htmlFor="fobservacao">Observações:</label>
                            <input type="text" id="fobservacao" name="observacao" readOnly={isReadOnly} ref={register} />
                            {errors.observacao && <p className="error">{errors.observacao.message}</p>}
                        </div> 

                        <div>
                            <label htmlFor="fimg">Imagem:</label>
                            <input type="text" id="fimg" name="img" readOnly={isReadOnly} ref={register} />
                            {errors.img && <p className="error">{errors.img.message}</p>}
                        </div> 
                        

                       
                    </CollectionsInputs>  
                    {/* {optionPage === 'Cadastrar' ?   <button type="submit">Concluir</button> :  <button type="button"  >Editar</button>  } */}
                    {/* {isButton === 'Cadastrar' ?   <button type="submit">Concluir</button> :  isButton === 'Editar' ? <button type="button "  onClick={() => UpdateValues()  }  >Editar</button> : <button type="submit"  onClick={() => setSave(true)  } >Salvar</button> } */}
                    <button type="submit">Concluir</button> 

                </form>
            </Form>
         
    )

}


export default FormRegister;

