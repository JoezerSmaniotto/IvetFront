import React, { createContext, useState, useEffect,useContext } from 'react'; 
import api from '../services/api';


const ListPetsContext = createContext();

// export default function ListPetsProvider ({children}){
const ListPetsProvider = ({ children }) => {
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


    return(
        <ListPetsProvider.Provider value={{listPets,setListPets}} >
            {children}
       </ListPetsProvider.Provider>

    );

}

function useListPetsUser(){
    const context = useContext(ListPetsContext);
    const {listPets, setListPets} = context;
    return {listPets, setListPets};
}

export { ListPetsProvider, useListPetsUser };