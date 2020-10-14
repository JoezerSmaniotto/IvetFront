import React, {useState, useEffect} from 'react';
// import React from 'react';
import { Global, Section} from './styles';
import  Header  from '../../components/header';
import  Footer from  '../../components/footer';
import  Card from  '../../components/card';
import api from '../../services/api';
// import {useListPetsUser} from '../../context/index';

// import  FormUser  from  '../../components/formUser';
// import {useAuth} from '../../context/auth';




    
const  ListPets = () => {
    // const {listPets, setListPets} = useListPetsUser();
        
    const  [listPets, setListPets] = useState([{}]);
    

    useEffect(() => {
        // if(!controll){
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


    console.log(listPets);
    return(
        <Global> 
            <Header/>
           
            <h1>Seus Pets Cadastrados</h1>

            <Section>

                {   
                    listPets.map( (pet) =>(
                    
                        // <Card pet={pet} delCard={delete(pet.id)}/>
                        <Card pet={pet} listPets={listPets} setListPets={setListPets} />

                    ))
                }
            
            </Section>
            <Footer/>
        </Global>
    )
     
    

}


export default ListPets;


