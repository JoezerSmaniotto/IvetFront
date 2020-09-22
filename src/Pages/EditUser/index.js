import React from 'react';
import { Global} from './styles';
import  Header  from '../../components/header';
import  Footer from  '../../components/footer';
import  FormUser  from  '../../components/formUser';
import {useAuth} from '../../context/auth';




    
const  EditUser = () => {
    const {user} = useAuth ();
    console.log("user");
    console.log(user);
    

   

//     function FillFromData(){
//         const {birthDate, cep, city, complement, district, email, name, number, street,UF } = user;
//         setTimeout(() => {
//             setValue("birthDate", birthDate);
//             setValue("cep", cep);
//             setValue("city", city);
//             setValue("inputComplement", complement);
//             setValue("district", district);
//             setValue("email", email);
//             setValue("name", name);
//             setValue("number", number);
//             setValue("street", street);
//             setValue("UF", UF);
//             console.log("restu")
//         }, 1000);
//         console.log("React NJOJN")
//     }

//    useEffect(()=>{
//     FillFromData();
//    })


   
    return(
        <Global> 
            <Header/>
            <FormUser optionPage={'Editar'} dataUser={user} />
            <Footer/>
        </Global>
    )
     
    

}


export default EditUser;


