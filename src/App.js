
import { Button, Col } from 'antd';
import Searcher from './components/Searcher';
import PokemonList from './components/PokemonList';
import logo from './statics/logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { getPokemon } from './api';


function App() {
  const [pokemons, setPokemons] = useState([]);
  useEffect(()=> {
    const fetchPokemons = async () => {
      const pokemonsRes = await getPokemon();
      setPokemons(pokemonsRes);
    };
    fetchPokemons();
  },[]);


  return (
    <>
    <Col span={4} offset={10}>
      <img  className='pokeLogo' src={logo} alt='Pokedux' />
    </Col>
    <Col span={8} offset={8}>
      <Searcher />
      <Button type="primary">Button</Button>
    </Col>
    <PokemonList pokemons={pokemons} />
    </>
  );
}

export default App;
