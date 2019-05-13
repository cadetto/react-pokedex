import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import Pokemon from './Pokemon';


const PokeList = () => {

    const [pokedexinfo,setPokedex] = useState([])

    const fetchPokedex = async () => {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=150');
        const pokedex = await response.json();
        setPokedex(pokedex.results);
    }

    useEffect(() => {
        fetchPokedex();
    },[])

    return(
        <div className="pokedexContainer">
            <h2>Kanto pokedex</h2>
            <div className="pokedex">
                {pokedexinfo.map((pokemon,index) => (
                    <Link to={`./pokemon/${index+1}`}>
                        <Pokemon className="pokemonSingle" url={pokemon.url} name={pokemon.name} index={index+1} key={index+1} />
                    </Link>
                    
                ))}
            </div>
        </div>

    )
}

export default PokeList;