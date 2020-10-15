import React, {useState, useEffect} from 'react';
import { Global, Section} from './styles';
import  Header  from '../../components/header';
import  Footer from  '../../components/footer';
import  Card from  '../../components/card';
import api from '../../services/api';
import FormEditPet from '../../components/formEditPet';
// import {useListPetsUser} from '../../context/index';

    
const  ListPets = () => {
    // const {listPets, setListPets} = useListPetsUser();
        
    const  [listPets, setListPets] = useState([{}]);
    const  [editPet, setEditPet] = useState();
    


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


    // console.log(listPets);
    return(
        <Global> 
            <Header/>
           

            { editPet &&

                <FormEditPet optionPage={editPet}  setEditPet={setEditPet} setListPets={setListPets} listPets={listPets}  />

            }

            <h1>Seus Pets Cadastrados</h1>
            <Section>

                {   
                    listPets.map( (pet) =>(
                    
                        // <Card pet={pet} delCard={delete(pet.id)}/>
                        <Card pet={pet} listPets={listPets} setListPets={setListPets} setEditPet={setEditPet} />

                    ))
                }
            
            </Section>
            <Footer/>
        </Global>
    )
     
    

}


export default ListPets;


