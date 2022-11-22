//acá voy a mostrar los datos más detallados del POKEMON

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PokemonProp = () => {

  const [charPkm, setCharPkm] = useState([])

  const { id } = useParams() //traigo el id del path='/pokemonprop/:id' del app.jsx

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
      .then(res => setCharPkm(res.data))
  }, [])

  /* console.log("charPKM", charPkm)
 */

  let nameP = charPkm.name;
  return (
    <div className='poke-props'>
      <img src="https://fontmeme.com/permalink/221121/9a9b6fbe3524c6d47a1c4a12cb060d1f.png" alt="fuente-pokemon" border="0" className='pokedex' />
      <div className='full-container'>

        <div className='prop-title'>

          <div className='prop-image-container'>
            <img className='prop-image' src={charPkm?.sprites?.other.dream_world.front_default} alt="poke" />
          </div>

          <div className='prop-name-container'>
            <h1>
              {nameP?.toUpperCase()}
            </h1>
            <h3>ID: {charPkm.id}</h3>
            <h3>Height: {charPkm.height}</h3>
            <h3>Weight: {charPkm.weight}</h3>
            <h3> Type:
              {charPkm.types?.[0].type.name}
              {charPkm.types?.[1]?.type.name === undefined ? "" : ` - ${charPkm.types?.[1].type.name}`}
            </h3>
            <h3>
              Abilities:
              {charPkm.abilities?.[0].ability.name}
              {charPkm.abilities?.[1].ability.name === undefined ? "" : ` - ${charPkm.abilities?.[1].ability.name}`}
            </h3>
          </div>
        </div>

        <div className='prop-stats'>
          <h2>STATS: </h2>
          <div className='prop-stats-container'>
            <div>
              <h4>HP</h4>
              <div className='prop-stas-circle'>{charPkm.stats?.[0].base_stat}
              </div>
            </div>
            <div>
              <h4>ATTACK</h4>
              <div className='prop-stas-circle'> {charPkm.stats?.[1].base_stat}
              </div>
            </div>
            <div>
              <h4>DEFENSE</h4>
              <div className='prop-stas-circle'> {charPkm.stats?.[2].base_stat}
              </div>
            </div>
            <div>
              <h4>SPECIAL-ATTACK</h4>
              <div className='prop-stas-circle'> {charPkm.stats?.[3].base_stat}
              </div>
            </div>
            <div>
              <h4>SPECIAL-DEFENSE</h4>
              <div className='prop-stas-circle'> {charPkm.stats?.[4].base_stat}
              </div>
            </div>
            <div>
              <h4>SPEED:</h4>
              <div className='prop-stas-circle'>{charPkm.stats?.[5].base_stat}
              </div>
            </div>
          </div>
        </div>

        <div className="prop-moves">
          <h2>MOVES</h2>
          <div>{charPkm.moves?.[0].move.name}</div>
          {/* {
            charPkm.map((movePkm) => (
              <div>
                {movePkm.moves.move.name}
              </div>
            ))
          }  */}
        </div>

      </div>
    </div >
  );
};

export default PokemonProp;