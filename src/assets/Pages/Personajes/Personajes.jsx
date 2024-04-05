// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import './Personajes.css'
import BuscadorPersonajes from '../../../components/BuscadorPersonajes'
import Gallery from './Gallery';
import axios from 'axios';

const Personajes = () => {
  const [characters, setCharacters] = useState([]);


  useEffect(() => {
    const getCharacters = async () => {

      const res = await axios('http://localhost:3000/characters');
      console.log(res.data)
        setCharacters(res.data); 
      } 
    getCharacters();
  }, []);




  return (
    <>
    <div className='personajecabezado'>

        <BuscadorPersonajes></BuscadorPersonajes>
        
      <Gallery characters={characters} />
    </div>
    </>

    
    
  )
}

export default Personajes;
