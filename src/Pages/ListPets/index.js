import React, {useState, useEffect} from 'react';
import { Global, Section} from './styles';
import  Header  from '../../components/header';
import  Footer from  '../../components/footer';
import  Card from  '../../components/card';
import api from '../../services/api';
// import  FormUser  from  '../../components/formUser';
// import {useAuth} from '../../context/auth';




    
const  ListPets = () => {
  
    const  [listPets, setListPets] = useState([{}]);

    useEffect(() => {
        const token = localStorage.getItem('@MeuPet:token');
        const auth = {
            headers: {Authorization:'Bearer ' +token} 
        }
      
        api.get('pets', auth).then((response) =>{
            setListPets(response.data);
        })
        .catch((error) => {
            alert("Errou")
        })
    

    },[]);

    // function Cardss(props){
    //     const cardsMap = props.map((post) => 
            
    //     );
    // }   


   
    console.log(listPets)
    return(
        <Global> 
            <Header/>

            {/* <h1>Seus Pets Cadastrados</h1> */}

            <Section>

                {   listPets.map( (pet) =>(
                    
                    <Card pet={pet} />
    

                ))
                }
            
            </Section>
            <Footer/>
        </Global>
    )
     
    

}


export default ListPets;


