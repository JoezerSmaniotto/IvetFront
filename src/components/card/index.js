import React from 'react';
import {Component} from './styles';

const Card = ( {pet} ) => {


    return(
        <Component>
            <div className="card">
                {/* <!-- <div class="topCard">
                    <h2 class="title">Titulo Card</h2>
                    <span class="secondText">Aqui é um texto secundário</span>
                </div> --> */}
                <div className="mediaCard">
                    
                </div>
                <div className="bottomCard">
                    <span className="bottomText">{pet.namePet }</span> 
                    <div className="actionCard">
                        <button className="actions">Curtir</button>
                        <button className="actions">Compartilhar</button>
                    </div>
                </div>
            </div>       
          
        </Component>
    )
}

export default Card;