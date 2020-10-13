import React from 'react';
import {Component} from './styles';

const Card = ( {pet} ) => { 

    const deletePet = (id) => {
        console.log("ID", id);

    }


    return(
        <Component>
            <div className="card">
                <div className="mediaCard">
                </div>
                <div className="bottomCard">
                    <p className="bottomText">{pet.namePet }</p> 
                    <div className="description">
                        <span className="descriptionSpan">{pet.racaPet }</span>  <span className="descriptionSpan">{pet.sexo }</span>
                        
                    </div>
                    <div className="actionCard">
                        <button className="actions">Editar</button>
                        <button className="actions" onClick={() => deletePet(pet.id)} >Excluir</button>
                    </div>
                </div>
            </div>       
          
        </Component>
    )
}

export default Card;



// <Component>
//     <div className="card">
//         {/* <!-- <div class="topCard">
//             <h2 class="title">Titulo Card</h2>
//             <span class="secondText">Aqui é um texto secundário</span>
//         </div> --> */}
//         <div className="mediaCard">
            
//         </div>
//         <div className="bottomCard">
//             <p className="bottomText">{pet.namePet }</p> 
//             {/* <p className="description">{pet.namePet }</p>  */}
//             <div className="description">
//                 <span className="descriptionSpan">{pet.racaPet }</span>  <span className="descriptionSpan">Sexo:{pet.sexo }</span>
                
//             </div>
//             <div className="actionCard">
//                 <button className="actions">Editar</button>
//                 <button className="actions">Excluir</button>
//             </div>
//         </div>
//     </div>       
    
// </Component>