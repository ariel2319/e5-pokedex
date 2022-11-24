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

  /* console.log("pkm data", pkmData) */

  let name = pkmData.name;

  const colorType = {
                grass : '#78C850', 
                water : '#3899F8',
                fire : '	#F05030',
                normal : '#A8A090',
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
    let bgColor = {background: 'red'} 
    if (pkmData) {
      if (pkmData.types?.[0]) {
        bgColor = {background: colorType[pkmData.types?.[0].type.name]}
      }

      if (pkmData.types?.[0] && pkmData.types?.[1]){
        bgColor = {
          background: `linear-gradient(${colorType[pkmData.types?.[0].type.name]}, ${colorType[pkmData.types?.[1].type.name]})`
        }
      }
    }
    return bgColor
  } 
/* const colorTypeList = [{type: "normal", color: "pink"},{type:"grass", color:"green"},{type:"water", color:"blue"}, {type:"fire",color:"crimson"}]
let colorType = colorTypeList.filter(color => pkmData.types?.[0].type.name === "grass" ) */

  return (
    <Link style={{ textDecoration: "none", textDecorationColor: "white" }} to={`/pokemonprop/${pkmData.id}`}>

      <div className='card-front' style={{ backgroundColor: "transparent" }}>
        {/* <h3>{colorType}</h3> */}
        <img className='front-image' src={pkmData.sprites?.other.dream_world?.front_default === null ? pkmData.sprites?.other.home?.front_default : pkmData.sprites?.other.dream_world?.front_default} alt="" />

        <h2 className='front-name' style={{ filter: `drop-shadow(2px 2px 2px ${colorType[pkmData.types?.[0].type.name]}` }}>
          {name?.toUpperCase()}
        </h2>
      </div>

      <div className='card-back' >
        <div className="back-type" style={colorStyle()}>
          <img className='back-image' src={pkmData.sprites?.other.dream_world?.front_default === null ? pkmData.sprites?.other.home?.front_default : pkmData.sprites?.other.dream_world?.front_default } alt="" />
        </div>

        <div className="back-info" >
          <div className='back-name-container'>
            <h2 style={{ color: `${colorType[pkmData.types?.[0].type.name]}`, filter: `drop-shadow(2px 2px 2px black` }} className='back-name'>
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
              <h4>HP: <br /> <span style={{ color: "black" }} > {pkmData.stats?.[0].base_stat} </span></h4>
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