//acá voy a mostrar los datos más detallados del POKEMON

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const PokemonProp = () => {

  const [charPkm, setCharPkm] = useState({})

  const { id } = useParams() //traigo el id del path='/pokemonprop/:id' del app.jsx

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
      .then(res => setCharPkm(res.data))
  }, [])

  /* console.log("charPKM", charPkm)
 */
  const colorType = {
    grass: '#78C850',
    water: '#3899F8',
    fire: '	#F05030',
    normal: '#A8A090',
    fighting: '#A05038',
    flying: '#98A8F0',
    poison: '#B058A0',
    ground: '#E9D6A4',
    rock: '#B8A058',
    bug: '#A8B820',
    ghost: '#6060B0',
    steel: '#A8A8C0',
    electric: '#F8D030',
    psychic: '#F870A0',
    ice: '#58C8E0',
    dragon: '#7860E0',
    dark: '#7A5848',
    fairy: '#E79FE7',
    unknown: '',
    shadow: ''
  }
  const colorStyle = () => {
    let bgColor = { background: 'red' }
    if (charPkm) {
      if (charPkm.types?.[0]) {
        bgColor = { /* background: colorType[charPkm.types?.[0].type.name]  */
          background: `linear-gradient(${colorType[charPkm.types?.[0].type.name]}, 60%, transparent)`
        }
      }

      if (charPkm.types?.[0] && charPkm.types?.[1]) {
        bgColor = {
          background: `linear-gradient(${colorType[charPkm.types?.[0].type.name]}, 40%, ${colorType[charPkm.types?.[1].type.name]}, transparent)`
        }
      }
    }
    return bgColor
  }

  const circleColor = (pos) => {
    let bgColor = { backgroundColor: "red" }
    if (charPkm) {

      if (charPkm.stats?.[pos].base_stat <= 50) {
        bgColor = { backgroundColor: "crimson" }
      } else if (charPkm.stats?.[pos].base_stat >= 51 && charPkm.stats?.[pos].base_stat <= 100) {
        bgColor = { backgroundColor: 'tomato' }
      } else if (charPkm.stats?.[pos].base_stat >= 101 && charPkm.stats?.[pos].base_stat <= 150) {
        bgColor = { backgroundColor: 'gold' }
      } else if (charPkm.stats?.[pos].base_stat >= 151 && charPkm.stats?.[pos].base_stat <= 200) {
        bgColor = { backgroundColor: 'greenyellow' }
      } else { bgColor = { backgroundColor: 'green' } }

    }
    return bgColor
  }

  let nameP = charPkm.name;

  
  return (
    <div>
      <nav className='back-container'>
        <li><Link to={'/pokemones'}>
          <i className="fa-solid fa-angles-left back-arrow"></i>
        </Link></li>
      </nav>

      <div className='poke-props'>
        <img src="https://fontmeme.com/permalink/221121/9a9b6fbe3524c6d47a1c4a12cb060d1f.png" alt="fuente-pokemon" border="0" className='pokedex' />
        <div className='full-container' style={colorStyle()}>

          <div className='prop-title'>

            <div className='prop-image-container'>
              <img
                className='prop-image'
                src={charPkm?.sprites?.other.dream_world.front_default === null ? charPkm?.sprites?.other.home.front_default : charPkm?.sprites?.other.dream_world.front_default}
                alt="poke" />
            </div>

            <div className='prop-name-container'>
              <h1 className='prop-name-title'>
                {nameP?.toUpperCase()}
              </h1>
              <h3>ID: </h3>
              <div className='prop-stats-rectangle'> {charPkm.id}</div>
              <div className='prop-H-W'>
                <div>
                  <h3> <b> Height:</b> </h3> <div className='prop-stats-rectangle'  >  {charPkm.height} </div>

                </div>
                <div>
                  <h3><b> Weight:</b> </h3> <div className='prop-stats-rectangle'> {charPkm.weight} </div>

                </div>
              </div>
              <h3> <b> Type: </b></h3>
              <div className='prop-abilities'>
                <div style={{ background: `${colorType[charPkm.types?.[0]?.type.name]}`, padding: '0px 3px', borderRadius: '4px', margin: '3px' }}>
                  <div className='prop-stats-rectangle'>
                    {charPkm.types?.[0].type.name}
                  </div>
                </div>
                {
                  charPkm.types?.[1]?.type.name === undefined ? ' ' :
                    <div style={{ background: `${colorType[charPkm.types?.[1]?.type.name]}`, padding: '0px 3px', borderRadius: '4px', margin: '3px' }}>
                      <div className='prop-stats-rectangle'>
                        {charPkm.types?.[1]?.type.name === undefined ? undefined : ` ${charPkm.types?.[1].type.name}`}
                      </div>
                    </div>
                }

              </div>

              <h3> <b> Abilities:</b> </h3>
              <div className='prop-abilities'>
                <div style={{ padding: '0px 3px' }}>
                  <div className='prop-stats-rectangle'>
                    {charPkm.abilities?.[0].ability.name}
                  </div>
                </div>
                {charPkm.abilities?.[1]?.ability.name === undefined ? "" :

                  <div style={{ padding: '0px 3px' }}>
                    <div className='prop-stats-rectangle'> {charPkm.abilities?.[1].ability.name} </div>
                  </div>
                }
              </div>

            </div>
          </div>

          <div className='prop-stats'>
            <h1 className='prop-name-title'>STATS: </h1>
            <div className='prop-stats-container'>
              <div>
                <h4>HP</h4>
                <div className='prop-stas-circle' style={circleColor(0)}>{charPkm.stats?.[0].base_stat}
                </div>
              </div>
              <div>
                <h4>ATTACK</h4>
                <div className='prop-stas-circle' style={circleColor(1)}> {charPkm.stats?.[1].base_stat}
                </div>
              </div>
              <div>
                <h4>DEFENSE</h4>
                <div className='prop-stas-circle' style={circleColor(2)}> {charPkm.stats?.[2].base_stat}
                </div>
              </div>
              <div>
                <h4>SPECIAL-ATTACK</h4>
                <div className='prop-stas-circle' style={circleColor(3)}> {charPkm.stats?.[3].base_stat}
                </div>
              </div>
              <div>
                <h4>SPECIAL-DEFENSE</h4>
                <div className='prop-stas-circle' style={circleColor(4)}> {charPkm.stats?.[4].base_stat}
                </div>
              </div>
              <div>
                <h4>SPEED:</h4>
                <div className='prop-stas-circle' style={circleColor(5)}>{charPkm.stats?.[5].base_stat}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="prop-moves" style={colorStyle()}>
          <h1 className='prop-name-title'> MOVES </h1>
          <div className='moves'>
            {
              charPkm.moves?.map((movePkm) => (
                <div className='only-move' key={movePkm.move.url}>
                  {movePkm.move.name}
                </div>
              ))
            }
          </div>
        </div>

      </div>
    </div >
  );
};

export default PokemonProp;