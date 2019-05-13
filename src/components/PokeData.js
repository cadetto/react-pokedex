import React,{useState,useEffect} from 'react';


const PokeData = ({match}) => {

    const [pokemonData,setPokemonData] = useState({
        sprites:{},
        types:[],
        abilities:[]
    });
    const [pokemonSpecies,setPokemonSpecies] = useState({
        flavor_text_entries:[]
    });

    const fetchPokemonData = async () => {
        const response =  await fetch(`https://pokeapi.co/api/v2/pokemon/${match.params.id}`);
        const pokemon =  await response.json();
        setPokemonData(pokemon);
    }

    const fetchPokemonSpecies = async() =>{
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${match.params.id}`);
        const species = await response.json();
        setPokemonSpecies(species);
    }


    useEffect(() => {
        fetchPokemonData();
        fetchPokemonSpecies();
    },[])

    const pokedexEntry = pokemonSpecies.flavor_text_entries.filter((text) => text.language.name === 'en' && text.version.name === 'firered');
    
    return(
        <div className="pokemonDetail">
            <div class="leftSide">
                <div className="pokemonName">{pokemonData.name}</div>
                <div className="pokemonBasicInfo">
                    <img className="pokeBigSprite" src={pokemonData.sprites.front_default} alt=""/>
                    <p>{pokedexEntry.map((text) => text.flavor_text)}</p>
                </div>
                <div className="pokemonName">Types</div>
                <div className="pokemonTypesContainer">
                    {pokemonData.types.map( (type) => (
                        <div className="pokemonType">{type.type.name}</div>
                    ))}
                </div>
            </div>
            <div className="rightSide">
                <div className="pokemonInfo">
                    <div className="pokemonName">Detailed info</div>
                    <div className="detailedInfo">
                        <div className="info">Height: {pokemonData.height/10}m</div>
                        <div className="info">Weight: {pokemonData.weight/10}Kg</div>
                        <div className="info">Abilities:
                            { pokemonData.abilities.map( (text) => <p>{text.ability.name}</p>) }
                        </div>
                    </div>
                </div>
                <div className="pokemonSprites">
                    <img src={pokemonData.sprites.front_default} alt=""/>
                    <img src={pokemonData.sprites.back_default} alt=""/>
                    <img src={pokemonData.sprites.front_shiny} alt=""/>
                    <img src={pokemonData.sprites.back_shiny} alt=""/>
                </div>
            </div>
            
        </div>
    )
}

export default PokeData;