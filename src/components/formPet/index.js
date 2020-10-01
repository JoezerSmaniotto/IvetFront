import React,{useState, useEffect} from 'react';
import { Form, CollectionsInputs} from './styles';




const  FormPet = ({optionPage, dataUser}) => {  


    function Teste (inici){
        if(inici){
            return {};
        }else {
           const  dadosPet =  {namePet: "Bolinha", sexo: "Femea", raca: "pitbull", dataNasc: "2019-02-12", observacao: "Linda", img: "img3" } 
           return  dadosPet;
        }
    }
    
    const [messageForm, setMesssageForm ] = useState(Teste(true));
    const {namePet, dataNasc, observacao, img, raca, sexo} = messageForm;

    // useEffect(() => {
    //     setMesssageForm({...messageForm, ['namePet']:'' })
      
    // },[]);

    function handleChange(e){
        messageForm[e.target.name] = e.target.value;
        setMesssageForm({...messageForm})
    }
 
    function handleSubmit(e){
        e.preventDefault();
    
        console.log(messageForm)
    
        // console.log(namePet, dataNasc, observacao, img )
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
   




    const [isButton, isSetButton] = useState(optionPage);
    const [isReadOnly, isSetReadOnly] = useState(false);




 
    // function UpdateValues(){
    //     isSetButton('Salvar');
    //     isSetReadOnly(false);
       
    // }

    
    // useEffect(() => {
    //     if(dataUser){
            
           
        
    //     }

    // },[dataUser, setValue]);
    return(
   
            <Form>

                {/* { optionPage === 'CadastrarPet' &&  <h2>Cadastratra Pet </h2>  } 
                { optionPage !== 'CadastrarPet' &&  <h2>Editar dados Pet </h2>  }  */}
                
                <h2>Cadastratra Pet </h2>
                <form  onSubmit={e => handleSubmit(e) } >
                    <CollectionsInputs>
                        <div className="ajuste" >
                            <label htmlFor="fnamePet">Nome Pet:</label>
                            <input type="text" id="fnamePet" name="namePet" readOnly={isReadOnly} onChange={e => handleChange(e)} defaultValue={namePet} />
                            {/* {errors.namePet && <p className="error">{errors.namePet.message}</p>} */}
                        </div> 


                        <div className="ajuste" >
                            <label htmlFor="fsexo">Sexo do Pet:</label>
                            <select type="text" id="fsexo" name="sexo"  readOnly={isReadOnly} onChange={e => handleChange(e)} defaultValue={sexo} >
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
                            <select type="text" id="fraca" name="raca"  readOnly={isReadOnly} onChange={e => handleChange(e)} defaultValue={raca}  >
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
                    {/* {optionPage === 'Cadastrar' ?   <button type="submit">Concluir</button> :  <button type="button"  >Editar</button>  } */}
                    {/* {isButton === 'Cadastrar' ?   <button type="submit">Concluir</button> :  isButton === 'Editar' ? <button type="button "  onClick={() => UpdateValues()  }  >Editar</button> : <button type="submit"  onClick={() => setSave(true)  } >Salvar</button> } */}
                    <button type="submit">Concluir</button> 

                </form>
            </Form>   
         
    )

}


export default FormPet;

