//acá voy a mostrar los datos más detallados del POKEMON

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PokemonProp = () => {

  const [charPkm, setCharPkm] = useState({})

  const { id } = useParams() //traigo el id del path='/pokemonprop/:id' del app.jsx

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
      .then(res => setCharPkm(res.data))
  }, [])

  console.log("charPKM", charPkm)


  let nameP = charPkm.name;
  return (
    <div className='poke-props'>
      <img src="https://fontmeme.com/permalink/221121/9a9b6fbe3524c6d47a1c4a12cb060d1f.png" alt="fuente-pokemon" border="0" className='pokedex' />
      <div className='full-container'>
        
        <img src={charPkm?.sprites?.other.dream_world.front_default} alt="poke" />
        <h1>{/* I´m POKEMONPROP  */}
          {nameP?.toUpperCase()}
        </h1>
        <h3>ID: {charPkm.id}</h3>
        <h3> Type:
          {charPkm.types?.[0].type.name}
          {charPkm.types?.[1].type.name === undefined ? "" : ` - ${charPkm.types?.[1].type.name}`
          }
        </h3>
        <h3>
          Abilities:
          {charPkm.abilities?.[0].ability.name}
          {charPkm.abilities?.[1].ability.name === undefined ? "" : ` - ${charPkm.abilities?.[1].ability.name}`}
        </h3>

        
        <h3>Height: {charPkm.height}</h3>
        <h3>Weight: {charPkm.weight}</h3>
        <h3>STATS: </h3>
        <h4>HP: {charPkm.stats?.[0].base_stat}</h4>
        <h4>ATTACK: {charPkm.stats?.[1].base_stat}</h4>
        <h4>DEFENSE: {charPkm.stats?.[2].base_stat}</h4>
        <h4>SPECIAL-ATTACK: {charPkm.stats?.[3].base_stat}</h4>
        <h4>SPECIAL-DEFENSE: {charPkm.stats?.[4].base_stat}</h4>
        <h4>SPEED: {charPkm.stats?.[5].base_stat}</h4>
      </div>
    </div>
  );
};

export default PokemonProp;