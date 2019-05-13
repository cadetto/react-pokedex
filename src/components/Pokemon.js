import React from 'react';

const Pokemon = ({index,name}) => {
    return(
        <div className="pokemonSingle"> 
            <img className="pokemonSprite" src={`${process.env.PUBLIC_URL}/sprites/${index}.png`} alt=""/>
            <div>{name}</div>
        </div>
    )
}

export default Pokemon;