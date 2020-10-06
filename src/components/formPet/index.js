import React,{useState, useEffect} from 'react';
import { Form, CollectionsInputs} from './styles';
import * as yup from "yup";
import moment from 'moment';
import api from '../../services/api';
import { useHistory } from 'react-router-dom';

const  FormPet = ({optionPage, dataUser }) => {  

    const [isButton, isSetButton] = useState(optionPage);
    const [isReadOnly, isSetReadOnly] = useState(false);
    const [error, setError] = useState([{}]);

    const PetSchema = yup.object().shape({
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



    function Initial (optionPage){
        if( optionPage === "CadastrarPet" ){
            
            return {};

        }else {
        
           const  dadosPet =  {namePet: "Bolinha", sexo: "Femea", racaPet: "pitbull", dataNasc: "2019-02-12", observacao: "Linda", img: "img3" } 
           return  dadosPet;
        }

    }
    
    const [messageForm, setMesssageForm ] = useState(Initial(optionPage));
    const {namePet, dataNasc, observacao, img, racaPet, sexo} = messageForm;
    const [ ErrorMessage, setErrorMessage ] = useState({});
    


  
    async function getErros(){
       


        error.forEach(err => {
    
            // let {path, message} = err
            if(err.path === 'namePet' ){
              
                setErrorMessage({...ErrorMessage,[err.path] : { messager: err.message  } })
                return true;
            }
            if(err.path === 'sexo' ){
               
                setErrorMessage({...ErrorMessage,[err.path] : { messager: err.message  } })
                return true;
                
            }
            if(err.path === 'racaPet' ){
              
                setErrorMessage({...ErrorMessage,[err.path] : { messager: err.message  } })
                return true;
                
            }
            if(err.path === 'dataNasc' ){
             
                setErrorMessage({...ErrorMessage,[err.path] : { messager: err.message  } })
                return true;
             
            }
            if(err.path === 'observacao' ){
               
                setErrorMessage({...ErrorMessage,[err.path] : { messager: err.message  } })
                return true;
            }
     
        });
        
        return false;
        
    }



    useEffect(()=>{
       
        getErros();

    },[error])

    let history = useHistory();

    function handleChange(e){
        messageForm[e.target.name] = e.target.value;
        setMesssageForm({...messageForm})
    }
 
    async function handleSubmit(e){
        
        e.preventDefault();
        
        if( !( await PetSchema.isValid(messageForm) )) {
            console.log("Errrou")
            await PetSchema.validate(messageForm, {abortEarly: false}).catch( function(err){console.log(err);  setError(err.inner) }  )
          
            
        } else{

           
            setErrorMessage({});
            // console.log(messageForm)
            messageForm.userId = dataUser.id;
            // const token = dataUser.token;
            // console.log("TOKEN")
            // console.log(token);
           
            if(optionPage=== 'CadastrarPet'){
                // Manda Para Um Rota
                //console.log("Data submitted: ", messageForm);
                console.log("OIII ENCONTROU")
                console.log(messageForm)
                const token = localStorage.getItem('@MeuPet:token');
                
                const auth = {
                    headers: {Authorization:'Bearer ' +token} 
                }

                const response = await api.post('pets',messageForm, auth);



                // const response = await api.post('pets',messageForm);
                // console.log(response);
                // history.push('/editUser')  

    
            }else if(optionPage=== 'Editar') {
                 // Manda Para Um Rota
            }
          
        }
        

    }

    const racas = [
       
        { value: "pitbull", name: "pitbull" },
        { value: "beage", name: "beage" },
        { value: "lulu Da Pomerania", name: "lulu Da Pomerania" },
        { value: "vira-lata", name: "vira-lata" },
    ];

    const sexos = [
        { value: "Macho", name: "Macho" },
        { value: "Femea", name: "Femea" },
    ]
    
    function UpdateValues(){
        isSetButton('Salvar');
        isSetReadOnly(false);
        // console.log("UpdateValues Entrou")
       
    }
  
    // console.log("USERR");
    // console.log("tokenUser");
    // console.log(localStorage.getItem('@MeuPet:token'));
    return(
   
            <Form>

                { optionPage === 'CadastrarPet' &&  <h2>Cadastratra Pet </h2>  } 
                { optionPage !== 'CadastrarPet' &&  <h2>Editar dados Pet </h2>  } 
                
                <form  onSubmit={e => handleSubmit(e) } >
                    <CollectionsInputs>
                        <div className="ajuste" >
                            <label htmlFor="fnamePet">Nome Pet:</label>
                            <input type="text" id="fnamePet" name="namePet" readOnly={isReadOnly} onChange={e => handleChange(e)} defaultValue={namePet} />
                            {  ( ErrorMessage.namePet )  && <p className="error">{ErrorMessage.namePet.messager}</p> }

                        </div> 
                        
                       

                        <div className="ajuste" >
                            <label htmlFor="fsexo">Sexo do Pet:</label>
                            <select type="text" id="fsexo" name="sexo"  disabled={isReadOnly} onChange={e => handleChange(e)} defaultValue={sexo} >
                                <>
                                <option value=""></option> 
                                {sexos.map( sx => (
                                    <option key={sx.value}  value={sx.value}>{sx.name}</option> 
                                ))}
                                </>
                               
                            </select>
                            {  ( ErrorMessage.sexo )  && <p className="error">{ErrorMessage.sexo.messager}</p> }
                        </div> 

                        <div className="ajuste" >
                            <label htmlFor="fraca">Raça do Pet:</label>
                            <select type="text" id="fraca" name="racaPet"  disabled={isReadOnly} onChange={e => handleChange(e)} defaultValue={racaPet}  >
                                <>
                                <option value=""></option> 
                                {racas.map( rc => (
                                    <option key={rc.value} value={rc.value}>{rc.name}</option> 
                                ))}
                                </>
                            </select>
                            {  ( ErrorMessage.racaPet )  && <p className="error">{ErrorMessage.racaPet.messager}</p> }          
                        </div> 
                        
    
                        <div className="ajuste" >   
                            <label htmlFor="fdataNasc">Data Nascimento:</label>
                            <input type="date" id="fdataNasc" name="dataNasc"  readOnly={isReadOnly} onChange={e => handleChange(e)} defaultValue={dataNasc}  />
                            {  ( ErrorMessage.dataNasc )  && <p className="error">{ErrorMessage.dataNasc.messager}</p> }
                        </div>

                        <div className="ajuste" >
                            <label htmlFor="fobservacao">Observações:</label>
                            <input type="text" id="fobservacao" name="observacao" readOnly={isReadOnly} onChange={e => handleChange(e)} defaultValue={observacao}  />
                            {  ( ErrorMessage.observacao )  && <p className="error">{ErrorMessage.observacao.messager}</p> }
                        </div> 

                        <div className="ajuste" >
                            <label htmlFor="fimg">Imagem:</label>
                            <input type="text" id="fimg" name="img" readOnly={isReadOnly} onChange={e => handleChange(e)} defaultValue={img}  />
                            {  ( ErrorMessage.img )  && <p className="error">{ErrorMessage.img.messager}</p> }
                        </div> 
                        

                       
                    </CollectionsInputs>  
                    {/* {isButton === 'CadastrarPet' ?   <button type="submit">Concluir</button> :  isButton === 'Editar' ? <button type="button "  onClick={() => UpdateValues()  }  >Editar</button> : <button type="submit"  onClick={() => setSave(true)  } >Salvar</button> } */}
                    {isButton === 'CadastrarPet' ?   <button type="submit">Concluir</button> :  isButton === 'Editar' ? <button type="button " onClick={() => UpdateValues()  }  >Editar</button> : <button type="submit" >Salvar</button> }
                    {/* <button type="submit">Concluir</button>  */}
                

                </form>
            </Form>   
         
    )

}


export default FormPet;



