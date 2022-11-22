import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const PokemonSpecific = ({ UrlPkm }) => {

  const [pkmData, setPkmData] = useState({})
  const [colorType, setColorType] = useState("crimson")

  useEffect(() => {
    axios
      .get(UrlPkm)
      .then(res => setPkmData(res.data))
  }, [])

  /* console.log("pkm data", pkmData) */

  let name = pkmData.name;

/* const colorTypeList = [{type: "normal", color: "pink"},{type:"grass", color:"green"},{type:"water", color:"blue"}, {type:"fire",color:"crimson"}]
let colorType = colorTypeList.filter(color => pkmData.types?.[0].type.name === "grass" ) */

  return (
    <Link style={{ textDecoration: "none", textDecorationColor: "white" }} to={`/pokemonprop/${pkmData.id}`}>

      <div className='card-front' style={{ backgroundColor: "transparent" }}>
        <h3>{colorType}</h3>
        <img className='front-image' src={pkmData.sprites?.other.dream_world?.front_default} alt="" />

        <h2 className='front-name' style={{ filter: `drop-shadow(2px 2px 2px ${colorType}` }}>
          {name?.toUpperCase()}
        </h2>

      </div>



      <div className='card-back' >

        <div className="back-type" style={{ backgroundColor: `${colorType}` }}>
          <img className='back-image' src={pkmData.sprites?.other.dream_world?.front_default} alt="" />
        </div>

        <div className="back-info" >
          <div className='back-name-container'>
            <h2 style={{ color: `${colorType}`, filter: `drop-shadow(2px 2px 2px black` }} className='back-name'>
              {name?.toUpperCase()}
            </h2>
            <h2 className='back-type' style={{ filter: `drop-shadow(2px 2px 2px black` }}>
              {pkmData.types?.[0].type.name}
              {pkmData.types?.[1]?.type.name === undefined ? "" : ` / ${pkmData.types?.[1].type.name}`}
            </h2>
            <div className='center-container'>
              <div className='back-center-line'></div>
              <div className='back-center'></div>
              <div className='back-center-white'></div>

            </div>
            <div style={{ color: `${colorType}`, filter: `drop-shadow(2px 2px 2px black` }} className='back-info-container'>
              <h4>HP: <br /> <span style={{ color: "black" }}> {pkmData.stats?.[0].base_stat} </span></h4>
              <h4>ATTACK: <br /> <span style={{ color: "black" }}> {pkmData.stats?.[1].base_stat} </span></h4>
              <h4>DEFENSE: <br /> <span style={{ color: "black" }}> {pkmData.stats?.[2].base_stat} </span></h4>
              <h4>SPECIAL-ATK: <br /> <span style={{ color: "black" }}> {pkmData.stats?.[3].base_stat} </span></h4>
              <h4>SPECIAL-DEF: <br /> <span style={{ color: "black" }}> {pkmData.stats?.[4].base_stat} </span></h4>
              <h4>SPEED: <br /> <span style={{ color: "black" }}> {pkmData.stats?.[5].base_stat} </span></h4>
            </div>
          </div>




        </div>
      </div>
      {/* <h3>TYPE:{pkmData.types?.[0].type.name} </h3> */}

    </Link>
  );
};

export default PokemonSpecific;

/* {pkmData.types[0].type.name} */