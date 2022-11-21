import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { setSpecificName } from '../store/slices/name.slice'
import { useDispatch } from 'react-redux'

const InputName = () => {


  const [userName, setUserName] = useState("")

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const enterName = () => {
    dispatch(setSpecificName(userName))
    navigate('/pokemones')
  }

  /* const specificName = () => dispatch(setSpecificName(userName))
 */

  return (

    <div className='container-name'>
      <img className='pokedex-name' src="https://fontmeme.com/permalink/221120/8b3e75c6bdcb42d12038f59e34ed1903.png" alt="doblar-imagenes" border="0" />
      <div>
        <h2 style={{ textAlign: "center" }}>Hello Pokémon master !!</h2>
        <div> 
          
        </div>
        <input
          name='name'
          id='nme'
          type="text"
          style={{ textAlign: "center" }}
          placeholder='Tell me your name to continue!'
          onChange={e => setUserName(e.target.value)}
        />

        {/* <label htmlFor="nme" className='input-label'> <span> master </span>

      </label> */}

        <button onClick={enterName}>
          GO!!
        </button>
      </div>
    </div >

  );
};

export default InputName;