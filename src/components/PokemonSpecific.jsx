import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const PokemonSpecific = ({ UrlPkm }) => {

  const [pkmData, setPkmData] = useState({})

  useEffect(() => {
    axios
      .get(UrlPkm)
      .then(res => setPkmData(res.data))
  }, [])

  console.log("pkm data", pkmData)

let name = pkmData.name;

  return (
    <Link style={{ textDecoration: "none", textDecorationColor: "white" }} to={`/pokemonprop/${pkmData.id}`}>
      <div className='card-front' style={{backgroundColor: "transparent"}}>

        {/* <p className="card-id">
            # {pkmData.id}
        </p> */}
        
        <img className='front-image' src={pkmData.sprites?.other.dream_world?.front_default} alt="" />
        
        <h2 className='front-name'>
          {name?.toUpperCase()}
        </h2>
        {/* <h3>TYPE:{pkmData.types?.[0].type.name} </h3> */}

      </div>
    </Link>
  );
};

export default PokemonSpecific;

/* {pkmData.types[0].type.name} */