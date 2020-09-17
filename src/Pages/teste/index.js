import React,{useState} from 'react';
import { useForm } from "react-hook-form";
import {Container} from './styles';
import { TextField } from '@material-ui/core';


  

const  SignUp = () => {
    
    const [ dadosForm, setdadosForm ] = useState({});
    const [ click, setclick  ] = useState(false);
    const submitForm = () =>{
        setclick(true);
        if( click && dadosForm.name && dadosForm.email && (dadosForm.email.indexOf('@')!=-1) ){
            console.log(dadosForm)
            
        }
    }


    return(

        <frrom>    
        <>
            <TextField
                label='Nome'
                onChange={e => {setdadosForm({...dadosForm,['name']:e.target.value })}}
            />
            { (click && !dadosForm.name) && <><span>Preencha o Campo </span> </>} 

            <TextField
                label='E-mail'
                onChange={e => {setdadosForm({...dadosForm,['email']:e.target.value })}}
            />
            { (click && !dadosForm.email) && <><span>Preencha o Campo </span> </>}
            { (click && dadosForm.email) && <> {dadosForm.email.indexOf('@')==-1&& <> <span>E-mail Invalido </span> </> } </>} 

            <button onClick={submitForm} >Enviar</button>
        </>

    )

}


export default SignUp;



// return(
//     <Container>
//         <h2>Joezer</h2>
//     </Container>

// )
