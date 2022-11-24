//aquí muestro todas las tarjetas de los poke y de acá dirijo a sus datos detallados en una nueva url..
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import PokemonSpecific from './PokemonSpecific';



const Pokemones = () => {

  const userName = useSelector(state => state.name)
  //esto es para traer el valor del estado a este componente
  const [pkm, setPkm] = useState([]);
  const [pkmName, setPkmName] = useState('')
  const [typePkm, setTypePkm] = useState([])

  const navigate = useNavigate()

  const { id } = useParams()

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=10`)
      .then(res => setPkm(res.data.results))

    axios
      .get(`https://pokeapi.co/api/v2/type/`)
      .then(res => setTypePkm(res.data.results))
  }, [])


  const searchPkm = () => {
    navigate(`/pokemonprop/${pkmName.toLowerCase()}`)
  }

  const filterType = (e) => {
    const url = e.target.value
    axios
      .get(url)
      .then(res => setPkm(res.data.pokemon))
  }

  /* console.log("pkm....", pkm, "type.....", typePkm) */




  return (
    <div className='container-maximus'>

      <img src="https://fontmeme.com/permalink/221120/8b3e75c6bdcb42d12038f59e34ed1903.png" alt="doblar-imagenes" border="0" className='pokedex'/>


      <div className='search-container'>
        <div className="search-name">
          <h3 style={{textAlign: "center"}}>
            {userName} choose your Pokémon!
          </h3>
        </div>
        <div className="search-choose">
          <input
            type="text"
            placeholder='Pokémon Name'
            value={pkmName}
            onChange={(e) => setPkmName(e.target.value)}
            style={{ textAlign: 'center' }}
          />

          <button onClick={searchPkm}>
            Search
          </button>

          <select className='select' onChange={filterType} name="" id="">
            <option value="Pokémon type">Pokémon type</option>
            {
              typePkm.map((type) => (
                <option
                  value={type.url}
                  //cambio NAME por URL xq la consumo para traer el tipo que selecciono en el SELECT
                  /* value={type.name} */
                  key={type.url}>
                  {type.name}
                </option>
              ))
            }
          </select>
        </div>
      </div>


      {/* card */}
      <div className='card-container'>
        {
          pkm.map(pokemonsito => (
            <div className='card' key={pokemonsito.url}>

              <PokemonSpecific
                UrlPkm={pokemonsito.url ? pokemonsito.url : pokemonsito.pokemon.url}
                key={pokemonsito.url ? pokemonsito.url : pokemonsito.pokemon.url}
              />

            </div>
          ))
        }
      </div>


    </div>
  );
};

export default Pokemones;

//Antes del filter...objeto de url
//char = {
  //name: "...."
  //url: "....."
//}

//Después del filter
//array de url....
//char = {url1..url2..url3..}