import React,{useState, useEffect} from 'react';
import { Form, CollectionsInputs} from './styles';
import * as yup from "yup";
import moment from 'moment';

const  FormPet = ({optionPage, dataUser}) => {  

    const [isButton, isSetButton] = useState(optionPage);
    const [isReadOnly, isSetReadOnly] = useState(false);
    const [error, setError] = useState([{}]);
    // const [mess, setMess] = useState({});

    const PetSchema = yup.object().shape({
        namePet: yup.string().required('Nome obrigatório'),
        raca: yup.string().required('Raça obrigatório'),
        sexo: yup.string().required('Sexo do pet obrigatório'),
        dataNasc: yup.string().required("Informe Uma data").test('validaData','Verifique a data', (value) => {
            const dataAtual = moment().format('YYYY-MM-DD')
            const data = moment(value).isBetween('1900-01-01',dataAtual)
            return data;   
        }),
        observacao: yup.string().required('Informe dados do pet'),         
        img: yup.string(),   
    });



    function Teste (optionPage){
        if( optionPage === "CadastrarPet" ){
            return {};
        }else {
        //    console.log("oiii1")
           const  dadosPet =  {namePet: "Bolinha", sexo: "Femea", raca: "pitbull", dataNasc: "2019-02-12", observacao: "Linda", img: "img3" } 
           
        //    isSetButton('Editar');
        //    console.log("oiii2")
           return  dadosPet;
        }

    }

    
    
    const [messageForm, setMesssageForm ] = useState(Teste(optionPage));
    const {namePet, dataNasc, observacao, img, raca, sexo} = messageForm;

    const [messageError, setMessageError ] = useState({});
    let {ErrorNamePet, ErrorDataNasc, ErrorObservacao, ErrorImg, ErrorRaca, ErrorSexo} = messageError;

    let ErrorMessage;
    // function getErros(er){
    async function getErros(){
        // let ErrorMessage;
        // console.log("ERROOOO")
        // console.log(error)
        ErrorNamePet= false; 


        error.forEach(err => {
            console.log(err)
            if(err.path === 'namePet' ){
                setMessageError( {...messageError, ["ErrorNamePet"]:true })
                
                console.log("ERROOOO")
                return true;
            }
            if(err.path === 'namePet' ){
                setMessageError( {...messageError, ["ErrorNamePet"]:true })
                
                console.log("ERROOOO")
                return true;
            }
            
        
          
        });
        
        return false;
        // return ErrorMessage;
    }



    useEffect(()=>{
        // console.log("Chamouuu ")
        getErros();

    },[error])


    function handleChange(e){
        messageForm[e.target.name] = e.target.value;
        setMesssageForm({...messageForm})
    }
 
    async function handleSubmit(e){

        e.preventDefault();
        
        if( !( await PetSchema.isValid(messageForm) )) {
            console.log("Errrou")
            await PetSchema.validate(messageForm, {abortEarly: false}).catch( function(err){console.log(err);  setError(err.inner) }  )
            // const res = await getErros();
           
           


        } else{
            setMessageError({})
            messageForm.userId = dataUser.id;
            if(optionPage=== 'CadastrarPet'){
                // Manda Para Um Rota
    
            }else if(optionPage=== 'Editar') {
                 // Manda Para Um Rota
            }
            console.log("Alterou")
            console.log(messageForm)
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
        console.log("UpdateValues Entrou")
       
    }
    // console.log(" Var error");
    // console.log(error)
    console.log(error)
    console.log(ErrorNamePet)
    return(
   
            <Form>

                { optionPage === 'CadastrarPet' &&  <h2>Cadastratra Pet </h2>  } 
                { optionPage !== 'CadastrarPet' &&  <h2>Editar dados Pet </h2>  } 
                
                <form  onSubmit={e => handleSubmit(e) } >
                    <CollectionsInputs>
                        <div className="ajuste" >
                            <label htmlFor="fnamePet">Nome Pet:</label>
                            <input type="text" id="fnamePet" name="namePet" readOnly={isReadOnly} onChange={e => handleChange(e)} defaultValue={namePet} />
                            {  ( ErrorNamePet === true )  && <p>Erro Nome</p> }
                            {/* {console.log("Form")} */}
                            {/* {console.log(getErros("namePet"))} */}
                            {/* {(getErros("namePet")) === true && <p>"Erro Aqui"</p>} */}
                        
                            {/* {errors.namePet && <p className="error">{errors.namePet.message}</p>} */}
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
                             {/* {errors.sexo && <p className="error">{errors.sexo.message}</p>} */}
                        </div> 

                        <div className="ajuste" >
                            <label htmlFor="fraca">Raça do Pet:</label>
                            <select type="text" id="fraca" name="raca"  disabled={isReadOnly} onChange={e => handleChange(e)} defaultValue={raca}  >
                                <>
                                <option value=""></option> 
                                {racas.map( rc => (
                                    <option key={rc.value} value={rc.value}>{rc.name}</option> 
                                ))}
                                </>
                                {/* <option value="valor1">Valor 1</option>  */}
                            </select>
                             {/* {errors.raca && <p className="error">{errors.raca.message}</p>} */}
                        </div> 
                        
    
                        <div className="ajuste" >   
                            <label htmlFor="fdataNasc">Data Nascimento:</label>
                            <input type="date" id="fdataNasc" name="dataNasc"  readOnly={isReadOnly} onChange={e => handleChange(e)} defaultValue={dataNasc}  />
                            {/* {errors.dataNasc && <p className="error">{errors.dataNasc.message}</p>} */}
                        </div>

                        <div className="ajuste" >
                            <label htmlFor="fobservacao">Observações:</label>
                            <input type="text" id="fobservacao" name="observacao" readOnly={isReadOnly} onChange={e => handleChange(e)} defaultValue={observacao}  />
                            {/* {errors.observacao && <p className="error">{errors.observacao.message}</p>} */}
                        </div> 

                        <div className="ajuste" >
                            <label htmlFor="fimg">Imagem:</label>
                            <input type="text" id="fimg" name="img" readOnly={isReadOnly} onChange={e => handleChange(e)} defaultValue={img}  />
                            {/* {errors.img && <p className="error">{errors.img.message}</p>} */}
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




 // console.log("Oi 11")
            // console.log(err?.path)
            // console.log(err?.message)
            // ErrorMessage[err?.path] = err?.message;
            // console.log("Oi 12")
            // ErrorMessage[error.path] = error.message;
            // ValidationErrors[error.path] = error.mgetErrosessage;
            // console.log("ESSE AQUI")
            // console.log(err.path)
            // console.log(er)
            // if(er === err.path ){
            //     console.log("oiii11")
            //     return true;
            // }