
import { Button, Col } from 'antd';
// import { connect } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';
import Searcher from './components/Searcher';
import PokemonList from './components/PokemonList';
import logo from './statics/logo.svg';
import { useEffect } from 'react';
import { getPokemon, getPokemonDetails } from './api';
import { setPokemons } from './actions';
import './App.css';


function App() {

  const pokemons = useSelector((state) => state.pokemons);
  const dispatch = useDispatch();


  // const [pokemons, setPokemons] = useState([]);

  useEffect(()=> {
    const fetchPokemons = async () => {
      const pokemonsRes = await getPokemon();
      const pokemonDetailed = await Promise.all(pokemonsRes.map(
        pokemon => getPokemonDetails(pokemon)
      ));
      dispatch(setPokemons(pokemonDetailed));
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
// using connect 
// const mapStateToProps = (state) => ({
//   pokemons: state.pokemons,
// });
// const mapDispatchToProps = (dispatch) => ({
//   setPokemons: (value) => dispatch(setPokemonsActions(value)),
// });


// export default connect(mapStateToProps, mapDispatchToProps) (App);
export default  (App);
